const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    if (slidesContainer.scrollLeft === 1800) {
        slidesContainer.scrollLeft = 0;
    } else {
        slidesContainer.scrollLeft += slideWidth;
    }
});


prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    if (slidesContainer.scrollLeft === 0) {
        slidesContainer.scrollLeft = 1800;
    } else {
        slidesContainer.scrollLeft -= slideWidth;
    }
});
