window.addEventListener("load", () => {
    const grid = new Isotope("section" , {
        itemSelector: "article",
        columnWidth: "aiticle",
        transitionDuration: "0.5s"
    });

    const btns = document.querySelectorAll("main ul li");

    for(let el of btns) {
        el.addEventListener("click", event => {
            event.preventDefault();
            const sort = event.currentTarget.querySelector("a").getAttribute("href");

            grid.arrange({
                filter : sort
            });

            for (let el of btns) {
                el.classList.remove("on");
            }

            event.currentTarget.classList.add("on");
        })
    }
});