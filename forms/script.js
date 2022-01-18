//Add a keyup listener on the first input field, so that once you type a letter in this field, it goes into the <span id="display-firstname">. The content of the field and the span should always remain the same.

const firstName = document.querySelector("#firstname");

const displayName = () => {
    const inputvalue = firstName.value;
    const nameWrapper = document.querySelector("#display-firstname")
    nameWrapper.innerHTML = inputvalue;
}
firstName.addEventListener("keyup", displayName);

//Add a keyup listener to the second inputfield
// if not 18 dont show section if over 18 show section

const ageInput = document.querySelector("#age");

const oldEnough = () => {
    if (ageInput.value >= 18) {
        const truth = document.querySelector("#a-hard-truth")
        truth.style.visibility = "visible"
    } else {
        const truth = document.querySelector("#a-hard-truth")
        truth.style.visibility = "hidden"
    }
}
ageInput.addEventListener("keyup", oldEnough);

// password verifier
// Add a keyup listener to both
// Add a visualhint if passwords are not the same or smaller than 6 letters

const passfield1 = document.querySelector("#pwd")
const passfield2 = document.querySelector("#pwd-confirm")

const passCheck = (e) => {

    if (passfield1.value.length < 6 || passfield1.value !== passfield2.value) {
        passfield1.style.backgroundColor = "red";
        passfield2.style.backgroundColor = "red";
    }
    else {
        passfield1.style.backgroundColor = "white";
        passfield2.style.backgroundColor = "white";
    }
}

passfield1.addEventListener("keyup", passCheck)
passfield2.addEventListener("keyup", passCheck)

// Add a change listener to the dropdown menu
// background black and text white

const toggle = document.querySelector("#toggle-darkmode");

toggle.addEventListener("change",  (e) => {
if (e.target.value === "dark") {
    document.body.style.background = "#252323"
    document.body.style.color = "white"
} else {
    document.body.style.background = "white"
    document.body.style.color = "black"
}
})