export { about }
import { mainContent } from "..";

const about = (function() {
    const add = () => {
        const aboutInfo = document.createElement("div")
        aboutInfo.classList.add("about")
        mainContent.appendChild(aboutInfo)

    }  
    return { add } 
})();