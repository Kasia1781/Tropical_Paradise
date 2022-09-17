const nav = document.querySelector('.nav'); //przeszukujemy cały dokument żeby znaleźć nav
const navBTN = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav__item');
const navBtnBars = document.querySelector('.burger-btn__bars');
const allSections = document.querySelectorAll('.section');
const footerYear = document.querySelector('.footer__year');

const handleNav = () => {
    nav.classList.toggle('nav--active')

    navBtnBars.classList.remove('black-bars-color')

    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav--active')

        })
    })
    
    handleNavItemsAnimation();
}

const handleNavItemsAnimation = () => {
    let delayTime = 0;
    
    allNavItems.forEach(item => {
        item.classList.toggle('nav-items-animation')
        //animation-delay: .3s;
        item.style.animationDelay = '.' + delayTime + 's';
        delayTime++;
    })
}

const handleObserver = () => {
    const currentSection = window.scrollY;

    allSections.forEach(section => {
        if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
            navBtnBars.classList.add('black-bars-color')
        } else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
            navBtnBars.classList.remove('black-bars-color')
        }
    })
}

const handleCurrenYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

handleCurrenYear();
navBTN.addEventListener('click', handleNav);
window.addEventListener('scroll', handleObserver)