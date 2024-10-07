function isNumber(str) {
    return str.match(/^[1-9]\d*$/) != null;
}


function calculate(event) {
    event.preventDefault();

    let priceElement = document.getElementById("product").value,
        countElement = document.getElementById("quantity").value;
    if (priceElement === "") {
        alert("Select the product!");
        return;
    }

    if (!isNumber(countElement)) {
        alert("Enter a natural number!");
        return;
    }

    let result = document.getElementById("result");
    result.innerHTML = parseInt(priceElement) * parseInt(countElement);
}


window.addEventListener('DOMContentLoaded', () => {
    document.getElementById("btn").addEventListener("click", calculate);
});
