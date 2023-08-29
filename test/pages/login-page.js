import { $ } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page {
    get usernameInput() { 
        return $('[data-qa="login-email"]'); 
    }
    get passwordInput() { 
        return $('[data-qa="login-password"]'); 
    }
    get loginButton() { 
        return $('[data-qa="login-button"]'); 
    }

    async login(username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    open () {
        return super.open('login');
    }
}

export default new LoginPage();
