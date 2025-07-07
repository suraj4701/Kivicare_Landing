import { expect, test } from '@playwright/test';
import { AdminPanelVerify, BookcallVerify, EmployeeAppAppstore, EmployeeAppPlaystore, EnvantoVerify, PatientAppPlaystore, PatientWebsiteVerify, TrustpilotVerify } from './common';
const home_url = process.env.HOME_URL;

test("ExploreNow Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    const explorenow = page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        explorenow.click()
    ])

    const TrustpilotVerifyLocator = newPage.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");
    await TrustpilotVerify(newPage, TrustpilotVerifyLocator);
})

test("ExploreNow Book a quick call", async ({ page }) => {
    await page.goto(home_url);
    const explorenow = page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        explorenow.click()
    ])
    const EnvantoVerifyLocator = newPage.locator("//a[contains(text(),'Book a quick call.')]");
    await BookcallVerify(newPage, EnvantoVerifyLocator);
})

test("ExploreNow Envanto Verify", async ({ page }) => {
    await page.goto(home_url);
    const explorenow = page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        explorenow.click()
    ])

    const EnvantoVerifyLocator = newPage.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[1]/a[1]");
    await EnvantoVerify(newPage, EnvantoVerifyLocator);
})

test("ExploreNow Patient App Playstore", async ({ page }) => {
    await page.goto(home_url);
    const explorenow = page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        explorenow.click()
    ])

    const adminpanelLocator = newPage.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await PatientAppPlaystore(newPage, adminpanelLocator);
})

test("ExploreNow Employee App Playstore", async ({ page }) => {
    await page.goto(home_url);
    const explorenow = page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        explorenow.click()
    ])

    const adminpanelLocator = newPage.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await EmployeeAppPlaystore(newPage, adminpanelLocator);
})

test("ExploreNow Employee App Appstore", async ({ page }) => {
    await page.goto(home_url);
    const explorenow = page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        explorenow.click()
    ])

    const adminpanelLocator = newPage.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[3]/div[1]/div[2]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await EmployeeAppAppstore(newPage, adminpanelLocator);
})

test("ExploreNow View Demo", async ({ page }) => {
    await page.goto(home_url);
    const explorenow = page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        explorenow.click()
    ])

    const adminpanelLocator = newPage.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(newPage, adminpanelLocator);
})

test("ExploreNow Patinet Website Verify", async ({ page }) => {
    await page.goto(home_url);
    const explorenow = page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        explorenow.click()
    ])

    const patientwebsiteLocator = newPage.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[2]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await patientwebsiteLocator.scrollIntoViewIfNeeded();
    await PatientWebsiteVerify(newPage, patientwebsiteLocator);
})

test("ExploreNow Contact Us", async ({ page }) => {
    await page.goto(home_url);
    const explorenow = page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        explorenow.click()
    ])

    const Locator = newPage.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[3]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await Locator.scrollIntoViewIfNeeded();

    const [newPage1] = await Promise.all([
        newPage.context().waitForEvent('page'),
        Locator.click()
    ])
    const newPageUrl = newPage1.url();
    expect(newPageUrl).toBe("https://iqonic.tech/contact-us/");
})