const LOCATORS = require('../locators/app.locators');
const TEST_DATA = require('../data/testData');

const {
    randomAmount
} = require('../utils/randomData');


async function selectRegister() {

    // =========================================================
    // OPEN REGISTER SELECTOR
    // =========================================================

    const register = await $(LOCATORS.cash.register);

    await register.waitForDisplayed({
        timeout: TEST_DATA.timeouts.medium
    });

    console.log("Opening register selector...");

    await register.click();


    // =========================================================
    // WAIT FOR REGISTER LIST
    // =========================================================

    const registerList = await $(LOCATORS.cash.registerList);

    await registerList.waitForDisplayed({
        timeout: TEST_DATA.timeouts.long
    });

    await browser.pause(500);

    console.log("Register list opened.");


    // =========================================================
    // GET ALL AVAILABLE REGISTERS
    // =========================================================

    const registerElements = await $$(LOCATORS.cash.registerListItem);

    if (!registerElements.length) {
        throw new Error(
            "No registers were found in the register selection list."
        );
    }

    const availableRegisters = [];

    for (const element of registerElements) {

        const registerName = (
            await element.getText()
        ).trim();

        if (registerName) {
            availableRegisters.push(registerName);
        }
    }


    // Remove duplicates just in case the UI contains duplicates
    const uniqueRegisters = [
        ...new Set(availableRegisters)
    ];


    console.log(
        `Available registers: ${uniqueRegisters.join(", ")}`
    );


    if (!uniqueRegisters.length) {
        throw new Error(
            "Register list was displayed, but no register names could be read."
        );
    }


    // =========================================================
    // RANDOMLY SELECT ONE REGISTER
    // =========================================================

    const randomIndex = Math.floor(
        Math.random() * uniqueRegisters.length
    );

    const selectedRegister =
        uniqueRegisters[randomIndex];


    console.log(
        `Random register selected: "${selectedRegister}"`
    );


    // =========================================================
    // SEARCH FOR SELECTED REGISTER
    // =========================================================

    const search = await $(LOCATORS.cash.registerSearch);

    await search.waitForDisplayed({
        timeout: TEST_DATA.timeouts.medium
    });

    await search.click();

    await search.clearValue();

    await search.setValue(selectedRegister);

    console.log(
        `Searching for register: "${selectedRegister}"`
    );


    // =========================================================
    // VERIFY ONLY THE SELECTED REGISTER IS SHOWN
    // =========================================================

    await browser.waitUntil(
        async () => {

            const results = await $$(LOCATORS.cash.registerListItem);

            if (!results.length) {
                return false;
            }

            const visibleNames = [];

            for (const result of results) {

                const text = (
                    await result.getText()
                ).trim();

                if (text) {
                    visibleNames.push(text);
                }
            }

            console.log(
                `Register search results: ${visibleNames.join(", ")}`
            );

            return (
                visibleNames.length === 1 &&
                visibleNames[0] === selectedRegister
            );
        },
        {
            timeout: TEST_DATA.timeouts.long,
            interval: 500,

            timeoutMsg:
                `Register "${selectedRegister}" was not the only search result.`
        }
    );


    console.log(
        `Verified register search result: "${selectedRegister}"`
    );


    // =========================================================
    // CLICK THE REGISTER
    // =========================================================

    const selectedRegisterElement = await $(
        LOCATORS.cash.registerByName(selectedRegister)
    );

    await selectedRegisterElement.waitForDisplayed({
        timeout: TEST_DATA.timeouts.medium
    });

    await selectedRegisterElement.click();

    console.log(
        `Register "${selectedRegister}" selected.`
    );


    // =========================================================
    // SAVE REGISTER SELECTION
    // =========================================================

    const save = await $(LOCATORS.cash.registerSave);

    await save.waitForDisplayed({
        timeout: TEST_DATA.timeouts.medium
    });

    await save.waitForEnabled({
        timeout: TEST_DATA.timeouts.medium
    });

    await save.click();

    console.log(
        `Register "${selectedRegister}" selection confirmed.`
    );


    return selectedRegister;
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


    // =========================================================
    // AMOUNT
    // =========================================================

    const amountField = await $(LOCATORS.cash.amount);

    await amountField.waitForDisplayed({
        timeout: TEST_DATA.timeouts.medium
    });

    await amountField.setValue(
        String(amount)
    );

    console.log(
        `Amount entered: ${amount}`
    );


    // =========================================================
    // NOTE
    // =========================================================

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

    console.log(
        "Cash transaction saved."
    );
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
    )
    .then(() => true)
    .catch(() => false);


    if (!formClosed) {
        throw new Error(
            "Cash transaction form did not close after saving."
        );
    }


    console.log(
        "Cash transaction form closed."
    );
}


async function addCash(type = "in") {

    // =========================================================
    // OPEN CASH FORM
    // =========================================================

    const addButton = await $(LOCATORS.cash.addButton);

    await addButton.waitForDisplayed({
        timeout: TEST_DATA.timeouts.medium
    });

    await addButton.click();

    console.log(
        "Cash form opened."
    );


    // =========================================================
    // SELECT RANDOM REGISTER
    // =========================================================

    const selectedRegister =
        await selectRegister();


    // =========================================================
    // SELECT CASH TYPE
    // =========================================================

    await selectCashType(type);


    // =========================================================
    // ENTER CASH DETAILS
    // =========================================================

    const transaction =
        await enterCashDetails();


    // =========================================================
    // SAVE
    // =========================================================

    await saveCash();


    // =========================================================
    // VERIFY FORM CLOSED
    // =========================================================

    await verifyCashFormClosed();


    console.log(
        `Cash ${type} completed successfully. ` +
        `Register: ${selectedRegister}, ` +
        `Amount: ${transaction.amount}`
    );


    return {
        ...transaction,
        register: selectedRegister
    };
}


module.exports = {
    addCash
};