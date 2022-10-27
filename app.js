//Adds numbers to text
function updateDisplay(input) {
    document.querySelector("#display").innerText += input;
    //Same as document.querySelector("#display").innerText + input
};
//Clears calculator
function removeDisplay() {
    document.querySelector("#display").innerText = "";
};

//calculate the results
function calculate() {
    const displayValue = document.querySelector("#display").innerText;
    const numbers = document.querySelector("#display").innerText;

    const result = eval(numbers);

    document.querySelector("#display").innerText += "=" + result;
};