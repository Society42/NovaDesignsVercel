const searchInput = document.getElementById("search-input");
const articleContainer = document.getElementById("article-container");
const articleDetails = document.getElementById("article-details");
const backButton = document.createElement("div");
backButton.classList.add("back-button");
backButton.textContent = "Go back";

const articles = [
  {
    "title": "Attempted Assassination of Donald Trump",
    "time": "July 15, 2024 09:30 AM",
    "content": `
      <p>In a shocking incident on Saturday evening in Pennsylvania, former President Donald Trump narrowly escaped an assassination attempt during a rally. The attempt occurred just ten minutes into his speech when eight gunshots rang out, seemingly from a rooftop overlooking the event.</p>
      <p>One of the bullets grazed Trump's ear, causing a minor injury. Chaos erupted as the crowd, gripped by fear, sought cover. The swift response of the U.S. Secret Service neutralized the threat within seconds, taking down the shooter identified as 20-year-old Thomas Matthew Crooks.</p>
      <p>Tragically, the incident resulted in two confirmed deaths: the shooter and a rally attendee. Several others sustained injuries from the gunfire. Video footage captured the tense moments, including the aftermath where Trump, undeterred, pumped his fist in the air as the crowd chanted "USA."</p>
      <p>In a startling development, authorities discovered explosive devices in the shooter's vehicle during a subsequent search. The Secret Service promptly escorted Trump off the stage to a waiting vehicle, ensuring his safety. The motives behind Crooks' actions remain under investigation as authorities piece together the events leading up to the shooting.</p>
    `
  },

    {
    "title": "Body of Missing British Teen Jay Slater Found in Tenerife",
    "time": "July 16, 2024 13:42 PM",
    "content": `
      <p><strong>Tenerife, Spain</strong> – The body of British teenager Jay Slater has been found by rescue workers in Tenerife, a court spokesperson confirmed. The 19-year-old, who had been missing for 29 days, was identified through fingerprints examined during a post-mortem. The injuries were consistent with a fall from a cliff, according to the court spokesperson.</p>
        <p>Slater, who had flown to Tenerife with friends to attend a music festival, was last heard from on the morning of June 17th. He called his friend, Lucy Law, at 8:30 a.m. to report missing his bus, having a phone battery at 1%, and cutting his leg on a cactus. He was attempting to walk back to his holiday accommodation from the northern part of the island, an 11-hour journey.</p>
        <p>Spanish police stated that the Civil Guard's mountain rescue group located Slater's body in the Masca area. LBT Global, a charity supporting the Slater family, reported that the body was found with his possessions and clothes near the last known location of his mobile phone. Search teams are continuing to examine the remote area to ensure no evidence is missed.</p>
        <p>Our thoughts are with Jay Slater’s family and friends during this difficult time.</p>
    `
  }
];

function displayArticles(articlesToShow) {
  const noResultsMessage = document.querySelector('.no-results');
  noResultsMessage.style.display = "none";

  articleContainer.innerHTML = "";
  articlesToShow.forEach((article, index) => {
    const articleElement = document.createElement("div");
    articleElement.classList.add("article");
    articleElement.innerHTML = `
      <h2>${article.title}</h2>
      <div class="time">${article.time}</div>
      <div class="article-preview">
        <p>${article.content.substring(0, 100)}...</p>
      </div>
    `;
    articleElement.addEventListener("click", function () {
      displayArticleDetails(index);
      updateURL(index);
    });
    articleContainer.appendChild(articleElement);
  });

  if (articlesToShow.length === 0) {
    noResultsMessage.style.display = "block";
  }
}

function displayArticleDetails(index) {
  const article = articles[index];
  articleDetails.innerHTML = `
    <h2>${article.title}</h2>
    <div class="time">${article.time}</div>
    <div class="article-content">
      ${article.content}
    </div>
  `;
  articleDetails.style.display = "block";
  articleContainer.style.display = "none";
  articleDetails.appendChild(backButton);
}

backButton.addEventListener("click", function() {
  articleDetails.style.display = "none";
  articleContainer.style.display = "block";
  updateURL();
});

searchInput.addEventListener("input", function() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm) ||
    article.content.toLowerCase().includes(searchTerm)
  );
  displayArticles(filteredArticles);
  updateURL();
});

function updateURL(index) {
  const articleId = index !== undefined ? index + 1 : "";
  const url = window.location.origin + window.location.pathname + (articleId ? `?article=${articleId}` : "");
  window.history.pushState({}, "", url);
}

function getArticleIndexFromURL() {
  const params = new URLSearchParams(window.location.search);
  const articleId = params.get("article");
  return articleId ? parseInt(articleId) - 1 : null;
}

displayArticles(articles);

const articleIndexFromURL = getArticleIndexFromURL();
if (articleIndexFromURL !== null && articleIndexFromURL >= 0 && articleIndexFromURL < articles.length) {
  displayArticleDetails(articleIndexFromURL);
}
