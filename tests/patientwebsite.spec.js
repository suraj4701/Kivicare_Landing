const { test, expect } = require('@playwright/test');
const { TrustpilotVerify, EnvantoVerify, EnvantoKivicareVerify, PatientWebsiteVerify } = require('./common');
const home_url = process.env.HOME_URL;

test("PatientWebsite Envanto Kivicare Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-830']").hover()
    await page.locator("//li[@id='menu-item-16860']").click()
    const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]");
    await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoKivicareVerify(page, EnvantoKivicareVerifyLocator);
})

test("PatientWebsite Patinet Website Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-830']").hover()
    await page.locator("//li[@id='menu-item-16860']").click()
    const patientwebsiteLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]");
    await PatientWebsiteVerify(page, patientwebsiteLocator);
})

test("PatientWebsite Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-830']").hover()
    await page.locator("//li[@id='menu-item-16860']").click()
    const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/a[1]");
    await TrustpilotVerify(page, TrustpilotVerifyLocator);
})

test("PatientWebsite Envanto Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-830']").hover()
    await page.locator("//li[@id='menu-item-16860']").click()
    const EnvantoVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[3]/div[1]/a[1]");
    await EnvantoVerify(page, EnvantoVerifyLocator);
})

test("PatientWebsite View Demo", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-830']").hover()
    await page.locator("//li[@id='menu-item-16860']").click()
    const patientwebsiteLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]");
    await patientwebsiteLocator.scrollIntoViewIfNeeded();
    await PatientWebsiteVerify(page, patientwebsiteLocator);
})

test("PatientWebsite View Demo 2", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-830']").hover()
    await page.locator("//li[@id='menu-item-16860']").click()
    const patientwebsiteLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await patientwebsiteLocator.scrollIntoViewIfNeeded();
    await PatientWebsiteVerify(page, patientwebsiteLocator);
})

test("PatientWebsite View Demo 3", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-830']").hover()
    await page.locator("//li[@id='menu-item-16860']").click()
    const patientwebsiteLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[5]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await patientwebsiteLocator.scrollIntoViewIfNeeded();
    await PatientWebsiteVerify(page, patientwebsiteLocator);
})

test("PatientWebsite View Demo 4", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-830']").hover()
    await page.locator("//li[@id='menu-item-16860']").click()
    const patientwebsiteLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await patientwebsiteLocator.scrollIntoViewIfNeeded();
    await PatientWebsiteVerify(page, patientwebsiteLocator);
})