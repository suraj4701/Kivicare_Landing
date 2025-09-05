import { expect, test } from '@playwright/test';
const home_url = process.env.HOME_URL;

test("GetHelp Support", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-832']").hover()
    const support = page.locator("//li[@id='menu-item-833']")

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        support.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://iqonic.desky.support/");
})

test("GetHelp Docs", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-832']").hover()
    const support = page.locator("//li[@id='menu-item-834']")

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        support.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://documentation.iqonic.design/kivicare-laravel/");
})

test("GetHelp FAQ", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-832']").hover()
    await page.locator("//li[@id='menu-item-1605']").click()
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://laravel.kivicare.io/faq/");
})