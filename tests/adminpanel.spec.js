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
        const adminPanelEnvantoKivicareLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await EnvantoKivicareVerify(page, adminPanelEnvantoKivicareLocator);
    });

    test("Admin Panel Verify", async ({ page }) => {
        const adminPanelVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/a[1]");
        await AdminPanelVerify(page, adminPanelVerifyLocator);
    });

    test("Trustpilot Verify", async ({ page }) => {
        const adminPanelTrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/a[1]");
        await TrustpilotVerify(page, adminPanelTrustpilotVerifyLocator);
    });

    test("Envanto Verify", async ({ page }) => {
        const adminPanelEnvantoVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[3]/div[1]/a[1]");
        await EnvantoVerify(page, adminPanelEnvantoVerifyLocator);
    });

    test("Book a quick call", async ({ page }) => {
        const adminPanelBookCallLocator = page.locator("//a[contains(text(),'Book a quick call.')]");
        await BookcallVerify(page, adminPanelBookCallLocator);
    });

    test("Book a quick call 2", async ({ page }) => {
        const adminPanelBookCallLocator2 = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await adminPanelBookCallLocator2.scrollIntoViewIfNeeded();
        await BookcallVerify(page, adminPanelBookCallLocator2);
    });

    test("View Demo", async ({ page }) => {
        const adminPanelViewDemoLocator = page.locator("//a[contains(@href,'https://apps.iqonic.design/kivicare-laravel/app/bed-allocation')]");
        await adminPanelViewDemoLocator.scrollIntoViewIfNeeded();
        await PatientWebsiteLoginVerify(page, adminPanelViewDemoLocator);
    });

    test("View Demo 2", async ({ page }) => {
        const adminPanelViewDemoLocator2 = page.locator("//div[contains(@class,'elementor-element elementor-element-07e4802 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='View Demo']");
        await adminPanelViewDemoLocator2.scrollIntoViewIfNeeded();
        await PatientWebsiteLoginVerify(page, adminPanelViewDemoLocator2);
    });

    test("View Demo 3", async ({ page }) => {
        const adminPanelViewDemoLocator3 = page.locator("//a[contains(@href,'https://apps.iqonic.design/kivicare-laravel/app/billing-record')]");
        await adminPanelViewDemoLocator3.scrollIntoViewIfNeeded();
        await PatientWebsiteLoginVerify(page, adminPanelViewDemoLocator3);
    });

    test("View Demo 4", async ({ page }) => {
        const adminPanelViewDemoLocator4 = page.locator("//a[contains(@href,'https://apps.iqonic.design/kivicare-laravel/app/customers')]");
        await adminPanelViewDemoLocator4.scrollIntoViewIfNeeded();
        await PatientWebsiteLoginVerify(page, adminPanelViewDemoLocator4);
    });

    test("View Demo 5", async ({ page }) => {
        const adminPanelViewDemoLocator5 = page.locator("//a[contains(@href,'https://apps.iqonic.design/kivicare-laravel/app/encounter')]//*[name()='svg']");
        await adminPanelViewDemoLocator5.scrollIntoViewIfNeeded();
        await PatientWebsiteLoginVerify(page, adminPanelViewDemoLocator5);
    });

    test("for doctors", async ({ page }) => {
        const adminPanelDoctorsLinkLocator = page.locator("//a[normalize-space()='for doctors']");
        await adminPanelDoctorsLinkLocator.scrollIntoViewIfNeeded();
        const expectedLink = "https://laravel.kivicare.io/laravel-clinic-management-system-for-medical-professionals/";
        await CommonLinkVerify(page, adminPanelDoctorsLinkLocator, expectedLink);
    });

    test("View Demo 6", async ({ page }) => {
        const adminPanelViewDemoLocator6 = page.locator("//a[contains(@href,'https://apps.iqonic.design/kivicare-laravel/app/earnings')]");
        await adminPanelViewDemoLocator6.scrollIntoViewIfNeeded();
        await PatientWebsiteLoginVerify(page, adminPanelViewDemoLocator6);
    });

    test("View Demo 7", async ({ page }) => {
        const adminPanelViewDemoLocator7 = page.locator("//a[contains(@href,'https://apps.iqonic.design/kivicare-laravel/app/backups')]");
        await adminPanelViewDemoLocator7.scrollIntoViewIfNeeded();
        await PatientWebsiteLoginVerify(page, adminPanelViewDemoLocator7);
    });
});