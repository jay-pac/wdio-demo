import Page from "./page.js";

class ViewCartPage extends Page {
    
    get btnCheckout(){
        return $('#do_action > div.container > div > div > a')
    };

    btnDeleteProduct(index){
        return $(`[data-product-id=${index}]`)
    };

    async clickProceedCheckout(){
        await this.btnCheckout.waitForClickable();
        await this.btnCheckout.click();
    }

    async clickDeleteProductButton(index){
        await this.btnDeleteProduct.waitForClickable(index);
        await this.btnDeleteProduct.click(index);
    };
};

export default new ViewCartPage();