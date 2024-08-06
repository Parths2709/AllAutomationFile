import {test, expect, Locator, Page}  from '@playwright/test';
export class PODashboardPage 
{

       product:Locator
       productsText:Locator
       cart:Locator

    constructor(page:Page)
    {
       this.product = page.locator(".card-body");
       this.productsText = page.locator(".card-body b");
       this.cart = page.locator("[routerlink='/dashboard/cart']");
    }

    async searchProductAddCart(productName1:string)
    {
        const titles = await this.productsText.allTextContents();
        console.log(titles);
    // To iterate the title name one by one we need to count the value in  array format by using the .count function and count value we store in one variable as array
        const count = await this.product.count();
        for (let i = 0; i < count; i++) 
            {
        // it start the index with O to validate the product title, to naviagte to child tag we used chaining locator and to extract the title name we use. textcontext();
        // by using the if condition we are comparing the product title is matching or not if matching we add in cart
                if (await this.product.nth(i).locator("b").textContent() === productName1) 
                {
                    await this.product.nth(i).locator("text= Add To Cart").click();
                    break;
                }
            }
    }


    async navigateToCart()
    {
        await this.cart.click();
    }
}
module.exports = {PODashboardPage};