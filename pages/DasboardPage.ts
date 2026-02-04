import { expect, Page } from "@playwright/test";
export class DashboardPage {
    page: Page;
    textDashboard: string = "//h6[text()='Dashboard']";

    constructor(page: Page) {
        this.page = page;
    }
    async getDashboardText(): Promise<string> {
        await this.page.locator(this.textDashboard).isVisible();
        return await this.page.locator(this.textDashboard).innerText();
    }
}