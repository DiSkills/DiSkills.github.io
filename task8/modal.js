const url = "https://formcarry.com/s/Yi1J5zYCqTN";


function addHistory() {
    window.history.pushState({modalOpen: true}, "", "#modal");
}


function backHistory() {
    window.history.back();
}


function toggleModal() {
    let modalInstance = bootstrap.Modal.getInstance(
        document.getElementById("exampleModal")
    );

    if (window.location.hash.match(/^#modal$/)) {
        modalInstance.show();
    } else {
        modalInstance.hide();
    }
}


function sendForm(event) {
    event.preventDefault();
    if (!document.querySelector("form").reportValidity()) {
        return;
    }

    let request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Accept", "application/json");

    let data = {};
    let fields = document.querySelectorAll(".form-control:not(.form-label)");
    fields.forEach(function (i) {
        data[i.name] = i.value;
    });

    request.send(JSON.stringify(data));
    request.onreadystatechange = function () {
        if (this.readyState === 4) {
            let response = document.querySelector(".response");
            if (this.status === 200) {
                response.innerHTML = "Successful";
                fields.forEach(function (i) {
                    i.value = "";
                });
                window.localStorage.clear();
            } else {
                response.innerHTML = "Something was wrong...";
            }
            backHistory();
        }
    };
}


function saveItem(event) {
    window.localStorage.setItem(event.target.name, event.target.value);
}


window.addEventListener("DOMContentLoaded", function () {
    new bootstrap.Modal(document.getElementById("exampleModal"));
    toggleModal();

    document.getElementById("buttonModal")
        .addEventListener("click", addHistory);
    document.getElementById("buttonClose")
        .addEventListener("click", backHistory);

    window.addEventListener("popstate", toggleModal);
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && window.location.hash.match(/^#modal$/)) {
            backHistory();
        }
    });

    document.querySelector("form").addEventListener("change", saveItem);

    Object.keys(window.localStorage).forEach(function (name) {
        document.querySelector(`[name=${name}]`).value = window
            .localStorage.getItem(name);
    });

    document.querySelector("form").addEventListener("submit", sendForm);
});
