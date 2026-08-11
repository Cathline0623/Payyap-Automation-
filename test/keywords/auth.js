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

    try {

        await denyButton.waitForDisplayed({
            timeout: TEST_DATA.timeouts.short
        });

        console.log(
            "Notification permission popup detected."
        );

        // Explicitly click "Don't allow"
        await denyButton.click();

        console.log(
            "Clicked 'Don't allow' on notification permission popup."
        );

        // Wait for Android to completely dismiss the system dialog
        await browser.pause(1000);

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