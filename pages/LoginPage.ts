import { Page } from "@playwright/test";
export class LoginPage {
    page: Page;
    userNameInput: string = "//input[@placeholder='Username']";
    passwordInput: string = "//input[@placeholder='Password']";
    loginButton: string = "//button[@type='submit']";

    constructor(page: Page) {
        this.page = page;
    }

    async enterUsername(username: string) {
        await this.page.locator(this.userNameInput).fill(username);
    }
    
    async enterPassword(password: string) {
        await this.page.locator(this.passwordInput).fill(password);
    }
    async clickLogin() {
        await this.page.locator(this.loginButton).click();
    }


}