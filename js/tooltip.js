export function setupTooltip() {
    const tooltip = document.querySelector("#cursor-tooltip");
    const objects = document.querySelectorAll("[data-tooltip]");
    if (!tooltip || !objects.length || window.matchMedia("(pointer: coarse)").matches) return;

    let pointerX = 0;
    let pointerY = 0;
    let frame = 0;

    function placeTooltip() {
        frame = 0;
        const gap = 16;
        const x = Math.min(pointerX + gap, window.innerWidth - tooltip.offsetWidth - 8);
        const y = Math.min(pointerY + gap, window.innerHeight - tooltip.offsetHeight - 8);
        tooltip.style.transform = `translate3d(${Math.max(8, x)}px, ${Math.max(8, y)}px, 0)`;
    }

    function hideTooltip() {
        tooltip.classList.remove("is-visible");
        tooltip.style.transform = "translate3d(-999px, -999px, 0)";
    }

    objects.forEach((object) => {
        object.addEventListener("pointerenter", (event) => {
            tooltip.textContent = object.dataset.tooltip;
            tooltip.classList.add("is-visible");
            pointerX = event.clientX;
            pointerY = event.clientY;
            placeTooltip();
        });

        object.addEventListener("pointermove", (event) => {
            pointerX = event.clientX;
            pointerY = event.clientY;
            if (!frame) frame = window.requestAnimationFrame(placeTooltip);
        });

        object.addEventListener("pointerleave", hideTooltip);
        object.addEventListener("blur", hideTooltip);
    });
}
