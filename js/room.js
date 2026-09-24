import { createCharacter } from "./components/character.js";
import { createComputer } from "./components/computer.js";
import { createPlant } from "./components/plant.js";
import { createTv } from "./components/tv.js";

function createRoomBackground() {
    const background = document.createElement("div");
    background.className = "room-background";
    background.setAttribute("aria-hidden", "true");
    background.innerHTML = `
        <svg class="room-planes" viewBox="0 0 1000 562.5" preserveAspectRatio="none">
            <polygon class="room-plane room-ceiling" points="0,0 1000,0 870,45 130,45"></polygon>
            <polygon class="room-plane room-side-wall" points="0,0 130,45 130,321 0,562.5"></polygon>
            <rect class="room-plane room-back-wall" x="130" y="45" width="740" height="276"></rect>
            <polygon class="room-plane room-side-wall" points="1000,0 870,45 870,321 1000,562.5"></polygon>
            <polygon class="room-plane room-floor" points="0,562.5 130,321 870,321 1000,562.5"></polygon>
        </svg>
    `;
    return background;
}

export function createRoom(room) {
    if (!room) throw new Error("Room mount point was not found.");

    const background = createRoomBackground();
    const tv = createTv();
    const rug = document.createElement("div");
    const computerScene = createComputer();
    const plant = createPlant();
    const character = createCharacter();

    const characterMessage = document.createElement("span");
    const plantNote = document.createElement("p");

    characterMessage.className = "character-message";
    characterMessage.id = "character-message";

    character.appendChild(characterMessage);

    rug.className = "rug";
    rug.setAttribute("aria-hidden", "true");

    plantNote.className = "plant-note";
    plantNote.id = "plant-note";
    plantNote.setAttribute("role", "status");
    plantNote.setAttribute("aria-live", "polite");

    room.replaceChildren(
        background,
        tv,
        rug,
        computerScene,
        plant,
        character,
        plantNote
    );

    return {
        character,
        characterMessage,
        computer: computerScene.querySelector(".computer"),
        tv,
        plant,
        plantNote
    };
}
