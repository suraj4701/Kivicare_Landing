import { test } from '@playwright/test';
import { BookcallVerify, CommonLinkVerify, EmployeeAppAppstore, EmployeeAppPlaystore, EnvantoVerify, PatientAppPlaystore, TrustpilotVerify } from './common';
const home_url = process.env.HOME_URL;

test.describe("ForDeveloper", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(home_url);
        await page.locator("//li[@id='menu-item-1282']").hover();
        await page.locator("//li[@id='menu-item-1284']").click();
    });

    test("Trustpilot Verify", async ({ page }) => {
        const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]");
        await TrustpilotVerify(page, TrustpilotVerifyLocator);
    });

    test("Envanto Verify", async ({ page }) => {
        const EnvantoVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]");
        await EnvantoVerify(page, EnvantoVerifyLocator);
    });

    test("Book a quick call", async ({ page }) => {
        const EnvantoVerifyLocator = page.locator("//a[contains(text(),'Book a quick call.')]");
        await BookcallVerify(page, EnvantoVerifyLocator);
    });

    test("clinic and patient management system", async ({ page }) => {
        const LinkLocator = page.locator("//a[contains(text(),'clinic and patient management system')]");
        await LinkLocator.scrollIntoViewIfNeeded();
        await CommonLinkVerify(page, LinkLocator, home_url);
    });

    test("Patient App Playstore", async ({ page }) => {
        const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/a[1]");
        await adminpanelLocator.scrollIntoViewIfNeeded();
        await PatientAppPlaystore(page, adminpanelLocator);
    });

    test("Employee App Playstore", async ({ page }) => {
        const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[2]/div[1]/div[2]/div[2]/div[1]/a[1]");
        await adminpanelLocator.scrollIntoViewIfNeeded();
        await EmployeeAppPlaystore(page, adminpanelLocator);
    });

    test("Employee App Appstore", async ({ page }) => {
        const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[2]/div[1]/div[2]/div[3]/div[1]/a[1]");
        await adminpanelLocator.scrollIntoViewIfNeeded();
        await EmployeeAppAppstore(page, adminpanelLocator);
    });

    test("custom development", async ({ page }) => {
        const LinkLocator = page.locator("//a[contains(text(),'custom development')]");
        await LinkLocator.scrollIntoViewIfNeeded();
        const expectedLink = "https://iqonic.tech/healthcare/";
        await CommonLinkVerify(page, LinkLocator, expectedLink);
    });

    test("tech support team", async ({ page }) => {
        const LinkLocator = page.locator("//a[contains(text(),'tech support team')]");
        await LinkLocator.scrollIntoViewIfNeeded();
        const expectedLink = "https://iqonic.desky.support/";
        await CommonLinkVerify(page, LinkLocator, expectedLink);
    });
});