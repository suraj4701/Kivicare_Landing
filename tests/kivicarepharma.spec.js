import { test } from '@playwright/test';
import { AdminPanelVerify, BookcallVerify, EmployeeAppPlaystore, EnvantoKivicarePharmaVerify, EnvantoVerify, TrustpilotVerify } from './common';
const home_url = process.env.HOME_URL;

test.describe("KivicarePharma", () => {
    test.describe("Pharma App", () => {
        test.beforeEach(async ({ page }) => {
            await page.goto(home_url);
            await page.locator("//li[@id='menu-item-830']").hover();
            await page.locator("//li[@id='menu-item-18992']").hover();
            await page.locator("//li[@id='menu-item-18993']//a[contains(@class,'ct-menu-link')][normalize-space()='Pharma App']").click();
        });

        test("Buy Now", async ({ page }) => {
            const TrustpilotVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-3e7da91 elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
            await EnvantoKivicarePharmaVerify(page, TrustpilotVerifyLocator);
        });

        test("Employee App Playstore", async ({ page }) => {
            const adminpanelLocator = page.locator("//a[normalize-space()='View Demo']");
            await EmployeeAppPlaystore(page, adminpanelLocator);
        });

        test("Trustpilot Verify", async ({ page }) => {
            const TrustpilotVerifyLocator = page.locator("//img[@class='attachment-full size-full wp-image-445']");
            await TrustpilotVerify(page, TrustpilotVerifyLocator);
        });

        test("Envanto Verify", async ({ page }) => {
            const EnvantoVerifyLocator = page.locator("//img[@class='attachment-large size-large wp-image-447']");
            await EnvantoVerify(page, EnvantoVerifyLocator);
        });

        test("Book a quick call", async ({ page }) => {
            const EnvantoVerifyLocator = page.locator("//a[normalize-space()='Book a quick call.']");
            await BookcallVerify(page, EnvantoVerifyLocator);
        });

        test("Buy Now 2", async ({ page }) => {
            const TrustpilotVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-ad58a82 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
            await TrustpilotVerifyLocator.scrollIntoViewIfNeeded();
            await EnvantoKivicarePharmaVerify(page, TrustpilotVerifyLocator);
        });

        test("Buy Now 3", async ({ page }) => {
            const TrustpilotVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-0c39d94 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
            await TrustpilotVerifyLocator.scrollIntoViewIfNeeded();
            await EnvantoKivicarePharmaVerify(page, TrustpilotVerifyLocator);
        });

        test("Buy Now 4", async ({ page }) => {
            const TrustpilotVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-19e977e elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
            await TrustpilotVerifyLocator.scrollIntoViewIfNeeded();
            await EnvantoKivicarePharmaVerify(page, TrustpilotVerifyLocator);
        });
    });

    test.describe("Admin", () => {
        test.beforeEach(async ({ page }) => {
            await page.goto(home_url);
            await page.locator("//li[@id='menu-item-830']").hover();
            await page.locator("//li[@id='menu-item-18992']").hover();
            await page.locator("//li[@id='menu-item-18994']//a[contains(@class,'ct-menu-link')][normalize-space()='Admin']").click();
        });

        test("Buy Now", async ({ page }) => {
            const TrustpilotVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-42831f2 elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
            await EnvantoKivicarePharmaVerify(page, TrustpilotVerifyLocator);
        });

        test("View Demo", async ({ page }) => {
            const adminpanelLocator = page.locator("//a[normalize-space()='View Demo']");
            await AdminPanelVerify(page, adminpanelLocator);
        });

        test("Trustpilot Verify", async ({ page }) => {
            const TrustpilotVerifyLocator = page.locator("//img[contains(@class,'attachment-full size-full wp-image-445')]");
            await TrustpilotVerify(page, TrustpilotVerifyLocator);
        });

        test("Envanto Verify", async ({ page }) => {
            const EnvantoVerifyLocator = page.locator("//img[@class='attachment-large size-large wp-image-447']");
            await EnvantoVerify(page, EnvantoVerifyLocator);
        });

        test("Book a quick call", async ({ page }) => {
            const EnvantoVerifyLocator = page.locator("//a[normalize-space()='Book a quick call.']");
            await BookcallVerify(page, EnvantoVerifyLocator);
        });
    });
});