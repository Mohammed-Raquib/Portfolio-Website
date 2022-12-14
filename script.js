const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

if(navToggle){
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    })
}

if(navClose){
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    })
}

const navLink = document.querySelectorAll(".nav__link");

function linkAction(){
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
}
navLink.forEach(n => n.addEventListener("click", linkAction));

// ************Services Modal****************
const modalViews= document.querySelectorAll(".services__modal");
      modalBtns= document.querySelectorAll(".services__button");
     modalCloses= document.querySelectorAll(".services__modal-close");

let modal = function(modalClick){
    modalViews[modalClick].classList.add("active-modal");
}

modalBtns.forEach((modalBtn, i) =>{
    modalBtn.addEventListener("click", () => {
        modal(i);
        console.log("add");
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener("click", () => {
        modalViews.forEach((modalView) => {
            console.log("close")
            modalView.classList.remove("active-modal");
        })
    })
})
      
// **************Portfolio Swiper***************
let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    mousewheel: true,
    keyboard: true,
});

// **********************Scroll section active link*****************
const sections = document.querySelectorAll("section[id]");

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav__menu a[href*= " + sectionId + "]").classList.add("active-link");    
        }else{
            document.querySelector(".nav__menu a[href*= " + sectionId + "]").classList.remove("active-link");
        }
    })
}

window.addEventListener("scroll", scrollActive);

// *************Change background header**************
function scrollHeader(){
    const nav = document.getElementById("header");
    
    if(this.scrollY >= 80){
        nav.classList.add("scroll-header");
    }else{
        nav.classList.remove("scroll-header");
    }
}
window.addEventListener("scroll" , scrollHeader);

// *****************Show scroll up****************
function scrollUp(){
    const scrollUp = document.getElementById("scroll-up");
    
    if(this.scrollY >= 560){
        scrollUp.classList.add("show-scroll");
    }else{
        scrollUp.classList.remove("show-scroll");
    }
}
window.addEventListener("scroll", scrollUp);

// **************Dark light Theme*******************
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

function sendMail(){
    var params = {
    name:  document.getElementById("name").value,   
    email:  document.getElementById("email").value,
    project:  document.getElementById("project").value,
    message:  document.getElementById("message").value
};

const serviceId = "service_0k4adxl";
const templateId = "template_6jjnvye";

    emailjs.send(serviceId, templateId, params)
    .then(
         res => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("project").value = "";
        document.getElementById("message").value = "";
        alert("Message sent successfully");
        }
    )
    .catch((error) => console.log(error));
}