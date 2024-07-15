const searchInput = document.getElementById("search-input");
const articleContainer = document.getElementById("article-container");
const articleDetails = document.getElementById("article-details");
const backButton = document.createElement("div");
backButton.classList.add("back-button");
backButton.textContent = "Go back";

const articles = [
  {
    "title": "Attempted Assassination of Donald Trump",
    "content": `
      <p>In a shocking incident on Saturday evening in Pennsylvania, former President Donald Trump narrowly escaped an assassination attempt during a rally. The attempt occurred just ten minutes into his speech when eight gunshots rang out, seemingly from a rooftop overlooking the event.</p>
      <p>One of the bullets grazed Trump's ear, causing a minor injury. Chaos erupted as the crowd, gripped by fear, sought cover. The swift response of the U.S. Secret Service neutralized the threat within seconds, taking down the shooter identified as 20-year-old Thomas Matthew Crooks.</p>
      <p>Tragically, the incident resulted in two confirmed deaths: the shooter and a rally attendee. Several others sustained injuries from the gunfire. Video footage captured the tense moments, including the aftermath where Trump, undeterred, pumped his fist in the air as the crowd chanted "USA."</p>
      <p>In a startling development, authorities discovered explosive devices in the shooter's vehicle during a subsequent search. The Secret Service promptly escorted Trump off the stage to a waiting vehicle, ensuring his safety. The motives behind Crooks' actions remain under investigation as authorities piece together the events leading up to the shooting.</p>
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
      <p>${article.content.substring(0, 100)}...</p>
    `;
    articleElement.addEventListener("click", function () {
      displayArticleDetails(articles.indexOf(article));
      updateURL(articles.indexOf(article));
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
    <p>${article.content}</p>
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
