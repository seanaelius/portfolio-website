export { home }; 
import { mainContent } from "..";

const home = (function() {
    const add = () => {
    //DEFINE INTRO
    const intro = document.createElement("div")
    intro.classList.add("intro")
    mainContent.appendChild(intro)
    
    //DEFINE LS, RS
    const left_side = document.createElement("div")
    left_side.classList.add("ls-intro")
    const right_side = document.createElement("div")
    right_side.classList.add("rs-intro")
    intro.appendChild(left_side)
    intro.appendChild(right_side)


    //TEST IMAGE
    const test_image = new Image()
    test_image.src = widejoy
    right_side.appendChild(test_image)
    }  
    return {add}
})();