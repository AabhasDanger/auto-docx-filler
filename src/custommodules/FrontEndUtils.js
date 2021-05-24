//util function to create element
function createElement(type,contents,attributes){
    let elm = document.createElement(type)
    
    contents = contents == undefined ? '' : contents

    contents = document.createTextNode(contents)

    elm.appendChild(contents)

    let enteriesArr = Object.entries(attributes)

    enteriesArr.forEach(attribute => elm.setAttribute(attribute[0],attribute[1]))

    return elm
}


//util function to append element
function appendElement(child,elm){
    elm.appendChild(child)

    return elm
}


//util function to clear children of an element
function clearElement(elm){
    let children = [...elm.children]

    children.forEach(elm => elm.remove())
}