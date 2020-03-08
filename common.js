let menuButton = document.getElementById("menuButton")
let sidenav = document.getElementById("sidenav")
sidenav.style.display = "none"

menuButton.addEventListener("click", event => {
    if (sidenav.style.display === "none") sidenav.style.display = "inline"
    else sidenav.style.display = "none"
})

document.querySelectorAll(".social-button").forEach(element => {
    element.addEventListener("mouseover", event => {
        if (element.classList.contains("small")) element.style.maxWidth = "5%"
        else element.style.maxWidth = "10%"
    })
    element.addEventListener("mouseout", event => {
        if (element.classList.contains("small")) element.style.maxWidth = "2%"
        else element.style.maxWidth = "7%"
    })
});