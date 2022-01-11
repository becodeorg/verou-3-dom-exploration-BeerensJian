document.body.onload = addLearners();

var bgColor = "hsl(211, 94%, 40%)";
document.body.style.backgroundColor = bgColor;

var learners1 = ["Jian", "Feruz", "Sara", "Ahmad", "Jawid", "Michelle", "Jordy", "Benjamin", "Dante"];
var leaners2 = shuffle(learners1);
console.log(leaners2)

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
// function to generate a random HSL color
function randomHSL() {
    var h = Math.round(Math.random() * 360);
    var s = Math.round(Math.random() * 100);
    var l = Math.round(Math.random() * 100);
    return "hsl(" + h + ", " + s + "%, " + l + "%)";
    }


    // Function that turns the last part of a HSL color code into an Integer
   function getLuminence(color) {
    var x = color.slice(13);
    x = x.replace(/\D/g,'');
    return parseInt(x);
   }

   

function addLearners() {
    
    let learners = ["Jian", "Feruz", "Sara", "Ahmad", "Jawid", "Michelle", "Jordy", "Benjamin", "Dante"];
    learners = learners.sort(() => Math.random() - 0.5)
    for (i = 0; i < learners.length; i++) {
        const newContent = document.createTextNode("Meow im a cat, no I'm a dog actually. Correction I am " + learners[i]);
        const newPara = document.createElement("p");
        const newSection = document.createElement("section");

        newPara.appendChild(newContent); // Add text to the paragraph element
        newSection.appendChild(newPara); // Add the paragraph element to the section
        var randomColor = randomHSL();
        if (getLuminence(randomColor) <= 50) { // Check if the lumince value of the color is low or high incase its low give turn the text color to white.
            newSection.style.color = "White";
        }
        newSection.style.backgroundColor = randomColor; // Give the section element a random background color
        
        const currentArticle = document.querySelector("article"); // Select the article where the content is going to be added
        currentArticle.appendChild(newSection) //append the sections in the article element

        console.log(learners[i]);
    }

}