const LOCATORS = require('../locators/app.locators');
const TEST_DATA = require('../data/testData');

const {
    randomAmount
} = require('../utils/randomData');


async function selectRegister() {

    await allure.step("Select Default Register", async () => {

        const register = await $(LOCATORS.cash.register);

        await register.waitForDisplayed({
            timeout: TEST_DATA.timeouts.medium
        });

        await register.click();

        console.log("Register selector opened.");

        // The app already has a register selected by default.
        // Accept the currently selected register and save it.

        const save = await $(LOCATORS.cash.registerSave);

        await save.waitForDisplayed({
            timeout: TEST_DATA.timeouts.medium
        });

        await save.waitForEnabled({
            timeout: TEST_DATA.timeouts.medium
        });

        await save.click();

        console.log("Default register selected and saved.");
    });
}

async function selectCashType(type) {

    const selector =
        type === "out"
            ? LOCATORS.cash.cashOut
            : LOCATORS.cash.cashIn;

    const option = await $(selector);

    await option.waitForDisplayed({
        timeout: TEST_DATA.timeouts.medium
    });

    await option.click();

    console.log(`Cash ${type} selected.`);
}


async function enterCashDetails() {

    const amount = randomAmount(
        TEST_DATA.cash.minAmount,
        TEST_DATA.cash.maxAmount
    );

    const amountField = await $(LOCATORS.cash.amount);

    await amountField.waitForDisplayed({
        timeout: TEST_DATA.timeouts.medium
    });

    await amountField.setValue(
        String(amount)
    );

    console.log(`Amount entered: ${amount}`);

    const noteField = await $(LOCATORS.cash.note);

    await noteField.waitForDisplayed({
        timeout: TEST_DATA.timeouts.medium
    });

    await noteField.setValue(
        TEST_DATA.cash.note
    );

    console.log(
        `Note entered: ${TEST_DATA.cash.note}`
    );

    return {
        amount
    };
}


async function saveCash() {

    const save = await $(LOCATORS.cash.save);

    await save.waitForEnabled({
        timeout: TEST_DATA.timeouts.medium
    });

    await save.click();

    console.log("Cash transaction saved.");
}


async function verifyCashFormClosed() {

    const amountField = await $(LOCATORS.cash.amount);

    const formClosed = await browser.waitUntil(
        async () => {

            try {
                return !(await amountField.isDisplayed());
            } catch {
                return true;
            }

        },
        {
            timeout: TEST_DATA.timeouts.medium,
            interval: 500
        }
    ).then(() => true)
     .catch(() => false);

    if (!formClosed) {
        throw new Error(
            "Cash transaction form did not close after saving."
        );
    }

    console.log("Cash transaction form closed.");
}


async function addCash(type = "in") {

    const addButton = await $(LOCATORS.cash.addButton);

    await addButton.waitForDisplayed({
        timeout: TEST_DATA.timeouts.medium
    });

    await addButton.click();

    console.log("Cash form opened.");

    await selectRegister();

    await selectCashType(type);

    const transaction = await enterCashDetails();

    await saveCash();

    await verifyCashFormClosed();

    console.log(
        `Cash ${type} completed successfully. Amount: ${transaction.amount}`
    );

    return transaction;
}


module.exports = {
    addCash
};