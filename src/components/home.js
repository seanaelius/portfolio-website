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

    //====================================================================================================================================================================================================
    //ABOUT ME
    //====================================================================================================================================================================================================
    //DEFINE ABOUT ME SECTION
    const about_me = document.createElement("section")
    about_me.classList.add("about-me")
    
    const about_me_title = document.createElement("h2")
    const about_me_para = document.createElement("p")
    about_me_title.textContent = "About Me"
    about_me_para.textContent = "I am a recent Mechanical Engineering graduate from TMU (formerly Ryerson), currently transitioning to become a Full Stack Software Developer. " 
    + "With a strong foundation in engineering and a passion for software development, I am eager to apply my analytical skills to create innovative solutions in the tech industry. "
    + "During my time as an undergrad, I very often found myself using MATLAB or Python to solve many of my lab reports and engineering assignments. "
    + "This quickly turned into a personal hobby where I continued to develop various applications. "
    + 'Since then I have been following an online curriculum known as "The Odin Project", which has helped me learn the necessary foundations to become a software engineer. ' 

    const about_me_para_2 = document.createElement("p")
    about_me_para_2.textContent = ""

    //ADD CONTENT TO ABOUT_ME
    about_me.appendChild(about_me_title)
    about_me.appendChild(about_me_para)

    //ADD ABOUT_ME TO MAIN.CONTENT 
    mainContent.appendChild(about_me)
    
    //====================================================================================================================================================================================================
    //SKILLS
    //====================================================================================================================================================================================================
    //DEFINE SKILLS
    const skills = document.createElement("section")
    skills.classList.add("skills")
    const skills_title = document.createElement("h2")
    skills_title.textContent = "Current Tech-Stack:"
    skills.appendChild(skills_title)
    
    //DEFINE TECH STACK 
    let tech_stack_list = ['html', 'css', 'js', 'react','node','git','python','r','matlab','sql',]
    
    //ADD CONTENT TO SKILLS
    for (let language in tech_stack_list) {
        let div = document.createElement("div")
        div.textContent = `${tech_stack_list[language]}`
        div.classList = `${tech_stack_list[language]}`
        skills.appendChild(div)
    }

    //ADD SKILLS TO MAIN.CONTENT
    mainContent.appendChild(skills)

    //====================================================================================================================================================================================================
    //CONTACT
    //====================================================================================================================================================================================================
    
    }  
    return { add }
})();