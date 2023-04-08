import './style.css';
import dropDown from './dropDownMenu';
import mobileViewportStyler from './checkViewport';

const headerWrapper = document.querySelector('.headerWrapper');
const aboutUsLink = document.querySelector('.about');
const saleLink = document.querySelector('.sale');
const saleDropDown = document.querySelector('.saleDropDown');
const aboutUsDropDown = document.querySelector('.aboutUsDropDown');

mobileViewportStyler(headerWrapper);

dropDown(aboutUsLink, aboutUsDropDown);
dropDown(saleLink, saleDropDown);
