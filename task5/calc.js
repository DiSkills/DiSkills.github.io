function isNumber(str) {
    return str.match(/^[1-9]\d*$/) != null;
}


function calculate(event) {
    event.preventDefault();

    let price = parseInt(document.getElementById("product").value),
        count = document.getElementById("quantity").value;
    if (!isNumber(count)) {
        alert("Enter a natural number!");
        return;
    }

    let result = document.getElementById("result");
    result.innerHTML = price * count;
}


window.addEventListener('DOMContentLoaded', () => {
    document.getElementById("btn").addEventListener("click", calculate);
});
