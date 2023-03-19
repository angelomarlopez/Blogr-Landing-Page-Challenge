const hamburgerToggle = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
let sideNavOpen = false;

const productDropDown = document.querySelector('#product-dropdown');
const companyDropDown = document.querySelector('#company-dropdown');
const connectDropDown = document.querySelector('#connect-dropdown');

const productToggle = document.querySelector('#product-toggle');
const companyToggle = document.querySelector('#company-toggle');
const connectToggle = document.querySelector('#connect-toggle');

hamburgerToggle.addEventListener('click', () => {
    nav.classList.toggle('close');
    sideNavOpen = !sideNavOpen;
    hamburgerToggle.src = sideNavOpen ? 'images/icon-close.svg' : 'images/icon-hamburger.svg';
})

productToggle.addEventListener('click', () => {
    productDropDown.classList.toggle('close');
    companyDropDown.classList.toggle('close', true);
    connectDropDown.classList.toggle('close', true);
    
    document.querySelector('#product-toggle img').classList.toggle('rotate');
    document.querySelector('#connect-toggle img').classList.toggle('rotate', false);
    document.querySelector('#company-toggle img').classList.toggle('rotate', false);
});

companyToggle.addEventListener('click', () => {
    companyDropDown.classList.toggle('close');
    connectDropDown.classList.toggle('close', true);
    productDropDown.classList.toggle('close', true);
    
    document.querySelector('#company-toggle img').classList.toggle('rotate');
    document.querySelector('#product-toggle img').classList.toggle('rotate', false);
    document.querySelector('#connect-toggle img').classList.toggle('rotate', false);
});

connectToggle.addEventListener('click', () => {
    connectDropDown.classList.toggle('close');
    productDropDown.classList.toggle('close', true);
    companyDropDown.classList.toggle('close', true);

    document.querySelector('#connect-toggle img').classList.toggle('rotate');
    document.querySelector('#company-toggle img').classList.toggle('rotate', false);
    document.querySelector('#product-toggle img').classList.toggle('rotate', false);
});

let desktopImage = window.innerWidth > 1000;

window.onresize  = () => {
    if (window.innerWidth < 1000 && desktopImage) {
        document.querySelector('.right').src = 'images/illustration-editor-mobile.svg';
        document.querySelector('.left').src = 'images/illustration-laptop-mobile.svg';
        desktopImage = !desktopImage;
    } else if (window.innerWidth > 1000 && !desktopImage) {
        document.querySelector('.right').src = 'images/illustration-editor-desktop.svg';
        document.querySelector('.left').src = 'images/illustration-laptop-desktop.svg';
        desktopImage = !desktopImage;
    }
}