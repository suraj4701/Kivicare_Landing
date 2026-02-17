import { test } from '@playwright/test';
import { BookcallVerify, EmployeeAppPlaystore, EnvantoKivicarePharmaVerify, EnvantoVerify, TrustpilotVerify } from './common';
const home_url = process.env.HOME_URL;

test("KivicarePharma Buy Now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-830']").hover()
    await page.locator("//li[@id='menu-item-18992']").hover()
    await page.locator("//li[@id='menu-item-18993']//a[contains(@class,'ct-menu-link')][normalize-space()='Pharma App']").click()
    const TrustpilotVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-3e7da91 elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await EnvantoKivicarePharmaVerify(page, TrustpilotVerifyLocator);
})

test("KivicarePharma Employee App Playstore", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-830']").hover()
    await page.locator("//li[@id='menu-item-18992']").hover()
    await page.locator("//li[@id='menu-item-18993']//a[contains(@class,'ct-menu-link')][normalize-space()='Pharma App']").click()
    const adminpanelLocator = page.locator("//a[normalize-space()='View Demo']");
    await EmployeeAppPlaystore(page, adminpanelLocator);
})

test("KivicarePharma Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-830']").hover()
    await page.locator("//li[@id='menu-item-18992']").hover()
    await page.locator("//li[@id='menu-item-18993']//a[contains(@class,'ct-menu-link')][normalize-space()='Pharma App']").click()
    const TrustpilotVerifyLocator = page.locator("//img[@class='attachment-full size-full wp-image-445']");
    await TrustpilotVerify(page, TrustpilotVerifyLocator);
})

test("KivicarePharma Envanto Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-830']").hover()
    await page.locator("//li[@id='menu-item-18992']").hover()
    await page.locator("//li[@id='menu-item-18993']//a[contains(@class,'ct-menu-link')][normalize-space()='Pharma App']").click()
    const EnvantoVerifyLocator = page.locator("//img[@class='attachment-large size-large wp-image-447']");
    await EnvantoVerify(page, EnvantoVerifyLocator);
})

test("KivicarePharma Book a quick call", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-830']").hover()
    await page.locator("//li[@id='menu-item-18992']").hover()
    await page.locator("//li[@id='menu-item-18993']//a[contains(@class,'ct-menu-link')][normalize-space()='Pharma App']").click()
    const EnvantoVerifyLocator = page.locator("//a[normalize-space()='Book a quick call.']");
    await BookcallVerify(page, EnvantoVerifyLocator);
})

test("KivicarePharma Buy Now 2", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-830']").hover()
    await page.locator("//li[@id='menu-item-18992']").hover()
    await page.locator("//li[@id='menu-item-18993']//a[contains(@class,'ct-menu-link')][normalize-space()='Pharma App']").click()
    const TrustpilotVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-ad58a82 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await TrustpilotVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoKivicarePharmaVerify(page, TrustpilotVerifyLocator);
})

test("KivicarePharma Buy Now 3", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-830']").hover()
    await page.locator("//li[@id='menu-item-18992']").hover()
    await page.locator("//li[@id='menu-item-18993']//a[contains(@class,'ct-menu-link')][normalize-space()='Pharma App']").click()
    const TrustpilotVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-0c39d94 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await TrustpilotVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoKivicarePharmaVerify(page, TrustpilotVerifyLocator);
})

test("KivicarePharma Buy Now 4", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-830']").hover()
    await page.locator("//li[@id='menu-item-18992']").hover()
    await page.locator("//li[@id='menu-item-18993']//a[contains(@class,'ct-menu-link')][normalize-space()='Pharma App']").click()
    const TrustpilotVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-19e977e elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await TrustpilotVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoKivicarePharmaVerify(page, TrustpilotVerifyLocator);
})