import { expect, test } from '@playwright/test';
import { BookcallVerify, CommonLinkVerify, EnvantoVerify, TrustpilotVerify } from './common';
const home_url = process.env.HOME_URL;

test.describe("ForMedicalProfessional", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(home_url);
        await page.locator("//li[@id='menu-item-1282']").hover();
        await page.locator("//li[@id='menu-item-1283']").click();
    });

    test("Trustpilot Verify", async ({ page }) => {
        const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
        await TrustpilotVerify(page, TrustpilotVerifyLocator);
    });

    test("Envanto Verify", async ({ page }) => {
        const EnvantoVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/a[1]");
        await EnvantoVerify(page, EnvantoVerifyLocator);
    });

    test("Book a quick call", async ({ page }) => {
        const EnvantoVerifyLocator = page.locator("//a[contains(text(),'Book a quick call.')]");
        await BookcallVerify(page, EnvantoVerifyLocator);
    });

    test("laravel clinic management solution", async ({ page }) => {
        const LinkLocator = page.locator("//a[contains(text(),'laravel clinic management solution')]");
        await LinkLocator.scrollIntoViewIfNeeded();

        const [newPage] = await Promise.all([
            page.context().waitForEvent('page'),
            LinkLocator.click()
        ]);
        const newPageUrl = newPage.url();
        expect(newPageUrl).toBe(home_url);
    });

    test("support team", async ({ page }) => {
        const LinkLocator = page.locator("//a[contains(text(),'support team')]");
        await LinkLocator.scrollIntoViewIfNeeded();
        const expectedLink = "https://iqonic.desky.support/";
        await CommonLinkVerify(page, LinkLocator, expectedLink);
    });

    test("custom development", async ({ page }) => {
        const LinkLocator = page.locator("//a[contains(text(),'custom development')]");
        await LinkLocator.scrollIntoViewIfNeeded();
        const expectedLink = "https://iqonic.tech/";
        await CommonLinkVerify(page, LinkLocator, expectedLink);
    });
});