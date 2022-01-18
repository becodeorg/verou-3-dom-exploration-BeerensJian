//Add a keyup listener on the first input field, so that once you type a letter in this field, it goes into the <span id="display-firstname">. The content of the field and the span should always remain the same.

const firstName = document.querySelector("#firstname");

const displayName = () => {
    const inputvalue = firstName.value;
    const nameWrapper = document.querySelector("#display-firstname")
    nameWrapper.innerHTML = inputvalue + " is cool";
}

firstName.addEventListener("keyup", displayName);

