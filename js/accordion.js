// accordion js

const items = document.querySelectorAll(".accordion-heading")
const bodyPadding = 20


const handleClick = (e) => {

    const heading = e.currentTarget
    const body = heading.nextElementSibling

    if(heading.classList.contains("open")){

        heading.classList.add("close")
        heading.classList.remove("open")
        body.style.height = "0px"
        body.style.padding = "0px"

    }else{
        
        heading.classList.add("open")
        heading.classList.remove("close")
        body.style.height = body.scrollHeight + 2*bodyPadding + "px"
        body.style.padding = `${bodyPadding}px 0px`


    }
    


}

items.forEach(item => {
    item.addEventListener("click", handleClick)
})


