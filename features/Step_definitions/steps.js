const {Given, When, Then} = require('@cucumber/cucumber');
const {expect} = require('@playwright/test');
const playwright = require('@playwright/test');
const {POManager} = require('../../PageObjectsModel/POManager');

 Given('a login to ecom application with {string} and {string}', {timeout:100*1000},async function(username, password) 
 {
    const browser = await playwright.chromium.launch({headless:false});
    const context = await browser.newContext();
    this.page = await context.newPage();
    this.poManager = new POManager(this.page);
    this.loginPage = this.poManager.getLoginPage(); 
    await this.loginPage.goTO();
    await this.loginPage.validLogin(username, password);
   //    const loginPage = this.poManager.getLoginPage(); 
   //  await loginPage.goTO();
   //  await loginPage.validLogin(username, password);


 });

//  When('Add {string} to cart', {timeout:100*1000}, async function(productName1) 
//  {
//     this.dashboardPage = this.poManager.getDashboardPage();
//     await this.dashboardPage.searchProductAddCart(productName1);
//     await this.dashboardPage.navigateToCart();
//  });



 When('Add {string} item to cart', {timeout : 100 * 1000},async function (productName1) {
    this.dashboardPage = this.poManager.getDashboardPage();
    await this.page.locator('div h5 b').first().waitFor('');
    await this.dashboardPage.searchProductAddCart(productName1);
    await this.dashboardPage.navigateToCart();
  });
 
//   Then('Verfiy {string} is displayed in the cart', {timeout:100*1000}, async function(productName1)
//  {
//     const cartPage = this.poManager.getCartPage();
//     this.cartPage.VerifyProductIsDisplayed(productName1);
//     await this.cartPage.Checkout();
//  });

 Then('verfit {string} is displayed in the cart', {timeout : 100 * 1000} ,async function (productName1) {
    //this.cartProducts = page.locator("div li").first();
    const cartPage = this.poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(productName1);
    await cartPage.Checkout();
  });

  When('Enter Valid detais and place order', {timeout : 100 * 1000}, async function () {
   // Write code here that turns the phrase above into concrete actions
    const ordersReviewPage = this.poManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind"," India");
    this.OrderID = await ordersReviewPage.SubmitAndGetOrderId();
    console.log(this.OrderID);
 });

 Then('Verfiy order is present in th OrderHistory Page', async function () {
  // Write code here that turns the phrase above into concrete actions
  //await dashboardPage.navigateToOrders();
   // const ordersHistoryPage = this.poManager.getOrdersHistoryPage();
   // await ordersHistoryPage.searchOrderAndSelect(this.orderId);
   // const OrderHistoryID = await ordersHistoryPage.getOrderId();
   // console.log(OrderHistoryID);
   // expect(this.orderId.includes(OrderHistoryID)).toBeTruthy();
   const orderHistoryPage = this.poManager.getOrdersHistoryPage();
    await orderHistoryPage.searchOrderAndSelect(this.OrderID);
    const orderHistoryID = await orderHistoryPage.getOrderID();
    console.log(orderHistoryID);
    expect(this.OrderID.includes(orderHistoryID)).toBeTruthy();
   

});

