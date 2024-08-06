//const {test,expect } = require("@playwright/test");
class POordersHistoryPage_JS
{
 
    constructor(page)
    {
        this.page = page;
        this.myOrderClick = page.locator("li [routerlink*='myorders']");        
        this.orderTable = page.locator("tbody");
        this.row = page.locator("tbody tr");
        this.orderSummary = page.locator(".col-text");
       
 
    }
 
    async searchOrderAndSelect(OrderID)
    {
        await this.myOrderClick.click();
        await this.orderTable.waitFor();              
        for(let i=0;i <await this.row.count(); ++i)
        {
            //await this.rowOrderId.waitFor();
            //const rowOrderId = await this.row.nth(i).locator("th").textContent();
            const rowOrderId = await this.row.nth(i).locator("th").textContent(); 
            if(OrderID.includes(rowOrderId))
            {
                await this.row.nth(i).locator("button").first().click();
                break;
            }
        }        
    }
 
    async getOrderID()
    {
        // const OrderSummary = await this.orderSummary.textContent();
        // expect(OrderID.includes(OrderSummary)).toBeTruthy();
        // console.log(OrderSummary);
        return await this.orderSummary.textContent();
    }
}
module.exports = {POordersHistoryPage_JS}
