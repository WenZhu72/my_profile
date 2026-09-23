export function createTv() {
    const tv = document.createElement("button");
    tv.className = "object-button tv-search-trigger interactive";
    tv.type = "button";
    tv.dataset.tooltip = "Search the BBC";
    tv.setAttribute("aria-label", "Open BBC search");
    tv.setAttribute("aria-haspopup", "dialog");
    tv.setAttribute("aria-controls", "tv-search-modal");
    tv.innerHTML = `
        <span class="tv-antenna tv-antenna-left" aria-hidden="true"></span>
        <span class="tv-antenna tv-antenna-right" aria-hidden="true"></span>
        <span class="tv-set" aria-hidden="true">
            <span class="tv-screen">
                <span class="tv-screen-shine"></span>
                <span class="tv-screen-mark">BBC</span>
            </span>
            <span class="tv-controls">
                <span class="tv-knob"></span>
                <span class="tv-knob"></span>
                <span class="tv-speaker-lines"></span>
            </span>
        </span>
        <span class="tv-foot tv-foot-left" aria-hidden="true"></span>
        <span class="tv-foot tv-foot-right" aria-hidden="true"></span>
        <span class="tv-shadow" aria-hidden="true"></span>
    `;
    return tv;
}

export function setupTv(tv) {
    const modal = document.querySelector("#tv-search-modal");
    const closeButton = modal?.querySelector(".tv-search-close");
    const input = modal?.querySelector(".tv-search-input");
    if (!tv || !modal || !closeButton || !input) return;

    function closeModal() {
        modal.close();
    }

    tv.addEventListener("click", () => {
        modal.showModal();
        window.setTimeout(() => input.focus(), 0);
    });

    closeButton.addEventListener("click", closeModal);
    modal.addEventListener("cancel", (event) => {
        event.preventDefault();
        closeModal();
    });
    modal.addEventListener("click", (event) => {
        if (event.target === modal) closeModal();
    });
}
