function isNumber(str) {
    return str.match(/^[1-9]\d*$/) !== null;
}


function calculate(event) {
    event.preventDefault();

    let result = document.getElementById("result");

    let priceElement = document.getElementById("product").value;
    let countElement = document.getElementById("quantity").value;

    let content;

    if (priceElement === "") {
        content = "Select the product!";
    } else if (!isNumber(countElement)) {
        content = "Enter a natural number!";
    } else {
        content = parseInt(priceElement) * parseInt(countElement);
    }

    result.innerHTML = content;
}


window.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn").addEventListener("click", calculate);
});
