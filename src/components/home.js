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
import confluence_icon from "./images/confluence.svg"
import docker_icon from "./images/docker.svg"
import git_icon from "./images/git-icon.svg"
import github_icon from "./images/github-icon.svg"
import jira_icon from "./images/jira.svg"

//FRAMEWORKS
//TO BE ADDED AT A LATER TIME


//IMAGE CREATOR FUNCTION
import { create_image } from "./new_image";

//ELEMENT CREATOR FUNCTION
import { create_element } from "./create_element";

//PROJECT CREATOR FUNCTION
import { create_project } from "./create_project";



const home = (function() {
    const add = () => {

    //====================================================================================================================================================================================================
    // INTRODUCTION
    //====================================================================================================================================================================================================
    //DEFINE INTRO
    const intro = document.createElement("section")
    intro.classList.add("intro")

    const intro_text = document.createElement("div")
    intro_text.classList.add("intro-text")

    //DEFINE CONTENT FOR INTRO LS
    const greetings = document.createElement("h1")
    const bio = document.createElement("p")
    greetings.textContent = "Hi, my name is Sean Aelius"
    const abstract = document.createElement("h2")
    abstract.textContent = "I'm a Software Engineer"
    bio.textContent = "I am a lifelong learner looking to apply software solutions to real-world problems"
    
    //ADD GREETINGS, ABSTRACT, BIO TO INTRO
    intro_text.appendChild(greetings)
    intro_text.appendChild(abstract) 
    intro_text.appendChild(bio) 

    intro.appendChild(intro_text)
    

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
    const skills_title = create_element("h2","skills-title","Skills")
    const tech_stack = create_element("div","tech-stack")

    skills.appendChild(skills_title)

    // TECH STACK
    const tech_stack_container =  create_element("div", "tech-stack-container")
    const tech_stack_title = create_element("h2", "tech-stack-title", "Tech Stack:")

    // CREATE IMAGE FORMAT 
    // create_image(src, alt, classList)

    //CREATE ELEMENT FORMAT
    // create_element(type, classList, textContent)

    // ADD TECH STACK TO LIST OF SKILLS
    tech_stack_container.appendChild(create_image(html_icon, "html", "skill"))
    tech_stack_container.appendChild(create_image(css_icon, "css", "skill"))
    tech_stack_container.appendChild(create_image(js_icon,"js","skill"))
    tech_stack_container.appendChild(create_image(react_icon,"react","skill"))
    tech_stack_container.appendChild(create_image(python_icon,"python","skill"))
    tech_stack_container.appendChild(create_image(nodejs_icon,"nodejs","skill"))
    tech_stack_container.appendChild(create_image(postgresql_icon,"postgresql","skill"))

    tech_stack.appendChild(tech_stack_title)
    tech_stack.appendChild(tech_stack_container)

    skills.appendChild(tech_stack)
  
    // ADD DEVELOPER TOOLS TO LIST OF SKILLS
    const dev_tools_title = create_element("h2", "dev-tools-title", "Developer Tools:")
    const dev_tools = create_element("div","dev-tools")
    dev_tools.appendChild(dev_tools_title)
    const dev_tools_container =  create_element("div", "dev-tools-container")

    dev_tools_container.appendChild(create_image(confluence_icon, "confluence", "skill"))
    dev_tools_container.appendChild(create_image(docker_icon, "docker", "skill"))
    dev_tools_container.appendChild(create_image(git_icon, "git", "skill"))
    dev_tools_container.appendChild(create_image(github_icon, "github", "skill"))
    dev_tools_container.appendChild(create_image(jira_icon, "jira", "skill"))

    dev_tools.appendChild(dev_tools_container)
    skills.appendChild(dev_tools)

    mainContent.appendChild(skills)
    //====================================================================================================================================================================================================
    //PROJECTS
    //====================================================================================================================================================================================================
    
    //PROJECT SECTION
    const projects_section = create_element("section", "projects")
    const project_title = create_element("h2","projects-title","Projects")
    projects_section.appendChild(project_title)

    //CREATE PROJECT SYNTAX:
    //create_project(name, title, desc)

    //PROJECTS
    const etch_a_sketch =  create_project("sketch", "Etch-A-Sketch", "An Etch-A-Sketch that utilizes HTML, CSS, and JavaScript by applying DOM Manipulation and Event Listeners to create a sketch pad app.")
    const tic_tac_toe = create_project("tictactoe","Tic-Tac-Toe", "A front-end tic-tac-toe web app that uses JavaScript Objects and modular design to create a classic game.")
    const weather_app = create_project("weather", "Weather App",)
    const todo_app = create_project("todo", "To-Do List",)
    const wish_simulator = create_project("genshin","Genshin Impact Wish Simulator [IN-PROGRESS]", 'An online web simulation of a famous gacha game wishing system from a title known as "Genshin Impact" by HoyoVerse.')

    //APPEND ALL PROJECTS
    let proj_array = [];
    proj_array.push(etch_a_sketch,tic_tac_toe,weather_app,todo_app,wish_simulator)
    for (let i in proj_array) {
        projects_section.appendChild(proj_array[i])
    };
    
    mainContent.appendChild(projects_section)

    //TO BUILD IN THE FUTURE:
    //BATTLESHIP
    //BEAM LOADING APP
    //CREATE A GOOGLE CHROME EXTENSION
    //CONTRIBUTE TO OPEN SOURCE PROJECTS


    //====================================================================================================================================================================================================
    //CONTACT
    //====================================================================================================================================================================================================
    const contact_section = create_element("section", "contact")
    const contact_title = create_element("h2", "Contact")
    contact_section.appendChild(contact_title)

    //CREATE A FORM HERE




    }  
    return { add }
})();