import { expect, test } from '@playwright/test';
import { AdminPanelVerify, BookcallVerify, EnvantoKivicareVerify, EnvantoVerify, PatientWebsiteVerify, TrustpilotVerify } from './common';
const home_url = process.env.HOME_URL;

test("Home Patinet Website Verify", async ({ page }) => {
    await page.goto(home_url);
    const patientwebsiteLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]");
    await PatientWebsiteVerify(page, patientwebsiteLocator);
})

test("Home Admin Panel Verify", async ({ page }) => {
    await page.goto(home_url);
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]");
    await AdminPanelVerify(page, adminpanelLocator);
})

test("Home Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]");
    await TrustpilotVerify(page, TrustpilotVerifyLocator);
})

test("Home Envanto Verify", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[3]/div[1]");
    await EnvantoVerify(page, EnvantoVerifyLocator);
})

test("Home Book a quick call", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoVerifyLocator = page.locator("//a[contains(text(),'Book a quick call.')]");
    await BookcallVerify(page, EnvantoVerifyLocator);
})

test("Home Explore Patients Website", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://laravel.kivicare.io/product/patient-management-website-in-laravel/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://laravel.kivicare.io/product/patient-management-website-in-laravel/");
});

test("Home Explore Patients App", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://laravel.kivicare.io/product/laravel-clinic-management-patient-app/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://laravel.kivicare.io/product/laravel-clinic-management-patient-app/");
});

test("Home Explore Doctor App", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[5]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://laravel.kivicare.io/product/clinic-management-admin-app/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://laravel.kivicare.io/product/clinic-management-admin-app/");
});

test("Home Explore Admin Panel", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://laravel.kivicare.io/product/admin-panel/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://laravel.kivicare.io/product/admin-panel/");
});

test("Home Book a quick call 2", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[7]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoVerifyLocator.scrollIntoViewIfNeeded();
    await BookcallVerify(page, EnvantoVerifyLocator);
})

test("Home Book a quick call 3", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[10]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoVerifyLocator.scrollIntoViewIfNeeded();
    await BookcallVerify(page, EnvantoVerifyLocator);
})

test("Home Buy now", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[11]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoKivicareVerify(page, EnvantoKivicareVerifyLocator);
})

test("Home Buy now 2", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[12]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoKivicareVerify(page, EnvantoKivicareVerifyLocator);
})

test("Home Buy now 3", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[13]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoKivicareVerify(page, EnvantoKivicareVerifyLocator);
})

test("Home Book a quick call 4", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoVerifyLocator = page.locator("//a[normalize-space()='Talk to a Product Expert']");
    await EnvantoVerifyLocator.scrollIntoViewIfNeeded();
    await BookcallVerify(page, EnvantoVerifyLocator);
})

test("Home Buy now 4", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoKivicareVerifyLocator = page.locator("//a[contains(text(),'Buy Regular')]");
    await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoKivicareVerify(page, EnvantoKivicareVerifyLocator);
})

test("Home Buy Service", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//a[contains(text(),'Buy Services')]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://service.iqonic.design/services/kivicare-flutter-app-with-laravel-backend/");
})

test("Home Buy now 5", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[16]/div[1]/div[1]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoKivicareVerify(page, EnvantoKivicareVerifyLocator);
})

test("Home Try Demo", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[16]/div[1]/div[1]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://laravel.kivicare.io/explore-demo/");
})

test("Home Facebook", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/span[1]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://www.facebook.com/iqonicdesign");
})

test("Home Youtube", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/span[2]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://www.youtube.com/iqonicdesign");
})

test("Home X-Twitter", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/span[3]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://x.com/iqonicdesign");
})

test("Home Instagram", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/span[4]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://www.instagram.com/iqonicdesign/");
})

test("Home Footer Patient Website", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/ul[1]/li[1]");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://laravel.kivicare.io/product/patient-management-website-in-laravel/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://laravel.kivicare.io/product/patient-management-website-in-laravel/");
});

test("Home Footer Patient App", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/ul[1]/li[2]");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://laravel.kivicare.io/product/laravel-clinic-management-patient-app/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://laravel.kivicare.io/product/laravel-clinic-management-patient-app/");
});

test("Home Footer Clinic Admin App", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/ul[1]/li[3]");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://laravel.kivicare.io/product/clinic-management-admin-app/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://laravel.kivicare.io/product/clinic-management-admin-app/");
});

test("Home Footer Admin Panel", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/ul[1]/li[4]");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://laravel.kivicare.io/product/admin-panel/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://laravel.kivicare.io/product/admin-panel/");
});

test("Home Footer Doc", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/ul[1]/li[1]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://apps.iqonic.design/documentation/kivicare-laravel-doc/build/");
})

test("Home Footer Pricing", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/ul[1]/li[2]");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://laravel.kivicare.io/pricing/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://laravel.kivicare.io/pricing/");
});

test("Home Footer FAQ", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/ul[1]/li[3]");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://laravel.kivicare.io/faq/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://laravel.kivicare.io/faq/");
});

test("Home Footer Roadmap", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/ul[1]/li[4]");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://laravel.kivicare.io/roadmap/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://laravel.kivicare.io/roadmap/");
});

test("Home Footer Support", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[1]/ul[1]/li[1]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://iqonic.desky.support/");
})

test("Home Footer Get A Quote", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[1]/ul[1]/li[2]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://iqonic.tech/cost-calculator/");
})

test("Home Footer License", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[1]/ul[1]/li[3]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const iqonicDesignSpanLocator = newPage.locator("//h2[contains(text(),'Licensing, Terms & More...')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Licensing, Terms & More...');
})

test("Home Footer Hire Us", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[1]/ul[1]/li[4]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://iqonic.tech/healthcare/");
})