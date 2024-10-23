import "./styles.css"
import { home } from "./components/home"
import { nav } from "./components/nav_bar/nav_bar"
export const mainContent = document.querySelector("#content")


nav.add()
home.add()

//CLEAR CONTENT DIV FUNCTION
function clear() {
    mainContent.innerHTML = ""
}

//ADD EVENT LISTENER FOR HOME BUTTON
const homeButton = document.querySelector(".nav-home")
homeButton.addEventListener("click", () => {

})


//ADD EVENT LISTENER FOR ABOUT BUTTON
const aboutButton = document.querySelector(".nav-about")
aboutButton.addEventListener("click", () => {
 
})


const contactButton = document.querySelector(".nav-contact")
contactButton.addEventListener("click", () => {

})

const projectButton = document.querySelector(".nav-projects")
projectButton.addEventListener("click", () => {

})
