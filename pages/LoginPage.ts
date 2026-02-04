import { Page } from "@playwright/test";
export class LoginPage {
    page: Page;
    userNameInput: string = "//input[@placeholder='Username']";
    passwordInput: string = "//input[@placeholder='Password']";
    loginButton: string = "//button[@type='submit']";
    textInvalidLogin: string= "//p[text()='Invalid credentials']"

    constructor(page: Page) {
        this.page = page;
    }
    async navigateToLoginPage() {
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
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
    async getInvalidLoginText(): Promise<string> {
        //await this.page.waitForSelector(this.textInvalidLogin);
        await this.page.locator(this.textInvalidLogin).isVisible(); 
        return await this.page.locator(this.textInvalidLogin).innerText();
    }

    async loginSuccess(username: string, password: string) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }


}