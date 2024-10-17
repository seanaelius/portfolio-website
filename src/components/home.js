export { home }; 
import { mainContent } from "..";

const home = (function() {
    const add = () => {

    //====================================================================================================================================================================================================
    //SITE INTRODUCTION
    //====================================================================================================================================================================================================
    //DEFINE INTRO
    const intro = document.createElement("div")
    intro.classList.add("intro")

    //DEFINE LS, RS
    const left_side = document.createElement("div")
    left_side.classList.add("ls-intro")
    const right_side = document.createElement("div")
    right_side.classList.add("rs-intro")

    //CREATE CONTENT FOR INTRO LS
    const greetings = document.createElement("h1")
    const name = document.createElement("h1")
    const bio = document.createElement("p")
    greetings.textContent = "Hi, my name is"
    name.textContent = "Sean Aelius"
    bio.textContent =  " I am a recent Mechanical Engineering graduate from TMU (formerly Ryerson), currently transitioning to become a Full Stack Software Engineer through an online curriculum known as The Odin Project. " 
    + "With a strong foundation in engineering and a passion for software development, I am eager to apply my analytical skills to create innovative solutions in the tech industry. "


    //ADD CONTENT TO INTRO LS
    left_side.appendChild(greetings)
    left_side.appendChild(name)
    left_side.appendChild(bio)
    
    //ADD LS, RS TO INTRO
    intro.appendChild(left_side)
    intro.appendChild(right_side) 

    //ADD INTRO TO CONTENT DIV
    mainContent.appendChild(intro)

    //====================================================================================================================================================================================================
    //ABOUT ME
    //====================================================================================================================================================================================================
    

    }  
    return { add }
})();