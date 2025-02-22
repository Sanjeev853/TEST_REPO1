module.exports=class loginpage
{
    constructor() {
        this.usernameField = "#user-name";
        this.passwordField = "#password";
        this.loginButton = "#login-button";
    }
     
    async navigatetoURL()
    {
        await page.goto(process.env.BASE_URL)
    }

    async enterCredentials(uname,pwd)
    {
        await page.locator(this.usernameField).type(uname);
        await page.locator(this.passwordField).type(pwd);
    }

    async submitBtn()
    {
        await page.locator(this.loginButton).click();
    }

    
}

 