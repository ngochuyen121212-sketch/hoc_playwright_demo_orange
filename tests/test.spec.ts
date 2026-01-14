import {test} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test ('Login Test', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await test.step('Navigate to Login Page', async () => {
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    });

    await test.step('Enter Username and Password', async () => {
        await loginPage.enterUsername("Admin");
        await loginPage.enterPassword("admin123");
    });

    await test.step('Click on Login Button', async () => {
        await loginPage.clickLogin();
    }); 


});