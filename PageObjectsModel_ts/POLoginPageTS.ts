import {test, expect, Locator, Page}  from '@playwright/test';
export class POLoginPage 
{
    page: Page;
    signInbutton:Locator
    userName:Locator
    password:Locator
    
    constructor(page:Page) 
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

    async validLogin(username:string, userpassword:string) 
 
    {
        await this.userName.fill(username);
        await this.password.fill(userpassword);
        await this.signInbutton.click();
        await this.page.waitForLoadState('networkidle');
    }

}
module.exports = {POLoginPage};