document.addEventListener("DOMContentLoaded", function () {
    const TOS_KEY = 'tosAccepted';
    const COOKIE_KEY = 'cookieAccepted';

    // TOS Modal
    const tosModal = document.getElementById("tos-modal");
    const acceptTosButton = document.getElementById("accept-tos");

    const thirtyDays = 30 * 24 * 60 * 60 * 1000;
    const lastAccepted = localStorage.getItem(TOS_KEY);

    if (!lastAccepted || (Date.now() - parseInt(lastAccepted) > thirtyDays)) {
        tosModal.style.display = "block";
    }

    acceptTosButton.addEventListener("click", () => {
        localStorage.setItem(TOS_KEY, Date.now().toString());
        tosModal.style.display = "none";
    });

    // Show/Hide FAQ answers
    document.querySelectorAll(".faq-question").forEach(question => {
        question.addEventListener("click", () => {
            question.nextElementSibling.classList.toggle("faq-answer");
        });
    });

    // Show/Hide Reviews
    const showMoreReviewsButton = document.getElementById("show-more-reviews");
    showMoreReviewsButton.addEventListener("click", () => {
        document.querySelectorAll(".review").forEach(review => {
            review.style.display = "block";
        });
        showMoreReviewsButton.style.display = "none";
    });

    // Show Cookie Banner
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptCookieButton = document.getElementById("accept-cookie");

    if (!localStorage.getItem(COOKIE_KEY)) {
        cookieBanner.style.display = "block";
    }

    acceptCookieButton.addEventListener("click", () => {
        localStorage.setItem(COOKIE_KEY, 'true');
        cookieBanner.style.display = "none";
    });
});
