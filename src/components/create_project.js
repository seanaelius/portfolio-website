export {create_project}

function create_project(name, title, desc) {
    var proj = document.createElement("div")
    var proj_title = document.createElement("h3")
    var proj_desc = document.createElement("p")
    if ( title != null ) proj_title.textContent = `${title}`;
    if ( desc != null ) proj_desc.textContent = `${desc}`;
    

    //ADD CLASS TO THESE ELEMENTS
    if ( name != null ) proj_title.classList.add(`${name}` + '-project-title');
    if ( name != null ) proj.classList.add(`${name}` + '-project');
    if ( name != null ) proj_desc.classList.add(`${name}` + '-project-desc');

    //ADD THESE ELEMENTS TO DIV
    proj.appendChild(proj_title)
    proj.appendChild(proj_desc)
    return proj;
}


//EXAMPLE
//etch_a_sketch.appendChild(create_element("p","sketch-para","An Etch-A-Sketch that utilizes HTML, CSS, and JavaScript by applying DOM Manipulation and Event Listeners to create a sketch pad app."))
//etch_a_sketch.appendChild(create_element("h3","sketch-title","Etch-A-Sketch"))

//OPTIONAL IMAGE TO BE ADDED
//etch_a_sketch.appendChild(create_image())
