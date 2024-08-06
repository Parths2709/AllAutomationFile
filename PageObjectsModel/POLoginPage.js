const {test, expect} = require('@playwright/test');
class LoginPage_JS 
{
    constructor(page) 
    {   
        this.page = page;
        this.signInbutton= page.locator("[value='Login']");
        this.userName = page.locator("#userEmail");
        this.password = page.locator("#userPassword");
    }

    async goTO()
    {
        await this.page.goto("https://rahulshettyacademy.com/client");
    }

    async validLogin(username, userpassword) 
 
    {
        await this.userName.fill(username);
        await this.password.fill(userpassword);
        await this.signInbutton.click();
        await this.page.waitForLoadState('networkidle');
    }

}
module.exports = {LoginPage_JS};