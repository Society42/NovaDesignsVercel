document.addEventListener("DOMContentLoaded", function () {
  const languageSelector = document.getElementById("language-selector");

  // Load default language on page load
  const defaultLanguage = localStorage.getItem("selectedLanguage") || "en";
  languageSelector.value = defaultLanguage;

  // Event listener for language selector change
  languageSelector.addEventListener("change", function () {
    const selectedLanguage = languageSelector.value;
    localStorage.setItem("selectedLanguage", selectedLanguage);
    loadLanguage(selectedLanguage);
  });

  // Function to load language-specific content
  function loadLanguage(language) {
    fetch(`./language/lang-${language}.json`)
      .then((response) => response.json())
      .then((data) => {
        // Update forum posts section
        updateForumPosts(data.forumPosts);

        // Update footer links
        document.querySelector(
          ".footer-links a[href='terms.html']"
        ).textContent = data.homepage.termsLink;
        document.querySelector(
          ".footer-links a[href='privacy.html']"
        ).textContent = data.homepage.privacyLink;
      })
      .catch((error) => {
        console.error("Error loading language file:", error);
      });
  }

  // Function to update forum posts section
  function updateForumPosts(forumPosts) {
    const forumPostsContainer = document.getElementById("forum-posts");
    forumPostsContainer.innerHTML = ""; // Clear previous content

    forumPosts.forEach((post) => {
      const postElement = createForumPostElement(post);
      forumPostsContainer.appendChild(postElement);
    });
  }

  // Function to create forum post elements
  function createForumPostElement(post) {
    const postElement = document.createElement("div");
    postElement.className = "forum-post";

    const titleElement = document.createElement("h3");
    titleElement.className = "post-title";
    titleElement.textContent = post.title;

    if (post.isNew) {
      const newLabel = document.createElement("span");
      newLabel.className = "new-post-label";
      newLabel.textContent = "New";
      titleElement.appendChild(newLabel);
    }

    const contentElement = document.createElement("p");
    contentElement.className = "post-description";
    contentElement.textContent = post.content;

    const userInfoElement = document.createElement("div");
    userInfoElement.className = "user-info";

    if (post.role) {
      userInfoElement.innerHTML = `
        <span class="username">${post.username}</span> | 
        <span class="user-role">${post.role}</span> | 
        <span class="post-date">${post.date}</span>
      `;
    } else {
      userInfoElement.innerHTML = `
        <span class="username">${post.username}</span> | 
        <span class="post-date">${post.date}</span>
      `;
    }

    postElement.appendChild(titleElement);
    postElement.appendChild(contentElement);
    postElement.appendChild(userInfoElement);

    return postElement;
  }

  // Load the selected language on initial load
  loadLanguage(defaultLanguage);
});
