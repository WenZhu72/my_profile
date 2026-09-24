const idlePoses = ["pose-lean", "pose-wave", "pose-shift"];

export function createCharacter() {
    const character = document.createElement("button");
    character.className = "object-button character interactive";
    character.type = "button";
    character.dataset.tooltip = "View profile";
    character.setAttribute("aria-label", "View Wen's profile");
    character.innerHTML = `
        <span class="chair-back" aria-hidden="true"></span>
        <span class="chair-leg chair-leg-left" aria-hidden="true"></span>
        <span class="chair-leg chair-leg-right" aria-hidden="true"></span>
        <span class="chair-seat" aria-hidden="true"></span>

        <span class="character-rig" aria-hidden="true">
            <span class="photo-head"><img src="./profile-photo.png" alt=""></span>
            <svg class="stick-figure" viewBox="0 0 160 250" focusable="false">
                <path class="stick-line torso" d="M80 42 L80 142" />
                <g class="arm-left">
                    <path class="stick-line" d="M80 75 L51 111 L28 108" />
                </g>
                <g class="arm-right">
                    <path class="stick-line" d="M80 75 L109 103 L136 98" />
                </g>
                <g class="leg-left">
                    <path class="stick-line" d="M80 142 L56 166 L35 242" />
                </g>
                <g class="leg-right">
                    <path class="stick-line" d="M80 142 L108 166 L127 242" />
                </g>
                <circle class="stick-joint" cx="80" cy="75" r="4" />
                <circle class="stick-joint" cx="80" cy="142" r="4" />
            </svg>
        </span>
    `;
    return character;
}

export function setupCharacter(character, characterMessage) {
    
    const message = [
        "Ow.",
        "Owwie.",
        "ouch",
        "stop it."
    ]

    let messageTimer;

    character.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * message.length);

        characterMessage.textContent = message[randomIndex];
        characterMessage.classList.add("is-visible");

        clearTimeout(messageTimer);

        messageTimer = setTimeout(() => {
            characterMessage.classList.remove("is-visible");
        }, 1000)
    })
    
    
    const rig = character?.querySelector(".character-rig");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!rig || reducedMotion.matches) return;

    let idleTimer;

    function scheduleIdle() {
        if (reducedMotion.matches) return;
        const delay = 5500 + Math.random() * 5000;
        idleTimer = window.setTimeout(playIdle, delay);
    }

    function playIdle() {
        if (document.hidden) {
            scheduleIdle();
            return;
        }

        if (reducedMotion.matches) return;

        const pose = idlePoses[Math.floor(Math.random() * idlePoses.length)];
        rig.classList.add(pose);
        window.setTimeout(() => {
            rig.classList.remove(pose);
            scheduleIdle();
        }, 900 + Math.random() * 450);
    }

    function handleMotionPreference(event) {
        window.clearTimeout(idleTimer);
        idlePoses.forEach((pose) => rig.classList.remove(pose));
        if (!event.matches) scheduleIdle();
    }

    reducedMotion.addEventListener("change", handleMotionPreference);
    scheduleIdle();
}
