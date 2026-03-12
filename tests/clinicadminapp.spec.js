import { test } from '@playwright/test';
import { BookcallVerify, CommonLinkVerify, EmployeeAppAppstore, EmployeeAppPlaystore, EnvantoKivicareVerify, EnvantoVerify, TrustpilotVerify } from './common';
const home_url = process.env.HOME_URL;

test.describe("ClinicAdminApp", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(home_url);
        await page.locator("//li[@id='menu-item-830']").hover();
        await page.locator("//li[@id='menu-item-1286']").click();
    });

    test("Envanto Kivicare Verify", async ({ page }) => {
        const clinicAdminEnvantoKivicareLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await EnvantoKivicareVerify(page, clinicAdminEnvantoKivicareLocator);
    });

    test("Employee App Playstore", async ({ page }) => {
        const clinicAdminPlaystoreLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/a[1]");
        await EmployeeAppPlaystore(page, clinicAdminPlaystoreLocator);
    });

    test("Trustpilot Verify", async ({ page }) => {
        const clinicAdminTrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/a[1]");
        await TrustpilotVerify(page, clinicAdminTrustpilotVerifyLocator);
    });

    test("Envanto Verify", async ({ page }) => {
        const clinicAdminEnvantoVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[3]/div[1]/a[1]");
        await EnvantoVerify(page, clinicAdminEnvantoVerifyLocator);
    });

    test("Book a quick call", async ({ page }) => {
        const clinicAdminBookCallLocator = page.locator("//a[contains(text(),'Book a quick call.')]");
        await BookcallVerify(page, clinicAdminBookCallLocator);
    });

    test("Book a quick call 2", async ({ page }) => {
        const clinicAdminBookCallLocator2 = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[5]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await clinicAdminBookCallLocator2.scrollIntoViewIfNeeded();
        await BookcallVerify(page, clinicAdminBookCallLocator2);
    });

    test("View Demo", async ({ page }) => {
        const clinicAdminViewDemoLocator = page.locator("//a[contains(@href,'https://apps.iqonic.design/kivicare-laravel/app/bed-allocation')]");
        await clinicAdminViewDemoLocator.scrollIntoViewIfNeeded();
        const expectedLink = "https://apps.iqonic.design/kivicare-laravel/login";
        await CommonLinkVerify(page, clinicAdminViewDemoLocator, expectedLink);
    });

    test("View Demo 2", async ({ page }) => {
        const clinicAdminViewDemoLocator2 = page.locator("//div[contains(@class,'elementor-element elementor-element-22c899a elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='View Demo']");
        await clinicAdminViewDemoLocator2.scrollIntoViewIfNeeded();
        await EmployeeAppPlaystore(page, clinicAdminViewDemoLocator2);
    });

    test("Handle all clinic management needs", async ({ page }) => {
        const clinicAdminHandleNeedsLocator = page.locator("//a[normalize-space()='Handle all clinic management needs']");
        await clinicAdminHandleNeedsLocator.scrollIntoViewIfNeeded();
        await EmployeeAppAppstore(page, clinicAdminHandleNeedsLocator);
    });

    test("View Demo 3", async ({ page }) => {
        const clinicAdminViewDemoLocator3 = page.locator("//div[@class='elementor-element elementor-element-336a468 elementor-align-center elementor-widget elementor-widget-elementskit-button']//div[@class='ekit-btn-wraper']");
        await clinicAdminViewDemoLocator3.scrollIntoViewIfNeeded();
        await EmployeeAppPlaystore(page, clinicAdminViewDemoLocator3);
    });

    test("View Demo 4", async ({ page }) => {
        const clinicAdminViewDemoLocator4 = page.locator("//div[contains(@class,'elementor-element elementor-element-66206cc elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='View Demo']");
        await clinicAdminViewDemoLocator4.scrollIntoViewIfNeeded();
        await EmployeeAppPlaystore(page, clinicAdminViewDemoLocator4);
    });

    test("View Demo 5", async ({ page }) => {
        const clinicAdminViewDemoLocator5 = page.locator("//div[contains(@class,'elementor-element elementor-element-19738bf elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='View Demo']");
        await clinicAdminViewDemoLocator5.scrollIntoViewIfNeeded();
        await EmployeeAppPlaystore(page, clinicAdminViewDemoLocator5);
    });
});