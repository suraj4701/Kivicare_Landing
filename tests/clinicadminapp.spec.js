import { test } from '@playwright/test';
import { BookcallVerify, CommonLinkVerify, EmployeeAppAppstore, EmployeeAppPlaystore, EnvantoKivicareVerify, EnvantoVerify, TrustpilotVerify } from './common';
const home_url = process.env.HOME_URL;

test("ClinicAdminApp Envanto Kivicare Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-830']").hover();
    await page.locator("//li[@id='menu-item-1286']").click();
    const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoKivicareVerify(page, EnvantoKivicareVerifyLocator);
})

test("ClinicAdminApp Employee App Playstore", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-830']").hover();
    await page.locator("//li[@id='menu-item-1286']").click();
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await EmployeeAppPlaystore(page, adminpanelLocator);
})

test("ClinicAdminApp Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-830']").hover()
    await page.locator("//li[@id='menu-item-1286']").click();
    const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/a[1]");
    await TrustpilotVerify(page, TrustpilotVerifyLocator);
})

test("ClinicAdminApp Envanto Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-830']").hover()
    await page.locator("//li[@id='menu-item-1286']").click();
    const EnvantoVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[3]/div[1]/a[1]");
    await EnvantoVerify(page, EnvantoVerifyLocator);
})

test("ClinicAdminApp Book a quick call", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-830']").hover();
    await page.locator("//li[@id='menu-item-1286']").click();
    const EnvantoVerifyLocator = page.locator("//a[contains(text(),'Book a quick call.')]");
    await BookcallVerify(page, EnvantoVerifyLocator);
})

test("ClinicAdminApp Book a quick call 2", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-830']").hover();
    await page.locator("//li[@id='menu-item-1286']").click();
    const EnvantoVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[5]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoVerifyLocator.scrollIntoViewIfNeeded();
    await BookcallVerify(page, EnvantoVerifyLocator);
})

test("ClinicAdminApp View Demo", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-830']").hover();
    await page.locator("//li[@id='menu-item-1286']").click();
    const adminpanelLocator = page.locator("//a[contains(@href,'https://apps.iqonic.design/kivicare-laravel/app/bed-allocation')]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    const expectedLink = "https://apps.iqonic.design/kivicare-laravel/login";
    await CommonLinkVerify(page, adminpanelLocator, expectedLink);
})

test("ClinicAdminApp View Demo 2", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-830']").hover();
    await page.locator("//li[@id='menu-item-1286']").click();
    const adminpanelLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-22c899a elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='View Demo']");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await EmployeeAppPlaystore(page, adminpanelLocator);
})

test("ClinicAdminApp Handle all clinic management needs", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-830']").hover();
    await page.locator("//li[@id='menu-item-1286']").click();
    const adminpanelLocator = page.locator("//a[normalize-space()='Handle all clinic management needs']");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await EmployeeAppAppstore(page, adminpanelLocator);
})

test("ClinicAdminApp View Demo 3", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-830']").hover();
    await page.locator("//li[@id='menu-item-1286']").click();
    const adminpanelLocator = page.locator("//div[@class='elementor-element elementor-element-336a468 elementor-align-center elementor-widget elementor-widget-elementskit-button']//div[@class='ekit-btn-wraper']");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await EmployeeAppPlaystore(page, adminpanelLocator);
})

test("ClinicAdminApp View Demo 4", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-830']").hover();
    await page.locator("//li[@id='menu-item-1286']").click();
    const adminpanelLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-66206cc elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='View Demo']");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await EmployeeAppPlaystore(page, adminpanelLocator);
})

test("ClinicAdminApp View Demo 5", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-830']").hover();
    await page.locator("//li[@id='menu-item-1286']").click();
    const adminpanelLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-19738bf elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='View Demo']");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await EmployeeAppPlaystore(page, adminpanelLocator);
})