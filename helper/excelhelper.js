const xlsx=require('xlsx')
const path = require('path');

function getExcelData()
{
    // Construct the absolute path of the Excel file using the `path` module
    const filePath = path.resolve(__dirname, './testbook.xlsx');  // Ensure testbook.xlsx is in the same directory as this script

    // Read the Excel file
    const workbook = xlsx.readFile(filePath);
    //const workbook=xlsx.readFile('../helper/testbook.xlsx')
    const sheetName=workbook.SheetNames[0];
    const worksheet=workbook.Sheets[sheetName];
    
    const data=xlsx.utils.sheet_to_json(worksheet)
    
   // Array to hold all credentials
   let credentials = [];

    for(let i=0;i<data.length;i++)
    {
        let url = data[i].url;
        let username = data[i].User_Name;
        let password = data[i].Password;

        // Push each row's credentials to the array
        credentials.push({ url, username, password });
    }
   return credentials;
}

module.exports = getExcelData;

