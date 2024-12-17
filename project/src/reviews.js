function updateSlideCounter(currentIndex, totalSlides) {
    let current = (currentIndex + 1).toString().padStart(2, "0");
    let total = totalSlides.toString().padStart(2, "0");

    $(".slide-num").html(
        `<span class="slide-num-digit">${current[0]}</span>
        <span class="slide-num-digit">${current[1]}</span> /
        <span class="slide-num-digit">${total[0]}</span>
        <span class="slide-num-digit">${total[1]}</span>`
    );
}

document.addEventListener("DOMContentLoaded", function () {
    let slider = $(".reviews__slider");

    slider.slick({
        adaptiveHeight: true,
        arrows: false,
        dots: false,
        fade: true,
        infinite: true,
        lazyLoad: "ondemand",
        slidesToScroll: 1,
        slidesToShow: 1,
        speed: 300
    });

    let totalSlides = slider.slick("getSlick").slideCount;
    updateSlideCounter(0, totalSlides);

    slider.on("afterChange", function (event, slick, currentSlide) {
        updateSlideCounter(currentSlide, totalSlides);
    });

    $(".slick-prev").click(() => slider.slick("slickPrev"));
    $(".slick-next").click(() => slider.slick("slickNext"));
});
