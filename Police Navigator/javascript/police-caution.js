function showCaution(id) {
    var dictionaryTerms = document.getElementsByClassName('dictionary-term');
    
    for (var i = 0; i < dictionaryTerms.length; i++) {
        dictionaryTerms[i].classList.remove('active');
    }
    
    var selectedTerm = document.getElementById(id);
    selectedTerm.classList.add('active');
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// Language strings for Police Caution and Miranda Rights
const cautionStrings = {
    "en-GB": {
        "caution-title": "Police Caution | When",
        "caution-text": "You do not have to say anything, but it may harm your defence if you do not mention, when questioned, something which you later rely on in court. Anything you do say may be given in evidence.",
        "van-caution-title": "Not fitted with Audio and Video Taping",
        "van-caution-text": "This van has been searched prior to your arrest. Anything found in it afterwards will be deemed as yours."
    },
    "en-US": {
        "caution-title": "Miranda Rights",
        "caution-text": "You have the right to remain silent. Anything you say can and will be used against you in a court of law. You have the right to an attorney. If you cannot afford an attorney, one will be provided for you.",
        "van-caution-title": "Van Caution | Not fitted with Audio and Video Taping",
        "van-caution-text": "This van has been searched prior to your arrest. Anything found in it afterwards will be deemed as yours. This van is also fitted with Audio and video recording so anything you do or say may be used against you and will be captured."
    }
};
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function showCaution(cautionId) {
    const language = getCookie('language') || 'en-GB';
    const strings = cautionStrings[language];

    document.getElementById('caution-title').textContent = strings['caution-title'];
    document.getElementById('caution-text').textContent = strings['caution-text'];
    document.getElementById('van-caution-title').textContent = strings['van-caution-title'];
    document.getElementById('van-caution-text').textContent = strings['van-caution-text'];
}

document.addEventListener('DOMContentLoaded', (event) => {
    showCaution();
});
