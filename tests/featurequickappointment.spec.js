import { test } from '@playwright/test';
import { BookcallVerify, EnvantoKivicareVerify, EnvantoVerify, PatientWebsiteVerify, TrustpilotVerify } from './common';
const home_url = process.env.HOME_URL;

test("Feature Quick Appointment Booking Envanto Kivicare Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-18236']//a[@class='ct-menu-link'][normalize-space()='Features']").hover()
    await page.locator("//li[@id='menu-item-18237']//a[@class='ct-menu-link'][normalize-space()='Quick Appointment Booking']").click()
    const EnvantoKivicareVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-61844c6 elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoKivicareVerify(page, EnvantoKivicareVerifyLocator);
})

test("Feature Quick Appointment Booking View Demo", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-18236']//a[@class='ct-menu-link'][normalize-space()='Features']").hover()
    await page.locator("//li[@id='menu-item-18237']//a[@class='ct-menu-link'][normalize-space()='Quick Appointment Booking']").click()
    const patientwebsiteLocator = page.locator("//a[normalize-space()='View Demo']");
    await PatientWebsiteVerify(page, patientwebsiteLocator);
})

test("Feature Quick Appointment Booking Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-18236']//a[@class='ct-menu-link'][normalize-space()='Features']").hover()
    await page.locator("//li[@id='menu-item-18237']//a[@class='ct-menu-link'][normalize-space()='Quick Appointment Booking']").click()
    const TrustpilotVerifyLocator = page.locator("//img[contains(@class,'attachment-full size-full wp-image-445')]");
    await TrustpilotVerify(page, TrustpilotVerifyLocator);
})

test("Feature Quick Appointment Booking Envanto Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-18236']//a[@class='ct-menu-link'][normalize-space()='Features']").hover()
    await page.locator("//li[@id='menu-item-18237']//a[@class='ct-menu-link'][normalize-space()='Quick Appointment Booking']").click()
    const EnvantoVerifyLocator = page.locator("//img[@class='attachment-large size-large wp-image-447']");
    await EnvantoVerify(page, EnvantoVerifyLocator);
})

test("Feature Quick Appointment Booking Book a quick call", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-18236']//a[@class='ct-menu-link'][normalize-space()='Features']").hover()
    await page.locator("//li[@id='menu-item-18237']//a[@class='ct-menu-link'][normalize-space()='Quick Appointment Booking']").click()
    const EnvantoVerifyLocator = page.locator("//a[normalize-space()='Book a quick call.']");
    await BookcallVerify(page, EnvantoVerifyLocator);
})