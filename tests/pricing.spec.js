import { test } from '@playwright/test';
import { CommonLinkVerify, EnvantoKivicareEcoSystemVerify, EnvantoKivicareVerify } from './common';
const home_url = process.env.HOME_URL;

test("Pricing buy", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1604']").click();
    const LinkLocator = page.locator("//div[@class='elementor-element elementor-element-096cbb5 elementor-widget__width-auto elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-md']");
    await LinkLocator.scrollIntoViewIfNeeded();
    await EnvantoKivicareVerify(page, LinkLocator);
})

test("Pricing Buy 2", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1604']").click();
    const LinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/div[2]");
    await LinkLocator.scrollIntoViewIfNeeded();
    const expectedLink = "https://service.iqonic.design/services/kivicare-flutter-app-with-laravel-backend/";
    await CommonLinkVerify(page, LinkLocator, expectedLink);
})

test("Pricing Envanto Kivicare Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-1604']").click();
    const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");
    await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoKivicareVerify(page, EnvantoKivicareVerifyLocator);
})

test("Hire Us", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//li[@id='menu-item-835']")
    await LinkLocator.scrollIntoViewIfNeeded();
    const expectedLink = "https://iqonic.tech/healthcare/";
    await CommonLinkVerify(page, LinkLocator, expectedLink);
})

test("Book Demo Call", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//li[@id='menu-item-15172']")
    await LinkLocator.scrollIntoViewIfNeeded();
    const expectedLink = "https://laravel.kivicare.io/kivicare-laravel-demo-call/";
    await CommonLinkVerify(page, LinkLocator, expectedLink);
})

test("Buy now", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoKivicareVerifyLocator = page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]")
    await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoKivicareEcoSystemVerify(page, EnvantoKivicareVerifyLocator);
})