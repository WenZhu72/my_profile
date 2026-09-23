import { profileSections } from "./data.js";

export function setupProfile(character) {
    const title = document.querySelector("#profile-title");
    const text = document.querySelector("#profile-text");
    const copy = document.querySelector(".profile-copy");
    const tabs = document.querySelectorAll(".profile-tab[data-section]");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!title || !text || !copy || !tabs.length) return;

    function selectSection(sectionKey, shouldScroll = false) {
        const section = profileSections[sectionKey];
        if (!section) return;

        tabs.forEach((tab) => {
            const selected = tab.dataset.section === sectionKey;
            tab.classList.toggle("is-active", selected);
            tab.setAttribute("aria-pressed", String(selected));
        });

        const update = () => {
            title.textContent = section.title;
            const isEducation = sectionKey === "education";
            text.classList.toggle("is-education", isEducation);

            if (isEducation) {
                const details = [
                    ["strong", "education-institution", section.institution],
                    ["span", "education-degree", section.degree],
                    ["span", "education-dates", section.dates],
                    ["span", "education-classification", section.classification]
                ].map(([tag, className, value]) => {
                    const line = document.createElement(tag);
                    line.className = className;
                    line.textContent = value;
                    return line;
                });
                text.replaceChildren(...details);
            } else {
                text.textContent = section.text;
            }
            copy.classList.remove("is-changing");
        };

        if (reducedMotion.matches) {
            update();
        } else {
            copy.classList.add("is-changing");
            window.setTimeout(update, 120);
        }

        if (shouldScroll) {
            document.querySelector("#profile-panel")?.scrollIntoView({
                behavior: reducedMotion.matches ? "auto" : "smooth",
                block: "center"
            });
        }
    }

    tabs.forEach((tab) => tab.addEventListener("click", () => selectSection(tab.dataset.section)));
    character?.addEventListener("click", () => selectSection("about", true));
}
