import { test } from '@playwright/test';
import { AdminPanelVerify, BookcallVerify, CommonLinkVerify, EmployeeAppAppstore, EmployeeAppPlaystore, EnvantoVerify, PatientAppPlaystore, PatientWebsiteVerify, TrustpilotVerify } from './common';
const home_url = process.env.HOME_URL;

test.describe("ExploreNow", () => {
    let newPage;

    test.beforeEach(async ({ page }) => {
        await page.goto(home_url);
        const explorenow = page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/a[1]");

        const [popup] = await Promise.all([
            page.context().waitForEvent('page'),
            explorenow.click()
        ]);
        newPage = popup;
    });

    test("Trustpilot Verify", async () => {
        const TrustpilotVerifyLocator = newPage.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");
        await TrustpilotVerify(newPage, TrustpilotVerifyLocator);
    });

    test("Book a quick call", async () => {
        const EnvantoVerifyLocator = newPage.locator("//a[contains(text(),'Book a quick call.')]");
        await BookcallVerify(newPage, EnvantoVerifyLocator);
    });

    test("Envanto Verify", async () => {
        const EnvantoVerifyLocator = newPage.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[1]/a[1]");
        await EnvantoVerify(newPage, EnvantoVerifyLocator);
    });

    test("Pharma App Playstore", async () => {
        const adminpanelLocator = newPage.locator("//div[@class='elementor-element elementor-element-380a5b9 elementor-widget elementor-widget-image']//a");
        await adminpanelLocator.scrollIntoViewIfNeeded();
        await EmployeeAppPlaystore(newPage, adminpanelLocator);
    });

    test("Pharma App Appstore", async () => {
        const adminpanelLocator = newPage.locator("//div[@class='elementor-element elementor-element-bab1dda elementor-widget elementor-widget-image']//img[@class='attachment-large size-large wp-image-2008']");
        await adminpanelLocator.scrollIntoViewIfNeeded();
        await EmployeeAppAppstore(newPage, adminpanelLocator);
    });

    test("Employee App Playstore", async () => {
        const adminpanelLocator = newPage.locator("//div[@class='elementor-element elementor-element-ab2b81e elementor-widget elementor-widget-image']//a");
        await adminpanelLocator.scrollIntoViewIfNeeded();
        await EmployeeAppPlaystore(newPage, adminpanelLocator);
    });

    test("Employee App Appstore", async () => {
        const adminpanelLocator = newPage.locator("//div[@class='elementor-element elementor-element-9abd85c elementor-widget elementor-widget-image']//img[@class='attachment-large size-large wp-image-2008']");
        await adminpanelLocator.scrollIntoViewIfNeeded();
        await EmployeeAppAppstore(newPage, adminpanelLocator);
    });

    test("Patient App Playstore", async () => {
        const adminpanelLocator = newPage.locator("//img[@title='p-store']");
        await adminpanelLocator.scrollIntoViewIfNeeded();
        await PatientAppPlaystore(newPage, adminpanelLocator);
    });

    test("Patinet Website Verify", async () => {
        const patientwebsiteLocator = newPage.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[2]/div[3]/div[1]/div[1]/div[1]/a[1]");
        await patientwebsiteLocator.scrollIntoViewIfNeeded();
        await PatientWebsiteVerify(newPage, patientwebsiteLocator);
    });

    test("View Demo", async () => {
        const adminpanelLocator = newPage.locator("//a[contains(@href,'https://apps.iqonic.design/kivicare-laravel/admin/login')]");
        await adminpanelLocator.scrollIntoViewIfNeeded();
        await AdminPanelVerify(newPage, adminpanelLocator);
    });

    test("Contact Us", async () => {
        const Locator = newPage.locator("//a[normalize-space()='Contact Us']");
        await Locator.scrollIntoViewIfNeeded();
        const expectedLink = "https://iqonic.tech/contact-us/";
        await CommonLinkVerify(newPage, Locator, expectedLink);
    });
});