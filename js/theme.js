const themeToggle = document.getElementById("theme-toggle")
const body = document.querySelector("body")

themeToggle.addEventListener("click", () => {
    body.classList.toggle("theme-dark")
})