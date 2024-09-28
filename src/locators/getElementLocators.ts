import {  waitForDisplayed } from "webdriverio/build/commands/element"
import basicWebElements from "./basicLocators";
// import {  waitforTimeout } from "./wdio.conf"

const elementMap={
    ...basicWebElements,
};
// 
const getElement=(webelement): ChainablePromiseElement=>{
    const element= $(elementMap[webelement]);
    return element;

};

export{
    getElement
};