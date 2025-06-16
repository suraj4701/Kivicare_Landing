const { test, expect } = require('@playwright/test');
const { TrustpilotVerify, EnvantoVerify, PatientAppPlaystore, EmployeeAppPlaystore, EmployeeAppAppstore } = require('./common');
const home_url = process.env.HOME_URL;

test("ForDeveloper Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1282']").hover()
    await page.locator("//li[@id='menu-item-1284']").click()
    const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]");
    await TrustpilotVerify(page, TrustpilotVerifyLocator);
})

test("ForDeveloper Envanto Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1282']").hover()
    await page.locator("//li[@id='menu-item-1284']").click()
    const EnvantoVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]");
    await EnvantoVerify(page, EnvantoVerifyLocator);
})

test("ForDeveloper clinic and patient management system", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1282']").hover()
    await page.locator("//li[@id='menu-item-1284']").click()
    const LinkLocator = page.locator("//a[contains(text(),'clinic and patient management system')]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe(home_url);
})

test("ForDeveloper Patient App Playstore", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1282']").hover()
    await page.locator("//li[@id='menu-item-1284']").click()
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await PatientAppPlaystore(page, adminpanelLocator);
})

test("ForDeveloper Employee App Playstore", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1282']").hover()
    await page.locator("//li[@id='menu-item-1284']").click()
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[2]/div[1]/div[2]/div[2]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await EmployeeAppPlaystore(page, adminpanelLocator);
})

test("ForDeveloper Employee App Appstore", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1282']").hover()
    await page.locator("//li[@id='menu-item-1284']").click()
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[2]/div[1]/div[2]/div[3]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await EmployeeAppAppstore(page, adminpanelLocator);
})

test("ForDeveloper custom development", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1282']").hover()
    await page.locator("//li[@id='menu-item-1284']").click()
    const LinkLocator = page.locator("//a[contains(text(),'custom development')]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://iqonic.tech/healthcare/");
})

test.only("ForDeveloper tech support team", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1282']").hover()
    await page.locator("//li[@id='menu-item-1284']").click()
    const LinkLocator = page.locator("//a[contains(text(),'tech support team')]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://iqonic.desky.support/");
})