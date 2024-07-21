const searchInput = document.getElementById("search-input");
const articleContainer = document.getElementById("article-container");
const articleDetails = document.getElementById("article-details");
const backButton = document.createElement("div");
backButton.classList.add("back-button");
backButton.textContent = "Go back";

const articles = [
  {
    "title": "Irregular Heart Rate (Pulse)",
    "content": `
      <strong>Symptoms:</strong> </br></br>
      <strong>Increased Heart Rate (Tachycardia):</strong></br>
      Palpitations</br>
      Shortness of breath</br>
      Chest pain</br>
      Dizziness or lightheadedness</br>
      Fainting</br></br>

      <strong>Decreased Heart Rate (Bradycardia):</strong></br>
      Fatigue</br>
      Weakness</br>
      Dizziness or lightheadedness</br>
      Shortness of breath</br>
      Chest pain</br>
      Fainting or near-fainting</br></br>
  
      <strong>Treatment:</strong> </br></br>

      <strong>To Increase Heart Rate (Bradycardia):</strong></br>
      <strong>Adrenaline:</strong></br> Administered via Intravenous (IV) or Oral (By mouth) </br></br>

      <strong>To Decrease Heart Rate (Tachycardia):</strong></br>
        <strong>Beta-blockers:</strong></br> Medications such as Propranolol or Metoprolol can be administered Intravenous (IV) or Oral (By mouth).</br></br>
        <strong>Electrical Cardioversion:</strong></br> In emergencies, an electrical shock may be used to reset the heart's rhythm.</br></br>

      <strong>Hazard:</strong> Certain deviations from normal vital signs may indicate underlying health issues or emergencies. It is essential to recognize these deviations and respond promptly to ensure the well-being of individuals. Always follow medical guidelines and protocols for assessing and managing vital signs.`,
  },   
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

