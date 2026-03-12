import { test } from '@playwright/test';
import { AdminPanelVerify, BookcallVerify, CommonLinkVerify, EnvantoKivicareVerify, EnvantoVerify, PatientWebsiteLoginVerify, TrustpilotVerify } from './common';
const home_url = process.env.HOME_URL;

test.describe("AdminPanel", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(home_url);
        await page.locator("//li[@id='menu-item-830']").hover();
        await page.locator("//li[@id='menu-item-1285']").click();
    });

    test("Envanto Kivicare Verify", async ({ page }) => {
        const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await EnvantoKivicareVerify(page, EnvantoKivicareVerifyLocator);
    });

    test("Admin Panel Verify", async ({ page }) => {
        const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/a[1]");
        await AdminPanelVerify(page, adminpanelLocator);
    });

    test("Trustpilot Verify", async ({ page }) => {
        const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/a[1]");
        await TrustpilotVerify(page, TrustpilotVerifyLocator);
    });

    test("Envanto Verify", async ({ page }) => {
        const EnvantoVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[3]/div[1]/a[1]");
        await EnvantoVerify(page, EnvantoVerifyLocator);
    });

    test("Book a quick call", async ({ page }) => {
        const EnvantoVerifyLocator = page.locator("//a[contains(text(),'Book a quick call.')]");
        await BookcallVerify(page, EnvantoVerifyLocator);
    });

    test("Book a quick call 2", async ({ page }) => {
        const EnvantoVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await EnvantoVerifyLocator.scrollIntoViewIfNeeded();
        await BookcallVerify(page, EnvantoVerifyLocator);
    });

    test("View Demo", async ({ page }) => {
        const adminpanelLocator = page.locator("//a[contains(@href,'https://apps.iqonic.design/kivicare-laravel/app/bed-allocation')]");
        await adminpanelLocator.scrollIntoViewIfNeeded();
        await PatientWebsiteLoginVerify(page, adminpanelLocator);
    });

    test("View Demo 2", async ({ page }) => {
        const adminpanelLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-07e4802 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='View Demo']");
        await adminpanelLocator.scrollIntoViewIfNeeded();
        await PatientWebsiteLoginVerify(page, adminpanelLocator);
    });

    test("View Demo 3", async ({ page }) => {
        const adminpanelLocator = page.locator("//a[contains(@href,'https://apps.iqonic.design/kivicare-laravel/app/billing-record')]");
        await adminpanelLocator.scrollIntoViewIfNeeded();
        await PatientWebsiteLoginVerify(page, adminpanelLocator);
    });

    test("View Demo 4", async ({ page }) => {
        const adminpanelLocator = page.locator("//a[contains(@href,'https://apps.iqonic.design/kivicare-laravel/app/customers')]");
        await adminpanelLocator.scrollIntoViewIfNeeded();
        await PatientWebsiteLoginVerify(page, adminpanelLocator);
    });

    test("View Demo 5", async ({ page }) => {
        const adminpanelLocator = page.locator("//a[contains(@href,'https://apps.iqonic.design/kivicare-laravel/app/encounter')]//*[name()='svg']");
        await adminpanelLocator.scrollIntoViewIfNeeded();
        await PatientWebsiteLoginVerify(page, adminpanelLocator);
    });

    test("for doctors", async ({ page }) => {
        const LinkLocator = page.locator("//a[normalize-space()='for doctors']");
        await LinkLocator.scrollIntoViewIfNeeded();
        const expectedLink = "https://laravel.kivicare.io/laravel-clinic-management-system-for-medical-professionals/";
        await CommonLinkVerify(page, LinkLocator, expectedLink);
    });

    test("View Demo 6", async ({ page }) => {
        const adminpanelLocator = page.locator("//a[contains(@href,'https://apps.iqonic.design/kivicare-laravel/app/earnings')]");
        await adminpanelLocator.scrollIntoViewIfNeeded();
        await PatientWebsiteLoginVerify(page, adminpanelLocator);
    });

    test("View Demo 7", async ({ page }) => {
        const adminpanelLocator = page.locator("//a[contains(@href,'https://apps.iqonic.design/kivicare-laravel/app/backups')]");
        await adminpanelLocator.scrollIntoViewIfNeeded();
        await PatientWebsiteLoginVerify(page, adminpanelLocator);
    });
});