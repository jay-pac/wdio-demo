import homePage from "../../pages/home-page.js";
import loginPage from "../../pages/login-page.js";
import productPage from "../../pages/product-page.js";
import cartModalPage from "../../pages/cart-modal-page.js";
import viewCartPage from "../../pages/view-cart-page.js";
import checkoutPage from "../../pages/checkout-page.js";

describe('View Product', ()=>{
    it('should click on product link and navigate to selected product page', async()=>{
        await loginPage.open();
        await loginPage.login('nickel.back@yahoo.com', 'test123');
        await homePage.clickProductLinkWithWorkaround(4);
        await productPage.clickAddToCart();
        await cartModalPage.clickAddToCartLink();
        await viewCartPage.clickProceedCheckout();
        await checkoutPage.clickPlaceOrderBtn();
        await browser.pause(5000)

    });
});

