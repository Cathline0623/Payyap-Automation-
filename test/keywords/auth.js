const LOCATORS = require('../locators/app.locators');
const { USER } = require('../data/user');
const TEST_DATA = require('../data/testData');
const allure = require('@wdio/allure-reporter').default;


// ============================================================
// HANDLE STARTUP NOTIFICATION PERMISSION POPUP
// ============================================================

async function handleStartupPopup() {

    console.log(
        "Checking for startup notification permission popup..."
    );

    const denyButton = await $(
        LOCATORS.permissions.notificationDeny
    );

    const emailField = await $(
        LOCATORS.login.email
    );

    await browser.waitUntil(
        async () => {

            // Check for notification popup
            try {

                if (await denyButton.isDisplayed()) {

                    console.log(
                        "Notification permission popup detected."
                    );

                    await denyButton.click();

                    console.log(
                        "Clicked 'Don't allow' on notification permission popup."
                    );

                    await browser.pause(500);

                    return true;
                }

            } catch (error) {
                // Popup not available yet
            }

            // Check whether login screen is already available
            try {

                if (await emailField.isDisplayed()) {

                    console.log(
                        "Login screen already available. No permission popup."
                    );

                    return true;
                }

            } catch (error) {
                // Login screen not available yet
            }

            return false;
        },
        {
            timeout: TEST_DATA.login.dashboardLoadTimeout,
            interval: 1000,
            timeoutMsg:
                "Neither notification permission popup nor login screen appeared."
        }
    );

    // Make absolutely sure the login screen is ready
    await emailField.waitForDisplayed({
        timeout: TEST_DATA.login.dashboardLoadTimeout
    });

    console.log(
        "Startup handling complete. Login screen is ready."
    );
}

// ============================================================
// WAIT AND TYPE
// ============================================================

async function waitAndType(selector, value, fieldName) {

    await allure.step(
        `Enter ${fieldName}`,
        async () => {

            const element = await $(selector);

            await element.waitForDisplayed({
                timeout:
                    TEST_DATA.login.dashboardLoadTimeout
            });

            await element.clearValue();

            await element.setValue(value);

            console.log(
                `${fieldName} entered successfully.`
            );

        }
    );
}


// ============================================================
// LOGIN
// ============================================================

async function login() {

    await allure.step(
        "Login to application",
        async () => {

            // ====================================================
            // APP STARTUP
            // ====================================================

            console.log(
                "========== APP STARTUP =========="
            );

            // IMPORTANT:
            // This MUST happen before searching for the
            // login fields because the Android permission
            // dialog appears on top of the login screen.
            await handleStartupPopup();


            // ====================================================
            // EMAIL
            // ====================================================

            console.log(
                "========== EMAIL =========="
            );

            await waitAndType(
                LOCATORS.login.email,
                USER.email,
                "Email"
            );


            // ====================================================
            // PASSWORD
            // ====================================================

            console.log(
                "========== PASSWORD =========="
            );

            await waitAndType(
                LOCATORS.login.password,
                USER.password,
                "Password"
            );


            // ====================================================
            // SIGN IN
            // ====================================================

            console.log(
                "========== SIGN IN =========="
            );

            await allure.step(
                "Click Sign In",
                async () => {

                    const signIn = await $(
                        LOCATORS.login.signIn
                    );

                    await signIn.waitForEnabled({
                        timeout:
                            TEST_DATA.login.dashboardLoadTimeout
                    });

                    await signIn.click();

                    console.log(
                        "Login submitted."
                    );

                }
            );


            // ====================================================
            // DASHBOARD
            // ====================================================

            await allure.step(
                "Verify dashboard is displayed",
                async () => {

                    console.log(
                        "========== DASHBOARD =========="
                    );

                    const menu = await $(
                        LOCATORS.navigation.menu
                    );

                    await menu.waitForDisplayed({
                        timeout:
                            TEST_DATA.login.dashboardLoadTimeout
                    });

                    console.log(
                        "Dashboard loaded."
                    );

                    await browser.pause(
                        TEST_DATA.login.uiStabilizationDelay
                    );


                    // ====================================================
                    // OPEN NAVIGATION DRAWER
                    // ====================================================

                    let sidebarOpened = false;

                    for (
                        let i = 0;
                        i < TEST_DATA.login.menuRetryCount;
                        i++
                    ) {

                        try {

                            if (
                                await menu.isDisplayed() &&
                                await menu.isEnabled()
                            ) {

                                await menu.click();

                                sidebarOpened = true;

                                console.log(
                                    "Navigation drawer opened."
                                );

                                break;

                            }

                        } catch (error) {

                            console.log(
                                `Navigation drawer attempt ${
                                    i + 1
                                } failed. Retrying...`
                            );

                        }

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

        }
    );
}


// ============================================================
// EXPORTS
// ============================================================

module.exports = {
    login,
    handleStartupPopup
};