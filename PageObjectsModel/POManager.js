 // Import the classes
const {LoginPage_JS} = require('./POLoginPage')
const {DashboardPage_JS} =  require('./PODashboardPage');
const {CartPage_JS} = require('./POCartPage');
const {POordersHistoryPage_JS} = require('./POorderHistoryPage');
const {POordersReviewPage_JS} = require('./POorderReviewPage');

class POManager 
{
     constructor(page)
     {
        this.page = page;
        this.loginPage = new LoginPage_JS(this.page); 
        this.dashboardPage = new DashboardPage_JS(this.page);
        this.cartPage = new CartPage_JS(this.page);
        this.ordersHistoryPage = new POordersHistoryPage_JS(this.page)
        this.ordersReviewPage = new POordersReviewPage_JS(this.page);
     }

// Create the custom method
getLoginPage()
{
    return this.loginPage;
}

getCartPage()
{
    return this.cartPage;
}

getDashboardPage()
{
    return this.dashboardPage;
}
getOrdersHistoryPage()
{
    return this.ordersHistoryPage;
}

getOrdersReviewPage()
{
    return this.ordersReviewPage;
}
}
module.exports = {POManager};