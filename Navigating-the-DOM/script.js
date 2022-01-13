// Put the last child of the ul before the first child
const orderedList = document.querySelector("ol")
const lastChild = orderedList.lastElementChild;
const firstChild = orderedList.firstElementChild;
console.log(lastChild)
orderedList.insertBefore(lastChild, firstChild);

// Move the <h2> of the third section in the second one and vice-versa

const sections = document.querySelectorAll("section");
console.log(sections);
const section2Title = sections[1].firstElementChild;
const section3title = sections[2].firstElementChild.firstElementChild;
sections[1].replaceChild(section3title, section2Title);
const parento = sections[2].firstElementChild;
parento.insertBefore(section2Title, parento.firstElementChild);

// Delete the last section from the DOM, we don't need it anyways

const body = document.querySelector("body");
body.removeChild(body.children[2]);
