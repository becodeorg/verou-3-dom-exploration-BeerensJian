const allItems = document.querySelectorAll('.important');
for (let i = 0; i < allItems.length; i++) {
    allItems[i].setAttribute("title", "this is an important item");
}

console.log(allItems[0].getAttribute('title'));

const allImages = document.getElementsByTagName("img");
for (var i = 0; i < allImages.length; i++) {
    if ( allImages[i].className != "important" ) {
        allImages[i].style.display = "none" ;
    }
}


const allPars = document.querySelectorAll('p');
for ( i = 0; i < allPars.length; i++ ) {
    if (allPars[i].className == "") {
    console.log(allPars[i].innerText);
} else {
    var className = allPars[i].innerText.concat( " classname: ", allPars[i].className );
    console.log(className);
    }
}