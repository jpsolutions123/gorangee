const btn_hover = () => {
    const link = document.querySelector(".link");
    const heading = document.querySelector(".heading");

    link.addEventListener("mouseover", () => {
        heading.style.color = "#fc5a11";
        heading.style.transition = ".4s";
    })

    link.addEventListener("mouseout", () => {
        heading.style.color = "#648000";
        heading.style.transition = ".4s";
    })
}

btn_hover();