const allItems = document.querySelectorAll('.important')
for (let i = 0; i < allItems.length; i++) {
    allItems[i].setAttribute("title", "this is an important item")
}

console.log(allItems[0].getAttribute('title'))