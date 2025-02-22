
const getExcelData = require('./helper/excelhelper.js'); 

// Call the function and store the returned credentials
const allCredentials = getExcelData(); 

// Use the credentials
for (let i = 0; i < allCredentials.length; i++) {
    console.log(`Row ${i + 1}: URL: ${allCredentials[i].url}, Username: ${allCredentials[i].username}, Password: ${allCredentials[i].password}`);
await page.url(allCredentials[i].url);

}
