document.addEventListener("DOMContentLoaded", () => {
    const btnOpen = document.getElementById("menuOpen");
    const btnClose = document.getElementById("menuClose");

    const camp = document.querySelector(".camp");

    btnOpen.addEventListener("click", () => {
        btnOpen.classList.add("hidden");
        camp.classList.remove("hidden");
    });

    btnClose.addEventListener("click", () => {
        camp.classList.add("hidden");
        btnOpen.classList.remove("hidden");
    });
});
