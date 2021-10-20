const circle = document.querySelector("#circle");
const article = document.querySelectorAll("article");

for (let el of article) {
    el.addEventListener("mouseenter", event => {
        circle.style.animationPlayState = "paused";
    });

    el.addEventListener("mouseleave", event => {
        circle.style.animationPlayState = "running";
    });
}