const { expect } = require('@playwright/test');

const PatientWebsiteVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    await newPage.waitForLoadState('networkidle');
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://apps.iqonic.design/kivicare-laravel/");
    return newPage;
}

const PatientWebsiteLoginVerify = async (page, locator) => {
    const newPage = await CommonLinkVerify(page, locator, "https://apps.iqonic.design/kivicare-laravel/login");
    await newPage.waitForLoadState('networkidle');
    return newPage;
}

const AdminPanelVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    await newPage.waitForLoadState('networkidle');
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://apps.iqonic.design/kivicare-laravel/admin/login");
    return newPage;
}

const TrustpilotVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://www.trustpilot.com/review/iqonic.design");
    return newPage;
}

const EnvantoVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://codecanyon.net/user/iqonicdesign/portfolio");
    const iqonicDesignSpanLocator = newPage.locator("//h1[contains(text(),'iqonicdesign - Portfolio')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('iqonicdesign - Portfolio');
    return newPage;
}

const EnvantoKivicareVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const iqonicDesignSpanLocator = newPage.locator("//body/div[1]/div[3]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/h1[1]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('KiviCare(TM) - Best Clinic and Patient Management Flutter App');
    return newPage;
}

const EnvantoKivicareEcoSystemVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const iqonicDesignSpanLocator = newPage.locator("//h1[normalize-space()='KiviCare Laravel Eco system']");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('KiviCare Laravel Eco system');
    return newPage;
}

const EnvantoKivicarePharmaVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const iqonicDesignSpanLocator = newPage.locator("//h1[@class='t-heading -color-inherit -size-l h-m0 is-hidden-phone']");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('KiviCare(TM) Pharma- Pharmacy & Inventory Management System Laravel');
    return newPage;
}

const PatientAppPlaystore = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://play.google.com/store/apps/details?id=com.wellness.customer");
    const trustpilotLocator = newPage.locator("//body[1]/c-wiz[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/c-wiz[1]/div[2]/div[1]/div[1]/div[1]/div[1]/h1[1]");
    const verifytext = await trustpilotLocator.textContent();
    expect(verifytext).toContain('KiviCare');
    return newPage;
}

const EmployeeAppPlaystore = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://play.google.com/store/apps/details?id=com.wellness.vendor");
    const trustpilotLocator = newPage.locator("//span[contains(text(),'KiviCare Employee')]");
    const verifytext = await trustpilotLocator.textContent();
    expect(verifytext).toContain('KiviCare Employee');
    return newPage;
}

const EmployeeAppAppstore = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://apps.apple.com/in/app/kivicare-employee/id6502933651");
    const trustpilotLocator = newPage.locator("//h1[normalize-space()='KiviCare Employee']");
    const verifytext = await trustpilotLocator.textContent();
    expect(verifytext).toContain('KiviCare Employee');
    return newPage;
}

const BookcallVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    const urlObject = new URL(newPageUrl);
    const urlWithoutQueryParams = urlObject.origin + urlObject.pathname;
    expect(urlWithoutQueryParams).toBe("https://laravel.kivicare.io/kivicare-laravel-demo-call/");
    return newPage;
}

const CommonLinkVerify = async (page, locator, link) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    const urlObject = new URL(newPageUrl);
    const urlWithoutQueryParams = urlObject.origin + urlObject.pathname;
    expect(urlWithoutQueryParams).toBe(link);
    return newPage;
}

module.exports = { PatientWebsiteVerify, BookcallVerify, AdminPanelVerify, TrustpilotVerify, EnvantoVerify, EnvantoKivicareVerify, EnvantoKivicareEcoSystemVerify, PatientAppPlaystore, EmployeeAppPlaystore, EmployeeAppAppstore, CommonLinkVerify, EnvantoKivicarePharmaVerify, PatientWebsiteLoginVerify };