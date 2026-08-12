const LOCATORS = require('../locators/app.locators');
const TEST_DATA = require('../data/testData');

const {
    randomAmount
} = require('../utils/randomData');


// ============================================================
// SELECT REGISTER
// ============================================================

async function selectRegister() {

    // ========================================================
    // OPEN REGISTER SELECTOR
    // ========================================================

    const register = await $(LOCATORS.cash.register);

    await register.waitForDisplayed({
        timeout: TEST_DATA.timeouts.medium
    });

    console.log("Opening register selector...");

    await register.click();


    // ========================================================
    // WAIT FOR REGISTER LIST
    // ========================================================

    const registerList = await $(LOCATORS.cash.registerList);

    await registerList.waitForDisplayed({
        timeout: TEST_DATA.timeouts.long
    });

    await browser.pause(500);

    console.log("Register list opened.");


    // ========================================================
    // GET AVAILABLE REGISTERS
    // ========================================================

    const registerElements =
        await $$(LOCATORS.cash.registerListItem);

    if (!registerElements.length) {
        throw new Error(
            "No registers were found in the register selection list."
        );
    }

    const availableRegisters = [];

    for (const element of registerElements) {

        try {

            if (!(await element.isDisplayed())) {
                continue;
            }

            const registerName =
                (await element.getText()).trim();

            if (registerName) {
                availableRegisters.push(registerName);
            }

        } catch {
            // Ignore stale/hidden elements
        }
    }


    // ========================================================
    // REMOVE DUPLICATES
    // ========================================================

    const uniqueRegisters = [
        ...new Set(availableRegisters)
    ];

    if (!uniqueRegisters.length) {
        throw new Error(
            "Register list was displayed, but no visible register names were found."
        );
    }

    console.log(
        `Available registers: ${uniqueRegisters.join(", ")}`
    );


    // ========================================================
    // RANDOMLY SELECT REGISTER
    // ========================================================

    const randomIndex =
        Math.floor(
            Math.random() * uniqueRegisters.length
        );

    const selectedRegister =
        uniqueRegisters[randomIndex];

    console.log(
        `Random register selected: "${selectedRegister}"`
    );


    // ========================================================
    // SEARCH REGISTER
    // ========================================================

    const search =
        await $(LOCATORS.cash.registerSearch);

    await search.waitForDisplayed({
        timeout: TEST_DATA.timeouts.medium
    });

    await search.click();

    await browser.pause(500);

    await search.clearValue();

    await browser.pause(300);


    // ========================================================
    // TYPE REGISTER NAME
    // ========================================================

    for (const character of selectedRegister) {

        await driver.keys([character]);

        await browser.pause(100);
    }

    console.log(
        `Searching for register: "${selectedRegister}"`
    );


    // ========================================================
    // PRESS DONE
    // ========================================================

    await driver.keys(['Enter']);

    console.log(
        "Done pressed. Waiting for search results..."
    );

    await browser.pause(1500);


    // ========================================================
    // FIND EXACT RESULT INSIDE RECYCLERVIEW
    // ========================================================
    //
    // Appium Inspector showed:
    //
    // rvItems
    //   └── llRoot
    //        ├── ImageView
    //        └── tvName
    //
    // We therefore scope the search to rvItems.
    //
    // We do NOT search globally for tvName because Appium
    // can expose duplicate TextView elements for the same
    // visual result.
    // ========================================================

    const matchingRows = await $$(
        `//androidx.recyclerview.widget.RecyclerView` +
        `[@resource-id="ch.payyap.smartpos:id/rvItems"]` +
        `//android.widget.LinearLayout` +
        `[@resource-id="ch.payyap.smartpos:id/llRoot"]` +
        `//android.widget.TextView` +
        `[@resource-id="ch.payyap.smartpos:id/tvName"` +
        ` and @text="${selectedRegister}"]` +
        `/..`
    );


    // ========================================================
    // WAIT UNTIL EXACT RESULT APPEARS
    // ========================================================

    await browser.waitUntil(
        async () => {

            try {

                const rows = await $$(
                    `//androidx.recyclerview.widget.RecyclerView` +
                    `[@resource-id="ch.payyap.smartpos:id/rvItems"]` +
                    `//android.widget.LinearLayout` +
                    `[@resource-id="ch.payyap.smartpos:id/llRoot"]` +
                    `//android.widget.TextView` +
                    `[@resource-id="ch.payyap.smartpos:id/tvName"` +
                    ` and @text="${selectedRegister}"]` +
                    `/..`
                );

                for (const row of rows) {

                    try {

                        if (await row.isDisplayed()) {
                            return true;
                        }

                    } catch {
                        // Ignore stale row
                    }
                }

                return false;

            } catch {

                return false;
            }

        },
        {
            timeout: TEST_DATA.timeouts.long,
            interval: 500,

            timeoutMsg:
                `Register "${selectedRegister}" did not appear in search results.`
        }
    );


    // ========================================================
    // GET VISIBLE EXACT MATCHES
    // ========================================================

    const exactMatches = [];

    const currentRows = await $$(
        `//androidx.recyclerview.widget.RecyclerView` +
        `[@resource-id="ch.payyap.smartpos:id/rvItems"]` +
        `//android.widget.LinearLayout` +
        `[@resource-id="ch.payyap.smartpos:id/llRoot"]` +
        `//android.widget.TextView` +
        `[@resource-id="ch.payyap.smartpos:id/tvName"` +
        ` and @text="${selectedRegister}"]` +
        `/..`
    );

    for (const row of currentRows) {

        try {

            if (await row.isDisplayed()) {
                exactMatches.push(row);
            }

        } catch {
            // Ignore stale rows
        }
    }


    // ========================================================
    // VERIFY EXACTLY ONE RESULT
    // ========================================================

    if (exactMatches.length === 0) {

        throw new Error(
            `Register "${selectedRegister}" was not found in the search results.`
        );
    }

    if (exactMatches.length > 1) {

        throw new Error(
            `Register "${selectedRegister}" was not the only search result. ` +
            `Found ${exactMatches.length} exact visible matches inside rvItems.`
        );
    }

    console.log(
        `Exactly one search result found for "${selectedRegister}".`
    );


    // ========================================================
    // SELECT REGISTER ROW
    // ========================================================

    const selectedRegisterRow =
        exactMatches[0];

    await selectedRegisterRow.waitForDisplayed({
        timeout: TEST_DATA.timeouts.medium
    });

    console.log(
        `Selecting register "${selectedRegister}"...`
    );

    await selectedRegisterRow.click();

    console.log(
        `Register "${selectedRegister}" clicked.`
    );


    // ========================================================
    // WAIT FOR SAVE BUTTON
    // ========================================================

    const save =
        await $(LOCATORS.cash.registerSave);

    await save.waitForDisplayed({
        timeout: TEST_DATA.timeouts.long
    });

    await save.waitForEnabled({
        timeout: TEST_DATA.timeouts.medium
    });

    console.log(
        `Register "${selectedRegister}" selected successfully.`
    );


    // ========================================================
    // CONFIRM REGISTER
    // ========================================================

    await save.click();

    console.log(
        `Register "${selectedRegister}" selection confirmed.`
    );


    return selectedRegister;
}


// ============================================================
// SELECT CASH TYPE
// ============================================================

async function selectCashType(type) {

    const selector =
        type === "out"
            ? LOCATORS.cash.cashOut
            : LOCATORS.cash.cashIn;

    const option =
        await $(selector);

    await option.waitForDisplayed({
        timeout: TEST_DATA.timeouts.medium
    });

    await option.click();

    console.log(
        `Cash ${type} selected.`
    );
}


// ============================================================
// ENTER CASH DETAILS
// ============================================================

async function enterCashDetails() {

    const amount =
        randomAmount(
            TEST_DATA.cash.minAmount,
            TEST_DATA.cash.maxAmount
        );

    const amountField =
        await $(LOCATORS.cash.amount);

    await amountField.waitForDisplayed({
        timeout: TEST_DATA.timeouts.medium
    });

    await amountField.setValue(
        String(amount)
    );

    console.log(
        `Amount entered: ${amount}`
    );


    const noteField =
        await $(LOCATORS.cash.note);

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


// ============================================================
// SAVE CASH TRANSACTION
// ============================================================

async function saveCash() {

    const save =
        await $(LOCATORS.cash.save);

    await save.waitForEnabled({
        timeout: TEST_DATA.timeouts.medium
    });

    await save.click();

    console.log(
        "Cash transaction saved."
    );
}


// ============================================================
// VERIFY CASH FORM CLOSED
// ============================================================

async function verifyCashFormClosed() {

    const amountField =
        await $(LOCATORS.cash.amount);

    const formClosed =
        await browser.waitUntil(
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


// ============================================================
// ADD CASH
// ============================================================

async function addCash(type = "in") {

    const addButton =
        await $(LOCATORS.cash.addButton);

    await addButton.waitForDisplayed({
        timeout: TEST_DATA.timeouts.medium
    });

    await addButton.click();

    console.log(
        "Cash form opened."
    );


    // ========================================================
    // SELECT REGISTER
    // ========================================================

    const selectedRegister =
        await selectRegister();


    // ========================================================
    // SELECT CASH TYPE
    // ========================================================

    await selectCashType(type);


    // ========================================================
    // ENTER AMOUNT + NOTE
    // ========================================================

    const transaction =
        await enterCashDetails();


    // ========================================================
    // SAVE
    // ========================================================

    await saveCash();


    // ========================================================
    // VERIFY FORM CLOSED
    // ========================================================

    await verifyCashFormClosed();


    // ========================================================
    // COMPLETE
    // ========================================================

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


// ============================================================
// EXPORT
// ============================================================

module.exports = {
    addCash
};