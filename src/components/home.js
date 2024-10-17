export { home }; 
import { mainContent } from "..";

const home = (function() {
    const add = () => {

    //DEFINE INTRO
    const intro = document.createElement("div")
    intro.classList.add("intro")

    //DEFINE LS, RS
    const left_side = document.createElement("div")
    left_side.classList.add("ls-intro")
    const right_side = document.createElement("div")
    right_side.classList.add("rs-intro")

    //ADD CONTENT TO INTRO LS
    const greetings = document.createElement("h1")
    const bio = document.createElement("p")
    greetings.textContent = "Hello, my name is Sean!"
    bio.textContent = "I'm a Recent Mechanical Engineering Graduate " 
     + "turned into a Full-Stack Software Engineer."





    left_side.appendChild(greetings)
    left_side.appendChild(bio)
    
    //ADD LS, RS TO INTRO
    intro.appendChild(left_side)
    intro.appendChild(right_side) 

    //ADD INTRO TO CONTENT DIV
    mainContent.appendChild(intro)

    }  
    return { add }
})();