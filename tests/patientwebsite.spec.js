import { test } from '@playwright/test';
import { BookcallVerify, EnvantoKivicareVerify, EnvantoVerify, PatientWebsiteVerify, TrustpilotVerify } from './common';
const home_url = process.env.HOME_URL;

test.describe("PatientWebsite", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(home_url);
        await page.locator("//li[@id='menu-item-830']").hover();
        await page.locator("//li[@id='menu-item-16860']").click();
    });

    test("Envanto Kivicare Verify", async ({ page }) => {
        const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]");
        await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
        await EnvantoKivicareVerify(page, EnvantoKivicareVerifyLocator);
    });

    test("Patinet Website Verify", async ({ page }) => {
        const patientwebsiteLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]");
        await PatientWebsiteVerify(page, patientwebsiteLocator);
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
        const patientwebsiteLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await patientwebsiteLocator.scrollIntoViewIfNeeded();
        await PatientWebsiteVerify(page, patientwebsiteLocator);
    });

    test("View Demo 2", async ({ page }) => {
        const patientwebsiteLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await patientwebsiteLocator.scrollIntoViewIfNeeded();
        await PatientWebsiteVerify(page, patientwebsiteLocator);
    });

    test("View Demo 3", async ({ page }) => {
        const patientwebsiteLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[5]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await patientwebsiteLocator.scrollIntoViewIfNeeded();
        await PatientWebsiteVerify(page, patientwebsiteLocator);
    });

    test("View Demo 4", async ({ page }) => {
        const patientwebsiteLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await patientwebsiteLocator.scrollIntoViewIfNeeded();
        await PatientWebsiteVerify(page, patientwebsiteLocator);
    });

    test("View Demo 5", async ({ page }) => {
        const patientwebsiteLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-132c3bf elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='View Demo']");
        await patientwebsiteLocator.scrollIntoViewIfNeeded();
        await PatientWebsiteVerify(page, patientwebsiteLocator);
    });

    test("View Demo 6", async ({ page }) => {
        const patientwebsiteLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-bd0f9e0 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='View Demo']");
        await patientwebsiteLocator.scrollIntoViewIfNeeded();
        await PatientWebsiteVerify(page, patientwebsiteLocator);
    });

    test("View Demo 7", async ({ page }) => {
        const patientwebsiteLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-10fb387 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='View Demo']");
        await patientwebsiteLocator.scrollIntoViewIfNeeded();
        await PatientWebsiteVerify(page, patientwebsiteLocator);
    });

    test("View Demo 8", async ({ page }) => {
        const patientwebsiteLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-6a71b63 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='View Demo']");
        await patientwebsiteLocator.scrollIntoViewIfNeeded();
        await PatientWebsiteVerify(page, patientwebsiteLocator);
    });
});