import Page from '../pages/page.js';

class ProductPage extends Page {

    get btnAddToCart(){
        return $('button.btn.btn-default.cart')
    }

    async clickAddToCart(){
        await this.btnAddToCart.waitForClickable()
        await this.btnAddToCart.click()
    }

}

export default new ProductPage();