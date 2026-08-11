const Auth = require('../keywords/auth');
const LOCATORS = require('../locators/app.locators');
const TEST_DATA = require('../data/testData');

describe('Sell Product - Cash Payment', () => {

    it('Searches for bread and verifies search results', async function () {

        this.timeout(180000);

        // ============================================================
        // LOGIN
        // ============================================================

        console.log("========== LOGIN ==========");

        // Handle Android startup notification permission popup.
        // If popup exists -> click "Don't allow".
        // If popup does not exist -> continue normally.
        await Auth.handleStartupPopup();

        const email = await $(LOCATORS.login.email);

        await email.waitForDisplayed({
            timeout: TEST_DATA.login.dashboardLoadTimeout
        });

        await email.setValue(
            TEST_DATA.users.kiosk.email
        );

        console.log("Email entered.");

        const password = await $(LOCATORS.login.password);

        await password.waitForDisplayed({
            timeout: TEST_DATA.login.dashboardLoadTimeout
        });

        await password.setValue(
            TEST_DATA.users.kiosk.password
        );

        console.log("Password entered.");

        const signIn = await $(LOCATORS.login.signIn);

        await signIn.waitForEnabled({
            timeout: TEST_DATA.login.dashboardLoadTimeout
        });

        await signIn.click();

        console.log("Login submitted.");

        // ============================================================
        // SALES SCREEN
        // ============================================================

        const searchBox = await $(LOCATORS.order.search);

        await browser.waitUntil(
            async () => {

                try {
                    return await searchBox.isDisplayed();
                } catch {
                    return false;
                }

            },
            {
                timeout: TEST_DATA.login.dashboardLoadTimeout,
                interval: 1000
            }
        );

        console.log("Sales screen loaded.");

        // ============================================================
        // SEARCH
        // ============================================================

        console.log("========== SEARCH ==========");

        await searchBox.waitForDisplayed({
            timeout: TEST_DATA.timeouts.long
        });

        await searchBox.click();

        await searchBox.clearValue();

        await driver.pause(500);

        const searchText = TEST_DATA.product.search;

        for (const character of searchText) {

            await driver.keys([character]);

            await driver.pause(300);

        }

        console.log(
            `Search entered: ${searchText}`
        );

        await driver.pause(2500);

        // ============================================================
        // SELECT PRODUCT
        // ============================================================

        console.log(
            "========== SELECT PRODUCT =========="
        );

        const product = await $(LOCATORS.order.product);

        await product.waitForDisplayed({
            timeout: TEST_DATA.timeouts.long
        });

        console.log(
            "GarlicBread product displayed."
        );

        await product.click();

        console.log(
            "Product selected."
        );

        await driver.pause(1500);

        // ============================================================
        // CART
        // ============================================================

        console.log("========== CART ==========");

        await driver.pause(2500);

        await driver.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: {
                    pointerType: 'touch'
                },
                actions: [
                    {
                        type: 'pointerMove',
                        duration: 0,
                        x: TEST_DATA.touch.cart.x,
                        y: TEST_DATA.touch.cart.y
                    },
                    {
                        type: 'pointerDown',
                        button: 0
                    },
                    {
                        type: 'pause',
                        duration: TEST_DATA.touch.duration
                    },
                    {
                        type: 'pointerUp',
                        button: 0
                    }
                ]
            }
        ]);

        await driver.releaseActions();

        console.log("Cart tapped.");

        // ============================================================
        // PAY
        // ============================================================

        console.log("========== PAY ==========");

        await driver.pause(2000);

        await driver.performActions([
            {
                type: 'pointer',
                id: 'finger2',
                parameters: {
                    pointerType: 'touch'
                },
                actions: [
                    {
                        type: 'pointerMove',
                        duration: 0,
                        x: TEST_DATA.touch.pay.x,
                        y: TEST_DATA.touch.pay.y
                    },
                    {
                        type: 'pointerDown',
                        button: 0
                    },
                    {
                        type: 'pause',
                        duration: TEST_DATA.touch.duration
                    },
                    {
                        type: 'pointerUp',
                        button: 0
                    }
                ]
            }
        ]);

        await driver.releaseActions();

        console.log("Pay tapped.");

        // ============================================================
        // PAYMENT SCREEN
        // ============================================================

        console.log(
            "Waiting for payment screen..."
        );

        await driver.pause(
            TEST_DATA.login.uiStabilizationDelay
        );

        await driver.saveScreenshot(
            "./payment-screen.png"
        );

        console.log(
            "Payment screen screenshot saved."
        );

        // ============================================================
        // CASH PAYMENT
        // ============================================================

        console.log(
            "========== CASH PAYMENT =========="
        );

        const cash = await $(LOCATORS.order.cash);

        await cash.waitForDisplayed({
            timeout: TEST_DATA.timeouts.long
        });

        console.log(
            "Cash option displayed."
        );

        await cash.click();

        console.log("Cash clicked.");

        // ============================================================
        // CONFIRM PAYMENT
        // ============================================================

        const confirmBtn = await $(LOCATORS.order.confirm);

        await confirmBtn.waitForDisplayed({
            timeout: TEST_DATA.timeouts.long
        });

        console.log(
            "Confirm button displayed."
        );

        await confirmBtn.click();

        console.log(
            "Payment confirmed."
        );

        // ============================================================
        // RECEIPT
        // ============================================================

        console.log(
            "========== WAITING FOR PAYMENT =========="
        );

        const noReceipt = await $(
            LOCATORS.giftCard.noReceipt
        );

        await noReceipt.waitForDisplayed({
            timeout: 120000,
            interval: 1000
        });

        console.log(
            "No Receipt button displayed."
        );

        await noReceipt.click();

        console.log(
            "No Receipt selected."
        );

        // ============================================================
        // VERIFY TRANSACTION COMPLETED
        // ============================================================

        await driver.pause(5000);

        const searchBoxAgain = await $(
            LOCATORS.order.search
        );

        await searchBoxAgain.waitForDisplayed({
            timeout: TEST_DATA.timeouts.long
        });

        console.log(
            "Transaction completed successfully."
        );

    });

});