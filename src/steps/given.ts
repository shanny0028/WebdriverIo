import { Given, Then } from '@cucumber/cucumber';

import * as utils from '../support/pageutils'

Given(
    /^I open the "([^"]*)?"$/,async(page:string)=>{
    await utils.open(page);
    }
    
);

Then(
    /^I expect that element "([^"]*)?" is not displayed$/,async (page:string)=>{
    await utils.click(page);
    }
    
);

Then(
    /^I pause for "([^"]*)?"$/,async (page:number)=>{
    await utils.wait(page);
    }
    
);