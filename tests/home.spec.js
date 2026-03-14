import { expect, test } from '@playwright/test';
import { AdminPanelVerify, BookcallVerify, CommonLinkVerify, EnvantoKivicareVerify, EnvantoVerify, PatientWebsiteVerify, TrustpilotVerify } from './common';
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

test("Home Explore Patients App", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//a[normalize-space()='Explore Patients App']");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://laravel.kivicare.io/product/laravel-clinic-management-patient-app/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://laravel.kivicare.io/product/laravel-clinic-management-patient-app/");
});

test("Home Explore Doctor App", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//a[normalize-space()='Explore Doctor App']");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://laravel.kivicare.io/product/clinic-management-admin-app/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://laravel.kivicare.io/product/clinic-management-admin-app/");
});

test("Home Explore Pharma App", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//a[normalize-space()='Explore Pharma App']");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://laravel.kivicare.io/pharma-app/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://laravel.kivicare.io/pharma-app/");
});

test("Home Explore Laboratorist App", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//a[normalize-space()='Explore Laboratorist App']");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://laravel.kivicare.io/laboratorist-app/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://laravel.kivicare.io/laboratorist-app/");
});

test("Home Explore Admin Panel", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//a[normalize-space()='Explore Admin Panel']");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://laravel.kivicare.io/product/admin-panel/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://laravel.kivicare.io/product/admin-panel/");
});

test("Home Explore Patients Website", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//a[normalize-space()='Explore Patients Website']");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://laravel.kivicare.io/product/patient-management-website-in-laravel/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://laravel.kivicare.io/product/patient-management-website-in-laravel/");
});

test("Home Book a quick call 2", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoVerifyLocator = page.locator("//a[contains(text(),'Still wondering if KiviCare Laravel suits your bus')]");
    await EnvantoVerifyLocator.scrollIntoViewIfNeeded();
    await BookcallVerify(page, EnvantoVerifyLocator);
})

test("Home Book a quick call 3", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoVerifyLocator = page.locator("//a[contains(text(),'Still exploring? Let us show how KiviCare Laravel ')]");
    await EnvantoVerifyLocator.scrollIntoViewIfNeeded();
    await BookcallVerify(page, EnvantoVerifyLocator);
})

test("Home Buy now", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoKivicareVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-22c899a elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoKivicareVerify(page, EnvantoKivicareVerifyLocator);
})

test("Home Buy now 2", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoKivicareVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-336a468 elementor-align-center elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
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
    const EnvantoKivicareVerifyLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-1bce3ec elementor-align-left elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoKivicareVerify(page, EnvantoKivicareVerifyLocator);
})

test("Home Try Demo", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//a[normalize-space()='Try demo']");
    await LinkLocator.scrollIntoViewIfNeeded();
    const expectedLink = "https://laravel.kivicare.io/explore-demo/";
    await CommonLinkVerify(page, LinkLocator, expectedLink);
})

test("Home Facebook", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/span[1]");
    await LinkLocator.scrollIntoViewIfNeeded();
    const expectedLink = "https://www.facebook.com/iqonicdesign";
    await CommonLinkVerify(page, LinkLocator, expectedLink);
})

test("Home Youtube", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/span[2]");
    await LinkLocator.scrollIntoViewIfNeeded();
    const expectedLink = "https://www.youtube.com/iqonicdesign";
    await CommonLinkVerify(page, LinkLocator, expectedLink);
})

test("Home X-Twitter", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/span[3]");
    await LinkLocator.scrollIntoViewIfNeeded();
    const expectedLink = "https://x.com/iqonicdesign";
    await CommonLinkVerify(page, LinkLocator, expectedLink);
})

test("Home Instagram", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/span[4]");
    await LinkLocator.scrollIntoViewIfNeeded();
    const expectedLink = "https://www.instagram.com/iqonicdesign/";
    await CommonLinkVerify(page, LinkLocator, expectedLink);
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

test("Home Footer Hippa", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//span[normalize-space()='Hipaa']");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://laravel.kivicare.io/feature/hipaa/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://laravel.kivicare.io/feature/hipaa/");
});

test("Home Footer Book For Other", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//span[normalize-space()='Book For Other']");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://laravel.kivicare.io/feature/book-for-other/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://laravel.kivicare.io/feature/book-for-other/");
});

test("Home Footer Body Chart", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//span[normalize-space()='Body Chart']");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://laravel.kivicare.io/feature/body-chart/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://laravel.kivicare.io/feature/body-chart/");
});

test("Home Footer Quick Appointment Booking", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//span[normalize-space()='Quick Appointment Booking']");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://laravel.kivicare.io/feature/quick-appointment-booking/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://laravel.kivicare.io/feature/quick-appointment-booking/");
});

test("Home Footer Doc", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//span[normalize-space()='Docs']");
    await LinkLocator.scrollIntoViewIfNeeded();
    const expectedLink = "https://documentation.iqonic.design/kivicare-laravel/";
    await CommonLinkVerify(page, LinkLocator, expectedLink);
})

test("Home Footer Pricing", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//span[normalize-space()='Pricing']");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://laravel.kivicare.io/pricing/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://laravel.kivicare.io/pricing/");
});

test("Home Footer FAQ", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//span[normalize-space()='FAQ']");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://laravel.kivicare.io/faq/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://laravel.kivicare.io/faq/");
});

test("Home Footer Support", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//span[normalize-space()='Support']");
    await LinkLocator.scrollIntoViewIfNeeded();
    const expectedLink = "https://iqonic.desky.support/";
    await CommonLinkVerify(page, LinkLocator, expectedLink);
})

test("Home Footer Get A Quote", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//span[normalize-space()='Get A Quote']");
    await LinkLocator.scrollIntoViewIfNeeded();
    const expectedLink = "https://iqonic.tech/software-development-cost-calculator/";
    await CommonLinkVerify(page, LinkLocator, expectedLink);
})

test("Home Footer License", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//span[normalize-space()='License']");
    await LinkLocator.scrollIntoViewIfNeeded();
    const expectedLink = "https://iqonic.design/licensing-terms-more/";
    await CommonLinkVerify(page, LinkLocator, expectedLink);
})

test("Home Footer Hire Us", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//span[normalize-space()='hire us']");
    await LinkLocator.scrollIntoViewIfNeeded();
    const expectedLink = "https://iqonic.tech/healthcare/";
    await CommonLinkVerify(page, LinkLocator, expectedLink);
})

test("Home Footer Iqonic Design.", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//a[normalize-space()='Iqonic Design.']");
    await LinkLocator.scrollIntoViewIfNeeded();
    const expectedLink = "https://iqonic.design/";
    await CommonLinkVerify(page, LinkLocator, expectedLink);
})