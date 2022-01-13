const orderedList = document.querySelector("ol")
const lastChild = orderedList.lastElementChild;
const firstChild = orderedList.firstElementChild;
console.log(lastChild)
orderedList.insertBefore(lastChild, firstChild);




