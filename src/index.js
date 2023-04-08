import './style.css';
import dropDown from './dropDownMenu';

const aboutUsLink = document.querySelector('.about');
const saleLink = document.querySelector('.sale');
const saleDropDown = document.querySelector('.saleDropDown');
const aboutUsDropDown = document.querySelector('.aboutUsDropDown');

dropDown(aboutUsLink, aboutUsDropDown);
dropDown(saleLink, saleDropDown);
