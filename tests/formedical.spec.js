const { test, expect } = require('@playwright/test');
const { TrustpilotVerify, EnvantoVerify } = require('./common');
const home_url = process.env.HOME_URL;

test("ForMedicalProfessional Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1282']").hover()
    await page.locator("//li[@id='menu-item-1283']").click()
    const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await TrustpilotVerify(page, TrustpilotVerifyLocator);
})

test("ForMedicalProfessional Envanto Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1282']").hover()
    await page.locator("//li[@id='menu-item-1283']").click()
    const EnvantoVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/a[1]");
    await EnvantoVerify(page, EnvantoVerifyLocator);
})

test("ForMedicalProfessional laravel clinic management solution", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1282']").hover()
    await page.locator("//li[@id='menu-item-1283']").click()
    const LinkLocator = page.locator("//a[contains(text(),'laravel clinic management solution')]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe(home_url);
})

test("ForMedicalProfessional support team", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1282']").hover()
    await page.locator("//li[@id='menu-item-1283']").click()
    const LinkLocator = page.locator("//a[contains(text(),'support team')]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://iqonic.desky.support/");
})

test("ForMedicalProfessional custom development", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1282']").hover()
    await page.locator("//li[@id='menu-item-1283']").click()
    const LinkLocator = page.locator("//a[contains(text(),'custom development')]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://iqonic.tech/");
})