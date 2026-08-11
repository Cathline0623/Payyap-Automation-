const LOCATORS = require('../locators/app.locators');
const { USER } = require('../data/user');
const TEST_DATA = require('../data/testData');
const allure = require('@wdio/allure-reporter').default;


// ============================================================
// HANDLE STARTUP PERMISSION POPUP
// ============================================================

async function handleStartupPopup() {

    console.log("Checking for startup permission popup...");

    const allowButton = await $(
        LOCATORS.permissions.notificationAllow
    );

    try {

        await allowButton.waitForDisplayed({
            timeout: TEST_DATA.timeouts.short
        });

        console.log(
            "Notification permission popup detected."
        );

        await allowButton.click();

        console.log(
            "Notification permission popup dismissed."
        );

    } catch (error) {

        console.log(
            "No notification permission popup detected. Continuing..."
        );

    }
}


// ============================================================
// WAIT AND TYPE
// ============================================================

async function waitAndType(selector, value, fieldName) {

    await allure.step(`Enter ${fieldName}`, async () => {

        const element = await $(selector);

        await element.waitForDisplayed({
            timeout: TEST_DATA.login.dashboardLoadTimeout
        });

        await element.clearValue();
        await element.setValue(value);

        const enteredValue = await element.getText();

        if (!enteredValue) {
            throw new Error(`${fieldName} was not entered.`);
        }

    });
}


// ============================================================
// LOGIN
// ============================================================

async function login() {

    await allure.step("Login to application", async () => {

        // ====================================================
        // STARTUP PERMISSION POPUP
        // ====================================================

        await handleStartupPopup();


        // ====================================================
        // EMAIL
        // ====================================================

        await waitAndType(
            LOCATORS.login.email,
            USER.email,
            "Email"
        );


        // ====================================================
        // PASSWORD
        // ====================================================

        await waitAndType(
            LOCATORS.login.password,
            USER.password,
            "Password"
        );


        // ====================================================
        // SIGN IN
        // ====================================================

        await allure.step("Click Sign In", async () => {

            const signIn = await $(LOCATORS.login.signIn);

            await signIn.waitForEnabled({
                timeout: TEST_DATA.login.dashboardLoadTimeout
            });

            await signIn.click();

        });


        // ====================================================
        // DASHBOARD
        // ====================================================

        await allure.step(
            "Verify dashboard is displayed",
            async () => {

                const menu = await $(
                    LOCATORS.navigation.menu
                );

                await menu.waitForDisplayed({
                    timeout:
                        TEST_DATA.login.dashboardLoadTimeout
                });

                await browser.pause(
                    TEST_DATA.login.uiStabilizationDelay
                );

                let sidebarOpened = false;

                for (
                    let i = 0;
                    i < TEST_DATA.login.menuRetryCount;
                    i++
                ) {

                    try {

                        if (await menu.isDisplayed()) {

                            await menu.click();

                            sidebarOpened = true;

                            break;

                        }

                    } catch (error) {}

                    await browser.pause(
                        TEST_DATA.login.menuRetryDelay
                    );

                }

                if (!sidebarOpened) {

                    throw new Error(
                        "Unable to open navigation drawer after login."
                    );

                }

            }
        );

    });

}


// ============================================================
// EXPORTS
// ============================================================

module.exports = {
    login,
    handleStartupPopup
};