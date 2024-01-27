const groups = document.querySelectorAll(".carousel-group")
const arrowPrev = document.querySelector(".carousel-button-prev")
const arrowNext = document.querySelector(".carousel-button-next")
const dots = document.querySelectorAll(".carousel-pagination .dot")




let sliderIndex = 0
const CAROUSEL_AUTO_PLAY_TIME = 3000
let carouselTimeout = null

arrowPrev.addEventListener("click", () => {
    if (sliderIndex === 0) {
        sliderIndex = groups.length - 1
    } else {

        sliderIndex--
    }

    changeGroup()
})
arrowNext.addEventListener("click", () => {
    if (sliderIndex === groups.length - 1) {
        sliderIndex = 0
    } else {

        sliderIndex++
    }
    changeGroup()
})


function changeGroup() {
    if (carouselTimeout) {
        clearTimeout(carouselTimeout)
        console.log("ss")
    }
    document.querySelector(".carousel-group-active").classList.remove("carousel-group-active")
    groups[sliderIndex].classList.add("carousel-group-active")

    groups[sliderIndex].addEventListener("transitionend", fadeTransitionEnd)


}

function fadeTransitionEnd(e) {
    e.currentTarget.removeEventListener("transitionend", fadeTransitionEnd)
    autoPlayCarousel()
}





function autoPlayCarousel() {


    if (carouselTimeout) {
        clearTimeout(carouselTimeout);
        console.log("clear timeout");
    }
    carouselTimeout = setTimeout(() => {
        if (sliderIndex === groups.length - 1) {
            sliderIndex = 0
        } else {
            sliderIndex++
        }
        changeGroup()

        autoPlayCarousel()
    }, CAROUSEL_AUTO_PLAY_TIME)

}

autoPlayCarousel()




// Dots
dots.forEach((dot, index) => {
    dot.addEventListener("click", (elem) => {
        sliderIndex = index
        changeGroup()
    })
    
});