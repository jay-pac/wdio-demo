import loginPage from '../../pages/login-page.js';

describe('Automation Exercise Website', () => {
    it('should login with valid credentials', async () => {
        await loginPage.open()
        await loginPage.login('nickel.back@yahoo.com', 'test123'); 
    });
});
