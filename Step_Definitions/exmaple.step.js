const { Given, When, Then, defineStep, setDefaultTimeout, After } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const loginPage=require('../Page_Objects/loginpage.js');

setDefaultTimeout(1500* 100000);
const logMessages = [];

const lp=new loginPage();

Given('Visit the home page', async () => {

    await lp.navigatetoURL();
    //await page.goto('https://www.saucedemo.com/');
    await page.waitForSelector(".login_logo");
    
})

When(/^I enter Valid (.*) and (.*)$/, async (user,pwd) => {
    
    await lp.enterCredentials(user,pwd);
    await lp.submitBtn();
    logMessages.push("Entered User Name is <b><i><font color=red>" + user +" </font></i></b>");
    logMessages.push("Entered User Name is <b><i><font color=green>" + pwd +" </font></i></b>");
})

Then('Launch The application', async () => {
   await page.waitForTimeout(10000);
   var isvisible = await page.$("[data-test='error']");
   if(isvisible)
   {
    var error = await page.locator("[data-test='error']").innerText();
    console.log("error is ",error);
   }
   else{    
    const title = await page.title();
    console.log("Page title:", title);
    await expect(title).toBe('Swag Labs');
   }
})

When('select the item and add to the Cart',async()=>{
    await page.waitForTimeout(6000)
    //verify the title
    // var title=await page.locator('//div[@class="primary_header"]//div[@class="app_logo"]').innerText();
    // expect(title).toContain('Swag Labs');

    await page.locator('[id="item_4_title_link"]').click();

    // //verify new screen message
    // var msg=await page.locator('//button[@id="back-to-products"]').innerText();
    // expect(msg).toContain('Back to products');

    //verify the amount
    var value=await page.locator('[data-test="inventory-item-price"]').innerText();
    if(value <=30)
    {
        await page.locator('[id="add-to-cart"]').click()

        await page.waitForTimeout(3000);

        expect(await page.locator('[data-test="remove"]').innerText()).toContain('Remove')
    }
    else
    {
        await page.locator('//button[@id="back-to-products"]//img').click();
    }
})

After(async function (scenario) {

    for (const msg of logMessages) {
        this.attach(msg, "text/plain");
    }
})