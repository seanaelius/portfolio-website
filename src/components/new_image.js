export {create_image}

function create_image(src, alt, classList) {
    var img = document.createElement("img")
    img.src = src
    if ( alt != null ) img.alt = alt;
    if ( classList != null ) img.classList.add(classList);
    return img;
}