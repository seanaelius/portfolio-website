export {create_element}

function create_element(type, classList, text) {
    var ele = document.createElement(`${type}`)
    if (text != null) ele.textContent = text
    if ( classList != null ) ele.classList.add(classList);
    
    return ele;
}
