const {Given,When,Then,defineStep,setDefaultTimeout}=require('@cucumber/cucumber')

setDefaultTimeout(10*10000);

Given('Launch the url',async()=>{

    await page.goto('https://www.saucedemo.com/')

    await page.waitForTimeout(5000)
})

When('enter the credentials',async()=>{

    await page.locator('#user-name').type("standard_user");
    await page.locator('#password').type("secret_sauce");

    await page.locator('#login-button').click();
    await page.waitForTimeout(5000)
})

Then('add the details into the cart',async()=>{

    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await page.waitForTimeout(5000)

await page.locator('[data-test="shopping-cart-badge"]').click();
await page.waitForTimeout(5000)
await page.locator('#checkout').click();
await page.waitForTimeout(5000)
})