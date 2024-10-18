export { home }; 
import { mainContent } from "..";

const home = (function() {
    const add = () => {

    //====================================================================================================================================================================================================
    // INTRODUCTION
    //====================================================================================================================================================================================================
    //DEFINE INTRO
    const intro = document.createElement("section")
    intro.classList.add("intro")

    //DEFINE LS, RS
    const left_side = document.createElement("div")
    left_side.classList.add("ls-intro")
    const right_side = document.createElement("div")
    right_side.classList.add("rs-intro")

    //DEFINE CONTENT FOR INTRO LS
    const greetings = document.createElement("h1")
    const bio = document.createElement("p")
    greetings.textContent = "Hi, my name is Sean Aelius"
    const abstract = document.createElement("h2")
    abstract.textContent = "I'm a Software Engineer located in Toronto, ON."
    bio.textContent = "I am a lifelong learner looking to apply software solutions to real-world problems."


    //ADD CONTENT TO INTRO LS
    left_side.appendChild(greetings)
    left_side.appendChild(abstract)
    left_side.appendChild(bio)
    
    
    //ADD LS, RS TO INTRO
    intro.appendChild(left_side)
    intro.appendChild(right_side) 
    

    //ADD INTRO TO CONTENT DIV
    mainContent.appendChild(intro)

    }  
    return { add }
})();