function resetEnlarged(tariffs) {
    tariffs.forEach(function(item) {
        item.classList.remove("enlarged");
    });
}

function enlargeCenter(tariffs) {
    if (window.innerWidth >= 768) {
        resetEnlarged(tariffs);
        tariffs[Math.floor(tariffs.length / 2)].classList.add("enlarged");
    }
}

function handleHover(tariffs, item, isEntering) {
    if (window.innerWidth >= 768 && isEntering) {
        resetEnlarged(tariffs);
        item.classList.add("enlarged");
    }
}

function handleResize(tariffs) {
    if (window.innerWidth >= 768) {
        enlargeCenter(tariffs);
    } else {
        resetEnlarged(tariffs);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const tariffs = document.querySelectorAll(".tariff");

    tariffs.forEach(function(item) {
        item.addEventListener("mouseenter", function() {
            handleHover(tariffs, this, true);
        });

        item.addEventListener("mouseleave", function() {
            handleHover(tariffs, this, false);
        });
    });

    document.querySelector(".tariff__block").addEventListener("mouseleave",
        function() {
            if (window.innerWidth >= 768) {
                enlargeCenter(tariffs);
            }
        }
    );

    handleResize(tariffs);
    window.addEventListener("resize", function() {
        handleResize(tariffs);
    });
});
