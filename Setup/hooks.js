const {Before,BeforeAll,After,AfterAll,AfterStep} = require ('@cucumber/cucumber');
const playwright = require('playwright');
require('dotenv').config();

BeforeAll(async()=>{
    console.log("Browser Launched Successfully");
    //global.browser=await playwright.edge.launch({headless:false});
    global.browser = await playwright.chromium.launch({
        headless: false
       //,executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe' // Replace with your actual path to Edge
    });
    
})

Before(async()=>{

    console.log("Context and Page opened successfully");
    global.context=await global.browser.newContext({recordVideo: { dir: './videos/' },});
    //incognito : false,                                   
    global.page= await global.context.newPage();

})

After(async()=>{
    console.log("Context and Page closed Successfully");
    await global.page.close();
    await global.context.close();
})

AfterAll(async()=>{
    console.log("Browser closed Successfully");
    await global.browser.close();
})

AfterStep(async function(step){

    if (page)
    {
        var today = new Date();
        var date = today.getFullYear()+'_'+(today.getMonth()+1)+'_'+today.getDate()+'_'+today.getHours()+'_'+today.getMinutes()+'_'+today.getSeconds();
        await this.attach(await page.screenshot({path:'./screenshots/'+step.pickle.name+'_'+date+'.png'}),"image/png");
    }
})