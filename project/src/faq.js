document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach(function(item) {
        item.addEventListener("click", function() {
            accordionItems.forEach(function(otherItem) {
                if (otherItem !== item &&
                    otherItem.classList.contains("active"))
                {
                    otherItem.classList.remove("active");
                    otherItem.querySelector(".accordion-content").style.maxHeight = 0;
                }
            });

            item.classList.toggle("active");
            const content = item.querySelector(".accordion-content");
            if (item.classList.contains("active")) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = 0;
            }
        });
    });
});
