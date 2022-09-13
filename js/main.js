const nav = document.querySelector('.nav'); //przeszukujemy cały dokument żeby znaleźć nav
const navBTN = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav__item');

const handleNav = () => {
    nav.classList.toggle('nav--active')

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


navBTN.addEventListener('click', handleNav)