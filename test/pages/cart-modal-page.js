import Page from './page.js'

class CartModalPage extends Page {

    get linkAddToCart() {
        return $('p.text-center:nth-child(2) > a:nth-child(1)');
    }

    async clickAddToCartLink(){
        await this.linkAddToCart.waitForClickable();
        await this.linkAddToCart.click();
    }
};

export default new CartModalPage ();