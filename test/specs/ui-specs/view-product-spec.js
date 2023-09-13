import homePage from "../../pages/home-page.js";
import loginPage from "../../pages/login-page.js";
import productPage from "../../pages/product-page.js";

describe('View Product', ()=>{
    it('should click on product link and navigate to selected product page', async()=>{
        await loginPage.open();
        await loginPage.login('nickel.back@yahoo.com', 'test123');
        await homePage.clickProductLinkWithWorkaround(4);
        await productPage.clickAddToCart();
    })
})

