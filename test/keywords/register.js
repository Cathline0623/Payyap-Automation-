const LOCATORS = require('../locators/app.locators');
const TEST_DATA = require('../data/testData');

async function selectRandomRegister() {

    console.log("Opening register selection...");

    // Wait for register list
    const registerList = await $(LOCATORS.register.list);

    await registerList.waitForDisplayed({
        timeout: TEST_DATA.timeouts.medium
    });

    console.log("Register list opened.");

    // Get all visible register names
    const registerElements = await $$(LOCATORS.register.listItems);

    const registerNames = [];

    for (const element of registerElements) {

        if (await element.isDisplayed()) {

            const name = await element.getText();

            if (name && name.trim()) {
                registerNames.push(name.trim());
            }
        }
    }

    console.log(
        `Available registers: ${JSON.stringify(registerNames)}`
    );

    // Make sure we actually found registers
    if (registerNames.length === 0) {
        throw new Error(
            "No registers were found in the register selection list."
        );
    }

    // Pick random register
    const randomIndex =
        Math.floor(Math.random() * registerNames.length);

    const selectedRegister =
        registerNames[randomIndex];

    console.log(
        `Randomly selected register: "${selectedRegister}"`
    );

    // Search
    const search = await $(LOCATORS.register.search);

    await search.waitForDisplayed({
        timeout: TEST_DATA.timeouts.medium
    });

    await search.click();

    await search.clearValue();

    await search.setValue(selectedRegister);

    console.log(
        `Searching for register: "${selectedRegister}"`
    );

    // Verify searched result
    await browser.waitUntil(async () => {

        const results =
            await $$(LOCATORS.register.listItems);

        let visibleResults = [];

        for (const result of results) {

            if (await result.isDisplayed()) {

                const text = await result.getText();

                if (text && text.trim()) {
                    visibleResults.push(text.trim());
                }
            }
        }

        console.log(
            `Search results: ${JSON.stringify(visibleResults)}`
        );

        return (
            visibleResults.length === 1 &&
            visibleResults[0] === selectedRegister
        );

    }, {
        timeout: TEST_DATA.timeouts.long,
        interval: 500,

        timeoutMsg:
            `Register "${selectedRegister}" was not the only search result.`
    });

    console.log(
        `Verified register "${selectedRegister}" is the only search result.`
    );

    // Select it
    const register =
        await $(LOCATORS.register.byName(selectedRegister));

    await register.waitForDisplayed({
        timeout: TEST_DATA.timeouts.medium
    });

    await register.click();

    console.log(
        `Register "${selectedRegister}" selected.`
    );

    return selectedRegister;
}

module.exports = {
    selectRandomRegister
};