const _initTime = Date.now()

function getElapsedTime(){
    return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

function clickOnSquare(e){
    console.log(e.target.classList[1]);
    console.log(getElapsedTime());
    const newDiv = document.createElement("div");
    newDiv.className = "displayedsquare";
    const wrapper = document.querySelector(".displayedsquare-wrapper");
    switch (e.target.classList[1]) {
        case "green":
            newDiv.classList.add("green")
            break
        case "violet":
            newDiv.classList.add("violet")
            break
        case "orange":
            newDiv.classList.add("orange")
}
wrapper.appendChild(newDiv);

}

const actionsquares = document.querySelectorAll('.actionsquare')
for(let actionsquare of actionsquares){
actionsquare.addEventListener('click', clickOnSquare)
}