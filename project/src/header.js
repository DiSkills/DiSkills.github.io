const navbarBreakpoint = 992;

function navbarShow(id) {
    if (window.innerWidth >= navbarBreakpoint) {
        let aElement = document.querySelector(`#${id} a.dropdown-toggle`);
        aElement.classList.add("show");
        aElement.ariaExpanded = true;
        document.querySelector(`#${id} ul.dropdown-menu`).classList.add("show");
    }
}

function navbarHide(id) {
    if (window.innerWidth >= navbarBreakpoint) {
        let aElement = document.querySelector(`#${id} a.dropdown-toggle`);
        aElement.classList.remove("show");
        aElement.ariaExpanded = false;
        document.querySelector(`#${id} ul.dropdown-menu`).classList.remove("show");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let menuIds = [ "devops", "promotion", "about" ];
    menuIds.forEach(function(id) {
        let menu = document.getElementById(id);
        menu.addEventListener("mouseover", function () { navbarShow(id); });
        menu.addEventListener("mouseout", function () { navbarHide(id); });
    });
})
