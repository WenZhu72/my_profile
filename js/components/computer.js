export function createComputer() {
    const desk = document.createElement("div");
    desk.className = "desk-scene";
    desk.setAttribute("aria-label", "Desk with computer");
    desk.innerHTML = `
        <svg class="desk-frame" viewBox="0 0 500 220" preserveAspectRatio="none" aria-hidden="true">
            <polygon class="desk-piece desk-rear-leg-piece" points="98,74 122,74 120,195 100,195"></polygon>
            <polygon class="desk-piece desk-rear-leg-piece" points="378,74 402,74 400,195 380,195"></polygon>
            <polygon class="desk-piece desk-top-piece" points="42,40 458,40 480,67 20,67"></polygon>
            <rect class="desk-piece desk-apron-piece" x="42" y="67" width="416" height="17"></rect>
            <polygon class="desk-piece desk-leg-piece" points="55,84 82,84 79,215 57,215"></polygon>
            <polygon class="desk-piece desk-leg-piece" points="418,84 445,84 443,215 421,215"></polygon>
        </svg>
        <button class="object-button computer interactive" type="button"
                data-tooltip="View projects" aria-label="Open projects on the computer">
            <span class="monitor" aria-hidden="true">
                <span class="monitor-screen">
                    <span class="screen-dot"></span>
                    <span class="screen-title">PROJECTS</span>
                    <span class="screen-row"></span>
                    <span class="screen-row short"></span>
                </span>
                <span class="monitor-neck"></span>
                <span class="monitor-base"></span>
            </span>
        </button>
        <img class="keyboard" src="./assets/keyboard.png" alt="" aria-hidden="true">
    `;
    return desk;
}
