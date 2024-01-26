// in js html links

let links = document.querySelectorAll(".links")
let navMenu = document.querySelector(".hamburger-icon")
let list = document.querySelector(".list")
let navActive = document.querySelector(".nav-active")

// navbar functions

links.forEach((link) => {
    link.addEventListener("click", () => {

        links.forEach((link) => {
            link.classList.remove("active");
        });

        link.classList.add("active")
    })
})



// nav scroll

document.addEventListener("DOMContentLoaded", function () {
    let header = document.querySelector('.header');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 2) {
            header.classList.add('scroll');
        } else {
            header.classList.remove('scroll');
        }
    });
});



// education courses

let coursesCards = document.querySelector(".courses-cards")
let coursesCardsContainer = document.querySelector(".courses-container")

const coursesObj = [
    {
        img: "/images/ios.webp",
        courseName: "iOS Development",

    },
    {
        img: "/images/react.webp",
        courseName: "React",

    },
    {
        img: "/images/python.webp",
        courseName: "Intro to Python",

    },
    {
        img: "/images/Advanced-Python.webp",
        courseName: "Advanced Python",

    },
    {
        img: "/images/Cybersecurity.webp",
        courseName: "Advanced Cybersecurity Course",

    },
    {
        img: "/images/ToT.webp",
        courseName: "ToT - Training of Trainers",

    },
    {
        img: "/images/Blockchain.webp",
        courseName: "Blockchain",

    },
    {
        img: "/images/DevOps.webp",
        courseName: "DevOps",

    },
    {
        img: "/images/Information.webp",
        courseName: "Information Security Governance",
    },
]



coursesObj.forEach((inf, index) => {
    const cardHTML = `
    
    <div class="courses-cards">
                    <img src="${inf.img}" alt="">

                    <div class="card-container">

                        <div class="card-content-main-text-div">
                            <span class="card-content-main-text"> 
                                ${inf.courseName}
                            </span>
    
                            <span class="card-content-text">
                                რეგისტრაცია დასრულებულია
                            </span>
                        </div>

                        <div class="card-content-link">
                            <svg class="arrow" preserveAspectRatio="xMidYMid meet" data-bbox="1.833 2.667 13.334 10.666" xmlns="http://www.w3.org/2000/svg" viewBox="1.833 2.667 13.334 10.666" height="16" width="17" data-type="color" role="presentation" aria-hidden="true"><defs><style>#comp-lnoncoa62__00000000-0000-0000-0000-000000000003 svg [data-color="1"] {fill: #00AEEF;}</style></defs>
                                <g>
                                    <path fill="#00aeef" d="m10.3 2.867 4.667 4.666a.645.645 0 0 1 0 .934L10.3 13.133a.644.644 0 0 1-.933 0 .644.644 0 0 1 0-.933L12.9 8.667H2.5c-.4 0-.667-.267-.667-.667s.267-.667.667-.667h10.4L9.367 3.8a.605.605 0 0 1-.2-.467c0-.2.066-.333.2-.466a.644.644 0 0 1 .933 0Z" data-color="1"></path>
                                </g>
                            </svg>

                            <span class="courser-inf">კურსის დეტალები</span>
                        </div>
                </div>
    
    `
    coursesCardsContainer.innerHTML += cardHTML;

})

// navbar

const mobileNavList = document.querySelector(".nav-mobile")


navMenu.addEventListener("click", () => {
    console.log("Clicked!");
    // list.classList.add("hamburger-active")
    if(mobileNavList.classList.contains("nav-mobile-active")){
        mobileNavList.classList.remove("nav-mobile-active")
        document.body.style.overflow = "auto"
    }else{
        mobileNavList.classList.add("nav-mobile-active")
        document.body.style.overflow = "hidden"

    }

});
