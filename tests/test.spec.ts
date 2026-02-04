import {test} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DasboardPage';

test ('Login Test Success', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await test.step('Navigate to Login Page', async () => {
        await loginPage.navigateToLoginPage();
    });

    await test.step('Enter Username and Password', async () => {
        await loginPage.enterUsername("Admin");
        await loginPage.enterPassword("admin123");
    });

    await test.step('Click on Login Button', async () => {
        await loginPage.clickLogin();
    }); 
    await test.step('Verify Dashboard Text', async () => {
        const dashboardText = await dashboardPage.getDashboardText();
        console.log("Dashboard Text:", dashboardText);  
        await test.expect(dashboardText).toBe("Dashboard");
    });
    

});
test('Login failed with Invalid Username', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await test.step('Navigate to Login Page', async () => {
        await loginPage.navigateToLoginPage();
    });

    await test.step('Enter Invalid Username and Password', async () => {
        await loginPage.enterUsername("Admin1");
        await loginPage.enterPassword("admin123");
    });
    
    await test.step('Click on Login Button', async () => {
        await loginPage.clickLogin();
    });
    await test.step('Verify Error Message', async () => {
        const errorMessage = await loginPage.getInvalidLoginText();
        console.log("Error Message:", errorMessage); 
        await test.expect(errorMessage).toBe('Invalid credentials');
    });

});