export function createPlant() {
    const plant = document.createElement("button");
    plant.className = "object-button plant interactive";
    plant.type = "button";
    plant.dataset.tooltip = "Inspect plant";
    plant.setAttribute("aria-label", "Inspect the floor plant");
    plant.innerHTML = `
        <span class="plant-shadow" aria-hidden="true"></span>
        <img class="plant-image" src="./assets/plant.png" alt="" aria-hidden="true">
    `;
    return plant;
}

export function setupPlant(plant, note) {
    if (!plant || !note) return;

    let hideTimer;
    plant.addEventListener("click", () => {
        window.clearTimeout(hideTimer);
        note.textContent = "[It's a plant.]";
        note.classList.add("is-visible");
        hideTimer = window.setTimeout(() => note.classList.remove("is-visible"), 2600);
    });
}
