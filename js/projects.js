import { projects } from "./data.js";

function createProjectLink(label, url) {
    const link = document.createElement("a");
    link.href = url;
    link.textContent = label;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    return link;
}

function createProjectCard(project, index) {
    const article = document.createElement("article");
    article.className = "project-card";

    const number = document.createElement("span");
    number.className = "project-number";
    number.textContent = String(index + 1).padStart(2, "0");

    const title = document.createElement("h3");
    title.textContent = project.name;

    const description = document.createElement("p");
    description.className = "project-description";
    description.textContent = project.description;

    const technology = document.createElement("p");
    technology.className = "project-tech";
    technology.textContent = `Technologies: ${project.technologies}`;

    article.append(number, title, description, technology);

    if (project.github) {
        const links = document.createElement("div");
        links.className = "project-links";
        links.append(createProjectLink("View on GitHub →", project.github));
        article.append(links);
    }

    return article;
}

export function renderProjects() {
    document.querySelectorAll("#project-grid").forEach((grid) => {
        const fragment = document.createDocumentFragment();
        projects.forEach((project, index) => fragment.append(createProjectCard(project, index)));
        grid.replaceChildren(fragment);
    });
}

export function setupProjects(computer) {
    const dialog = document.querySelector("#projects-dialog");
    const closeButton = document.querySelector(".close-projects");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!computer || !dialog || !closeButton) return;

    function openProjects(event) {
        const trigger = event.currentTarget.getBoundingClientRect();
        const x = ((trigger.left + trigger.width / 2) / window.innerWidth) * 100;
        const y = ((trigger.top + trigger.height / 2) / window.innerHeight) * 100;
        dialog.style.setProperty("--origin-x", `${x}%`);
        dialog.style.setProperty("--origin-y", `${y}%`);
        dialog.showModal();
    }

    function closeProjects() {
        if (reducedMotion.matches) {
            dialog.close();
            return;
        }

        dialog.classList.add("is-closing");
        window.setTimeout(() => {
            dialog.classList.remove("is-closing");
            dialog.close();
        }, 220);
    }

    computer.addEventListener("click", openProjects);
    closeButton.addEventListener("click", closeProjects);
    dialog.addEventListener("cancel", (event) => {
        event.preventDefault();
        closeProjects();
    });
    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) closeProjects();
    });
}
