export { projects }
import { mainContent } from "..";

const projects = (function() {
    const add = () => {
        const projectInfo = document.createElement("div")
        projectInfo.classList.add("project")
        mainContent.appendChild(projectInfo)

    }  
    return { add } 
})();