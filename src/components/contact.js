export { contact }
import { mainContent } from "..";

const contact = (function() {
    const add = () => {
        const contactInfo = document.createElement("div")
        contactInfo.classList.add("contact")
        mainContent.appendChild(contactInfo)

    }  
    return { add } 
})();