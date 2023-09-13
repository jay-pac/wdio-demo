import LoginPage from '../pages/login.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('nickel.back@yahoo.com', 'test123')
        await browser.pause(5000);
    })
})

