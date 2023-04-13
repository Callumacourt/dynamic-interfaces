import './style.css';
import dropDown from './dropDownMenu';
import styleMobileViewport from './checkViewport';
import initCarousel from './imageCarousel';
import initImagNav from './initImageNav';

const headerWrapper = document.querySelector('.headerWrapper');
const aboutUsLink = document.querySelector('.about');
const saleLink = document.querySelector('.sale');
const saleDropDown = document.querySelector('.saleDropDown');
const aboutUsDropDown = document.querySelector('.aboutUsDropDown');

window.addEventListener('resize', styleMobileViewport(headerWrapper));
initCarousel();

dropDown(aboutUsLink, aboutUsDropDown);
dropDown(saleLink, saleDropDown);
