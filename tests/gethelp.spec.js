import { expect, test } from '@playwright/test';
import { CommonLinkVerify } from './common';
const home_url = process.env.HOME_URL;

test("GetHelp Support", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-832']").hover()
    const support = page.locator("//li[@id='menu-item-833']")
    const expectedLink = "https://iqonic.desky.support/";
    await CommonLinkVerify(page, support, expectedLink);
})

test("GetHelp Docs", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-832']").hover()
    const support = page.locator("//li[@id='menu-item-834']")
    const expectedLink = "https://documentation.iqonic.design/kivicare-laravel/";
    await CommonLinkVerify(page, support, expectedLink);
})

test("GetHelp FAQ", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-832']").hover()
    await page.locator("//li[@id='menu-item-1605']").click()
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://laravel.kivicare.io/faq/");
})