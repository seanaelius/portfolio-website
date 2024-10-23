export { nav }; 
const body = document.querySelector("body")

const nav = (function() {
    const add = () => {
   
    //DEFINE HEADER
    const header = document.createElement("header")
    header.classList.add("header")

    //DEFINE NAV BAR
    const nav_bar = document.createElement("nav")
    nav_bar.classList.add("nav_bar")

    //DEFINE HOME BUTTON
    const nav_home = document.createElement("button")
    nav_home.classList.add("nav-home")
    nav_home.textContent = "Home"

    //DEFINE ABOUT BUTTON
    const nav_about = document.createElement("button")
    nav_about.classList.add("nav-about")
    nav_about.textContent = "About"

    //DEFINE PROJECT BUTTON
    const nav_project = document.createElement("button")
    nav_project.classList.add("nav-projects")
    nav_project.textContent = "Projects"    


    //DEFINE CONTACT BUTTON
    const nav_contact = document.createElement("button")
    nav_contact.classList.add("nav-contact")
    nav_contact.textContent = "Contact"


    //ADD NAV OPTIONS TO NAV 
    nav_bar.appendChild(nav_home)
    nav_bar.appendChild(nav_about)
    nav_bar.appendChild(nav_project)
    nav_bar.appendChild(nav_contact)
   
    //DEFINE LOGO
    const logo = document.createElement("div")
    logo.classList.add("logo")
    logo.textContent = "seanaelius"

    //ADD LOGO TO HEADER
    header.appendChild(logo)

    //ADD NAV TO HEADER
    header.appendChild(nav_bar)

    //ADD HEADER TO MAIN CONTENT
    body.prepend(header)

    //PROJECTS TO BE ADDED
    //ODIN ETCH-A-SKETCH
    //ODIN CALCULATOR
    //ODIN ROCK PAPER SCISSORS
    //ODIN TIC-TAC-TOE
    //ODIN ADMIN DASHBOARD
    //GENSHIN IMPACT WISH SIMULATOR
    //ODIN WEATHER APP
    //ODIN TO-DO LIST
    //FULL STACK APP
    }  
    return { add }
})();
