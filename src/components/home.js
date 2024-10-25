export { home }; 
import { mainContent } from "..";
//IMPORT ICONS FROM IMAGES FOLDER
//TECH STACK
import html_icon from "./images/html-5.svg"
import css_icon from "./images/css-3.svg"
import js_icon from "./images/javascript.svg"
import react_icon from "./images/react.svg"
import python_icon from "./images/python.svg"
import nodejs_icon from "./images/nodejs-icon.svg"
import postgresql_icon from "./images/postgresql.svg"

//DEVELOPER TOOLS
import bootstrap_icon from "./images/bootstrap.svg"
import confluence_icon from "./images/confluence.svg"
import docker_icon from "./images/docker.svg"
import git_icon from "./images/git-icon.svg"
import github_icon from "./images/github-icon.svg"
import jira_icon from "./images/jira.svg"

//FRAMEWORKS
//TO BE ADDED AT A LATER TIME


//IMAGE CREATER FUNCTION
import { create_image } from "./new_image";
import { create_element } from "./create_element";



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
    const skills = create_element("section","skills")
    const skills_title = create_element("h2","skills-title","Current Tech-Stack:")
    const tech_stack = create_element("div","tech-stack")

    tech_stack.appendChild(skills_title)
    
    // TECH STACK
    // CREATE IMAGE FORMAT 
    // create_image(src, alt, classList)

    //CREATE ELEMENT FORMAT
    // create_element(type, classList, textContent)

    // ADD TECH STACK TO LIST OF SKILLS
    tech_stack.appendChild(create_image(html_icon, "html", "html-skill"))
    tech_stack.appendChild(create_image(css_icon, "css", "css-skill"))
    tech_stack.appendChild(create_image(js_icon,"js","js-skill"))
    tech_stack.appendChild(create_image(react_icon,"react","react-skill"))
    tech_stack.appendChild(create_image(python_icon,"python","python-skill"))
    tech_stack.appendChild(create_image(nodejs_icon,"nodejs","nodejs-skill"))
    tech_stack.appendChild(create_image(postgresql_icon,"postgresql","postgresql-skill"))

    skills.appendChild(tech_stack)
  
    // ADD DEVELOPER TOOLS TO LIST OF SKILLS
    const dev_tools_title = create_element("h2", "dev-tools-title", "Developer Tools:")
    const dev_tools = create_element("div","dev-tools")
    dev_tools.appendChild(dev_tools_title)

    dev_tools.appendChild(create_image(confluence_icon,"confluence", "confluence-skill"))
    dev_tools.appendChild(create_image(docker_icon,"docker","docker-skill"))
    dev_tools.appendChild(create_image(git_icon,'git','git-skill'))
    dev_tools.appendChild(create_image(github_icon,'github','github-skill'))
    dev_tools.appendChild(create_image(jira_icon,'jira','jira-icon'))

    skills.appendChild(dev_tools)

    mainContent.appendChild(skills)
    //====================================================================================================================================================================================================
    //PROJECTS
    //====================================================================================================================================================================================================

    //ODIN ETCH-A-SKETCH
    //ODIN ROCK-PAPER-SCISSORS (CLEAN THIS UP)
    //ODIN TIC-TAC-TOE (CLEAN THIS UP)
    //EXPENSE TRACKER
    //GENSHIN IMPACT WISH SIMULATOR
    //MECH ENGINEERING PROJECT
    //ODIN WEATHER APP
    //ODIN TO-DO LIST
    
    //CREATE A GOOGLE CHROME EXTENSION
    //CONTRIBUTE TO OPEN SOURCE PROJECTS


    //====================================================================================================================================================================================================
    //CONTACT
    //====================================================================================================================================================================================================
    
    //DEVELOPER TOOLS
    /*
import bootstrap_icon from "./images/bootstrap.svg"
import confluence_icon from "./images/confluence.svg"
import docker_icon from "./images/docker.svg"
import git_icon from "./images/git-icon.svg"
import github_icon from "./images/github-icon.svg"
import jira_icon from "./images/jira.svg"
*/
        
    }  
    return { add }
})();