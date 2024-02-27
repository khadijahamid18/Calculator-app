let result = document.getElementById("result")

function appendInput(value) {
    result.value += value;
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = "Error";
    }
}

function clearResult() {
    result.value = "";
}

function deleteLastEntry() {
    result.value = result.value.slice(0, -1);
}

document.addEventListener("keydown", function (event) {
    const key = event.key;
    const allowedKeys = [
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "+", "-", "*", "/",
        "Backspace", "Delete", "Enter", "=", "Escape"
    ];

    if (allowedKeys.includes(key)) {
        event.preventDefault();

        if (key === "Enter" || key === "=") {
            calculate();
        }
        else if (key === "Backspace" || key === "Delete") {
            deleteLastEntry();
        }
        else if (key === "Escape") {
            clearResult();
        }
        else {
            appendInput(key);
        }
    }
});













// let string = "";
// let buttons = document.querySelectorAll('.button');
// Array.from(buttons).forEach((button) => {
//     button.addEventListener('click', (e) => {

//         var key = e.key;
//         var keyCode = e.keyCode;

//         if (e.target.innerHTML == '=') {
//             string = eval(string);
//             document.querySelector('input').value = string;
//         }
//         else if (keyCode >= 48 && keyCode <= 57) {
//             // Numbers 0-9
//             document.querySelector('input').value = string;
//         }
//         else if (keyCode === 43 || keyCode === 45 || keyCode === 42 || keyCode === 47) {
//             // +, -, *, /
//             document.querySelector('input').value = string;
//         }
//         else if (keyCode === 13) {
//             // Enter key
//             string = eval(string);
//             document.querySelector('input').value = string;
//         }
//         else if (keyCode === 46) {
//             // Delete
//             string = "";
//             document.querySelector('input').value = string;
//         }
//         else if (keyCode === 8) {
//             // Backspace
//             string = string.substring(0, string.length - 1)
//             document.querySelector('input').value = string;
//         }
//         else if (e.target.innerHTML == 'C') {
//             string = "";
//             document.querySelector('input').value = string;
//         }
//         else if (e.target.innerHTML == 'DEL') {
//             string = string.substring(0, string.length - 1)
//             document.querySelector('input').value = string;
//         }
//         else {
//             console.log(e.target);
//             string = string + e.target.innerHTML;
//             document.querySelector('input').value = string;
//         }
//     })
// })
