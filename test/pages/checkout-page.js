import Page from "./page.js";

class CheckoutPage extends Page {

    get btnPlaceOrder(){
        return $('.btn.btn-default.check_out');
    };

    async clickPlaceOrderBtn (){
        await this.btnPlaceOrder.waitForClickable();
        await this.btnPlaceOrder.click();
    };
};

export default new CheckoutPage();