const LOCATORS = require('../locators/app.locators');
const { USER } = require('../data/user');
const TEST_DATA = require('../data/testData');
const allure = require('@wdio/allure-reporter').default;

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

async function login() {

    await allure.step("Login to application", async () => {

        // Email
        await waitAndType(
            LOCATORS.login.email,
            USER.email,
            "Email"
        );

        // Password
        await waitAndType(
            LOCATORS.login.password,
            USER.password,
            "Password"
        );

        // Sign In
        await allure.step("Click Sign In", async () => {

            const signIn = await $(LOCATORS.login.signIn);

            await signIn.waitForEnabled({
                timeout: TEST_DATA.login.dashboardLoadTimeout
            });

            await signIn.click();

        });

        // Dashboard
        await allure.step("Verify dashboard is displayed", async () => {

            const menu = await $(LOCATORS.navigation.menu);

            await menu.waitForDisplayed({
                timeout: TEST_DATA.login.dashboardLoadTimeout
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

        });

    });

}

module.exports = {
    login
};