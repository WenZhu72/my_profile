import { setupCharacter } from "./components/character.js";
import { setupPlant } from "./components/plant.js";
import { setupProfile } from "./profile.js";
import { renderProjects, setupProjects } from "./projects.js";
import { createRoom } from "./room.js";
import { setupTooltip } from "./tooltip.js";
import { setupTv } from "./components/tv.js";

const roomObjects = createRoom(document.querySelector("#room"));

renderProjects();
setupProfile(roomObjects.character);
setupTooltip();
setupProjects(roomObjects.computer);
setupCharacter(roomObjects.character);
setupPlant(roomObjects.plant, roomObjects.plantNote);
setupTv(roomObjects.tv);
