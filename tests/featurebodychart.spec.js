import { test } from '@playwright/test';
import { BookcallVerify, EnvantoKivicareVerify, EnvantoVerify, PatientWebsiteVerify, TrustpilotVerify } from './common';
const home_url = process.env.HOME_URL;

test("Feature Body Chart Envanto Kivicare Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-18236']//a[@class='ct-menu-link'][normalize-space()='Features']").hover()
    await page.locator("//li[@id='menu-item-18238']//a[@class='ct-menu-link'][normalize-space()='Body Chart']").click()
    const EnvantoKivicareVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-61844c6 elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoKivicareVerify(page, EnvantoKivicareVerifyLocator);
})

test("Feature Body Chart View Demo", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-18236']//a[@class='ct-menu-link'][normalize-space()='Features']").hover()
    await page.locator("//li[@id='menu-item-18238']//a[@class='ct-menu-link'][normalize-space()='Body Chart']").click()
    const patientwebsiteLocator = page.locator("//a[normalize-space()='View Demo']");
    await PatientWebsiteVerify(page, patientwebsiteLocator);
})

test("Feature Body Chart Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-18236']//a[@class='ct-menu-link'][normalize-space()='Features']").hover()
    await page.locator("//li[@id='menu-item-18238']//a[@class='ct-menu-link'][normalize-space()='Body Chart']").click()
    const TrustpilotVerifyLocator = page.locator("//img[contains(@class,'attachment-full size-full wp-image-445')]");
    await TrustpilotVerify(page, TrustpilotVerifyLocator);
})

test("Feature Body Chart Envanto Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-18236']//a[@class='ct-menu-link'][normalize-space()='Features']").hover()
    await page.locator("//li[@id='menu-item-18238']//a[@class='ct-menu-link'][normalize-space()='Body Chart']").click()
    const EnvantoVerifyLocator = page.locator("//img[@class='attachment-large size-large wp-image-447']");
    await EnvantoVerify(page, EnvantoVerifyLocator);
})

test("Feature Body Chart Book a quick call", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-18236']//a[@class='ct-menu-link'][normalize-space()='Features']").hover()
    await page.locator("//li[@id='menu-item-18238']//a[@class='ct-menu-link'][normalize-space()='Body Chart']").click()
    const EnvantoVerifyLocator = page.locator("//a[normalize-space()='Book a quick call.']");
    await BookcallVerify(page, EnvantoVerifyLocator);
})