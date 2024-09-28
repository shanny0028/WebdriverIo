
import { getElement } from "../locators/getElementLocators";

const click=async (element2:string): Promise<void> =>{
    const element =await getElement(element2);
    console.log('elemt is =====',element);
    element.click();
}

const open=async (ulr:string): Promise<void> =>{
   await browser.url('https://www.google.com/');
    const element = await browser.getUrl();
    // browser.setTimeout();
    console.log('eurllemt is =====',element);
}

const wait=async (time:number): Promise<void>  =>{
    await browser.pause(time);
    // browser.setTimeout();
}

export{click,open,wait}