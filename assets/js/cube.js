document.addEventListener("DOMContentLoaded", function() {
    const languages = [
        "We speak English",
        "Nous parlons Français",
        "نحن نتحدث العربية",
        "نتكلم تمازيغت"
    ];
    const phrasesContainer = document.querySelector(".phrases");

    languages.forEach(language => {
        const phraseElement = document.createElement("div");
        phraseElement.textContent = language;
        phraseElement.classList.add("phrase");
        phrasesContainer.appendChild(phraseElement);
    });
});
