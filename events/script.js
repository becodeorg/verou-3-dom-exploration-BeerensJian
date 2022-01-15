const _initTime = Date.now();

function getElapsedTime(){
    return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's';
}

function clickOnSquare(e){
    console.log(e.target.classList[1]);
    console.log(getElapsedTime());
    const newDiv = document.createElement("div");
    newDiv.className = "displayedsquare";
    const wrapper = document.querySelector(".displayedsquare-wrapper");;
    const list = document.querySelector("ul");
    const newLi = document.createElement("li");
    switch (e.target.classList[1]) {
        case "green":
            newDiv.classList.add("green");
            newLi.innerText = "[" + getElapsedTime() + "]" + " Created a new green square";
            break
        case "violet":
            newDiv.classList.add("violet");
            newLi.innerText = "[" + getElapsedTime() + "]" + " Created a new violet square";
            break
        case "orange":
            newDiv.classList.add("orange");
            newLi.innerText = "[" + getElapsedTime() + "]" +  " Created a new orange square";
}
wrapper.appendChild(newDiv);
list.appendChild(newLi);

}

const actionsquares = document.querySelectorAll('.actionsquare');
for(let actionsquare of actionsquares){
actionsquare.addEventListener('click', clickOnSquare);
}

document.body.addEventListener("keypress", function(e){
    if (e.code === "Space") {
        document.body.style.background = randomgradient( );
        const newLi = document.createElement("li");
        const list = document.querySelector("ul");
        newLi.innerText = "[" + getElapsedTime() + "]" + " Background color changed"
        list.appendChild(newLi)
    }
})

function randomRGB() {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function randomgradient() {
    return "linear-gradient( to bottom right," + randomRGB() + ", " + randomRGB() + ' ) fixed';
}