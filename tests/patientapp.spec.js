import { test } from '@playwright/test';
import { BookcallVerify, EnvantoKivicareVerify, EnvantoVerify, PatientAppPlaystore, TrustpilotVerify } from './common';
const home_url = process.env.HOME_URL;

test.describe("PatientApp", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(home_url);
        await page.locator("//li[@id='menu-item-830']").hover();
        await page.locator("//li[@id='menu-item-1287']").click();
    });

    test("Envanto Kivicare Verify", async ({ page }) => {
        const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await EnvantoKivicareVerify(page, EnvantoKivicareVerifyLocator);
    });

    test("Patient App Playstore", async ({ page }) => {
        const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/a[1]");
        await PatientAppPlaystore(page, adminpanelLocator);
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
        const EnvantoVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[5]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await EnvantoVerifyLocator.scrollIntoViewIfNeeded();
        await BookcallVerify(page, EnvantoVerifyLocator);
    });

    test("View Demo", async ({ page }) => {
        const patientappLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await patientappLocator.scrollIntoViewIfNeeded();
        await PatientAppPlaystore(page, patientappLocator);
    });

    test("View Demo 2", async ({ page }) => {
        const patientappLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await patientappLocator.scrollIntoViewIfNeeded();
        await PatientAppPlaystore(page, patientappLocator);
    });

    test("View Demo 3", async ({ page }) => {
        const patientappLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[7]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await patientappLocator.scrollIntoViewIfNeeded();
        await PatientAppPlaystore(page, patientappLocator);
    });

    test("View Demo 4", async ({ page }) => {
        const patientappLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[8]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await patientappLocator.scrollIntoViewIfNeeded();
        await PatientAppPlaystore(page, patientappLocator);
    });
});