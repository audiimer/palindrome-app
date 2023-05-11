// Get the check button and input element from the HTML document
const button = document.getElementById("check-button");
const input = document.getElementById("word-input");

//Initial input values
input.value = "";
input.style.color = "black";

// A variable to keep track of whether the user has pressed enter or not
let hasPressedEnter = false;

// Add a click event listener to the check button
button.addEventListener("click", function () {
    // Get the value of the input element
    const inputValue = input.value;

    // Check if the input is empty, not a word, or has less than 2 characters
    if (inputValue === "" || !/^[a-zA-Z]+$/.test(inputValue) || inputValue.length<2) {
        // If the input is invalid, display an error message and set hasPressedEnter to true
        input.value = "Error: Input not a word";
        input.style.color = "red";
        hasPressedEnter = true;
        return;
    }

    // Reverse the input word and check if it is equal to the original word
    let newWord = "";
    for (let i = inputValue.length - 1; i >= 0; i--) {
        let char = inputValue[i];
        newWord += char;
    }
    if (newWord.toLowerCase() === inputValue.toLowerCase()) {
        // If the input is a palindrome, display a success message
        input.value = `${inputValue} is a Palindrome!`;
        input.style.color = "green";
    } else {
        // If the input is not a palindrome, display a failure message
        input.value = `${inputValue} is not a Palindrome`;
        input.style.color = "red";
    }

    // Set hasPressedEnter to true
    hasPressedEnter = true;
});

// Add a keyup event listener to the input element
input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        // If the user presses enter, trigger a click event on the check button
        button.click();
    } else if (hasPressedEnter) {
        // If the user has pressed enter and then types another key, clear the input and set hasPressedEnter to false
        input.value = "";
        input.style.color = "black";
        hasPressedEnter = false;
    }
});

// Add a click event listener to the input element
input.addEventListener("click", function () {
    if (hasPressedEnter) {
        // If the user has pressed enter and then clicks on the input element, clear the input and set hasPressedEnter to false
        input.value = "";
        input.style.color = "black";
        hasPressedEnter = false;
    }
});
