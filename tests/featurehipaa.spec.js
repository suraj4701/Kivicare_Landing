import { test } from '@playwright/test';
import { BookcallVerify, EnvantoKivicareVerify, EnvantoVerify, PatientWebsiteVerify, TrustpilotVerify } from './common';
const home_url = process.env.HOME_URL;

test("Feature HIPAA Envanto Kivicare Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-18236']//a[@class='ct-menu-link'][normalize-space()='Features']").hover()
    await page.locator("//li[@id='menu-item-18240']//a[@class='ct-menu-link'][normalize-space()='HIPAA']").click()
    const EnvantoKivicareVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-61844c6 elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoKivicareVerify(page, EnvantoKivicareVerifyLocator);
})

test("Feature HIPAA View Demo", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-18236']//a[@class='ct-menu-link'][normalize-space()='Features']").hover()
    await page.locator("//li[@id='menu-item-18240']//a[@class='ct-menu-link'][normalize-space()='HIPAA']").click()
    const patientwebsiteLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-1fd9701 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='View Demo']");
    await PatientWebsiteVerify(page, patientwebsiteLocator);
})

test("Feature HIPAA Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-18236']//a[@class='ct-menu-link'][normalize-space()='Features']").hover()
    await page.locator("//li[@id='menu-item-18240']//a[@class='ct-menu-link'][normalize-space()='HIPAA']").click()
    const TrustpilotVerifyLocator = page.locator("//img[contains(@class,'attachment-full size-full wp-image-445')]");
    await TrustpilotVerify(page, TrustpilotVerifyLocator);
})

test("Feature HIPAA Envanto Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-18236']//a[@class='ct-menu-link'][normalize-space()='Features']").hover()
    await page.locator("//li[@id='menu-item-18240']//a[@class='ct-menu-link'][normalize-space()='HIPAA']").click()
    const EnvantoVerifyLocator = page.locator("//img[@class='attachment-large size-large wp-image-447']");
    await EnvantoVerify(page, EnvantoVerifyLocator);
})

test("Feature HIPAA Book a quick call", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-18236']//a[@class='ct-menu-link'][normalize-space()='Features']").hover()
    await page.locator("//li[@id='menu-item-18240']//a[@class='ct-menu-link'][normalize-space()='HIPAA']").click()
    const EnvantoVerifyLocator = page.locator("//a[normalize-space()='Book a quick call.']");
    await BookcallVerify(page, EnvantoVerifyLocator);
})

test("Feature HIPAA View Demo 2", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-18236']//a[@class='ct-menu-link'][normalize-space()='Features']").hover()
    await page.locator("//li[@id='menu-item-18240']//a[@class='ct-menu-link'][normalize-space()='HIPAA']").click()
    const patientwebsiteLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-168dc9d elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='View Demo']");
    await PatientWebsiteVerify(page, patientwebsiteLocator);
})

test("Feature HIPAA View Demo 3", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-18236']//a[@class='ct-menu-link'][normalize-space()='Features']").hover()
    await page.locator("//li[@id='menu-item-18240']//a[@class='ct-menu-link'][normalize-space()='HIPAA']").click()
    const patientwebsiteLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-20f4f9f elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='View Demo']");
    await PatientWebsiteVerify(page, patientwebsiteLocator);
})

test("Feature HIPAA View Demo 4", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-18236']//a[@class='ct-menu-link'][normalize-space()='Features']").hover()
    await page.locator("//li[@id='menu-item-18240']//a[@class='ct-menu-link'][normalize-space()='HIPAA']").click()
    const patientwebsiteLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-8715a62 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='View Demo']");
    await PatientWebsiteVerify(page, patientwebsiteLocator);
})

test("Feature HIPAA View Demo 5", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-18236']//a[@class='ct-menu-link'][normalize-space()='Features']").hover()
    await page.locator("//li[@id='menu-item-18240']//a[@class='ct-menu-link'][normalize-space()='HIPAA']").click()
    const patientwebsiteLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-174b817 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='View Demo']");
    await PatientWebsiteVerify(page, patientwebsiteLocator);
})

test("Feature HIPAA View Demo 6", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-18236']//a[@class='ct-menu-link'][normalize-space()='Features']").hover()
    await page.locator("//li[@id='menu-item-18240']//a[@class='ct-menu-link'][normalize-space()='HIPAA']").click()
    const patientwebsiteLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-4485dd9 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='View Demo']");
    await PatientWebsiteVerify(page, patientwebsiteLocator);
})