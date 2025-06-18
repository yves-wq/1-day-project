var num1 = document.getElementById("num1")
var num2 = document.getElementById("num2")
var calc = document.getElementById("calculate")
var result = document.getElementById("result")
var dropdown = document.getElementById("dropdown1")
 

calc.onclick = function() {
    var value1 = parseInt(num1.value);
    var value2 = parseInt(num2.value);
 

    if (dropdown.value === "additon") {
        var sum = value1 + value2;
        result.innerHTML = "Result: " + sum;
    } else if (dropdown.value === "subtraction") {
        var difference = value1 - value2;
        result.innerHTML = "Result: " + difference;
    } else if (dropdown.value === "multiplication") {
        var product = value1 * value2;
        result.innerHTML = "Result: " + product;
    } else if (dropdown.value === "division") {
        if (value2 === 0) {
            result.innerHTML = "Cannot divide by zero.";
        } else {
            var quotient = value1 / value2;
            result.innerHTML = "Result: " + quotient;
        }
    } else {
        result.innerHTML = "Please select a valid operation.";
    }
};

function checkPalindrome() {
    var input = document.getElementById("textInput").value;
    var cleaned = input.toLowerCase().replace(/[^a-z0-9]/g, '');
    var reversed = cleaned.split('').reverse().join('');
    
    var result = cleaned === reversed 
      ? `"${input}" is a palindrome` 
      : `"${input}" is not a palindrome`;
    
    document.getElementById("presult").textContent = result;
  }