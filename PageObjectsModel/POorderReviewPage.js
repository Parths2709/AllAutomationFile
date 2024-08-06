const {test,expect } = require("@playwright/test");

class POordersReviewPage_JS
{
constructor(page)
{
    this.page = page;
    this.emailId = page.locator(".user__name [type='text']").first(); // done
    this.country = page.locator("[placeholder*='Country']"); // done
    this.dropDownWindow = page.locator(".ta-results"); // done
    this.submit =  page.locator(".action__submit"); // done
    this.orderConfirmationText = page.locator("[class='hero-primary']");
    this.orderId = page.locator(".em-spacer-1 .ng-star-inserted");

}
async searchCountryAndSelect(countryCode,countryName)
{

    await this.country.type(countryCode,{delay:100});
    await this.dropDownWindow.waitFor();
    const optionsCount = await this.dropDownWindow.locator("button").count();
    for (let i = 0; i < optionsCount; i++) 
    {
        // this locator will iterate the dropdown option (Value) which are populate by searching "ind", get value of text and store in varaible
        const text = await this.dropDownWindow.locator("button").nth(i).textContent();
        // to check with the search option value in drop down we use if condition and it match we click on value
        if (text === countryName) 
            {
                await this.dropDownWindow.locator("button").nth(i).click();
                console.log("Country " + text)
                break;
            }

    }

}

async VerifyEmailId(username)
{
    await expect(this.emailId).toHaveText(username);
}

async SubmitAndGetOrderId()
    {
        await this.submit.click();
        await expect(this.orderConfirmationText).toHaveText(" Thankyou for the order. ");
        return await this.orderId.textContent();
    }
}
module.exports = {POordersReviewPage_JS}
   