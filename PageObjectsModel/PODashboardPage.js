//const {test, expect} = require('@playwright/test');
class DashboardPage_JS
{
    constructor(page)
    {
       this.page = page;
       this.productTitle = page.locator(".card-body"); // product body
       this.productTitleName = page.locator(".card-body b"); // product text name
       //this.cart = page.locator("[routerlink='/dashboard/cart']");
       this.cart = page.locator("[routerlink*='cart']")
    }

    async searchProductAddCart(productName1)
    {
        const productTitleName = await this.productTitleName.allTextContents();
        console.log(productTitleName);
    // To iterate the title name one by one we need to count the value in  array format by using the .count function and count value we store in one variable as array
        const count = await this.productTitle.count();
        for (let i = 0; i < count; i++) 
            {
        // it start the index with O to validate the product title, to naviagte to child tag we used chaining locator and to extract the title name we use. textcontext();
        // by using the if condition we are comparing the product title is matching or not if matching we add in cart
                if (await this.productTitle.nth(i).locator("b").textContent() === productName1) 
                {
                    await this.productTitle.nth(i).locator("text= Add To Cart").click();
                    break;
                }
            }
    }


    async navigateToCart()
    {
        await this.cart.click();
    }
}
module.exports = {DashboardPage_JS}