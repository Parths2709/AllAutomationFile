// Import the classes
import {POLoginPage} from './POLoginPageTS';
import {PODashboardPage}  from './PODashboardPageTS';
import {POCartPage_TS} from './POCartPageTS';
import {Page} from '@playwright/test'

export class POManager 
{
    loginPage:POLoginPage
    dashboardPage: PODashboardPage
    cartPage: POCartPage_TS
    page: Page;

    constructor(page:Page)
     {
        this.page = page;
        this.loginPage = new POLoginPage(this.page); 
        this.dashboardPage = new PODashboardPage(this.page);
        this.cartPage = new POCartPage_TS(this.page);
     }

// Create the custom method
    getLoginPage() 
    {
        return this.loginPage;
    }  

    getDashboardPage()
    {
        return this.dashboardPage;
    }
    getCartPage()
    {
        return this.cartPage;
    }
}
module.exports = {POManager}