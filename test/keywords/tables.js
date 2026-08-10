const LOCATORS = require('../locators/app.locators');
const TEST_DATA = require('../data/testData');
const {
    randomTableName,
    randomPrefix
} = require('../utils/randomData');

async function clickAddButton() {

    const addButton = await $(LOCATORS.tables.addButton);

    await addButton.waitForDisplayed({
        timeout: TEST_DATA.timeouts.medium
    });

    await addButton.click();

    console.log("Add button clicked.");

}

async function setActive(active) {

    const toggle = await $(LOCATORS.tables.activeToggle);

    if (!(await toggle.isExisting())) {
        return;
    }

    const checked = await toggle.getAttribute("checked");

    if ((checked === "true") !== active) {
        await toggle.click();
    }

    console.log(`Active: ${active}`);

}

async function createSingleTable(active = true) {

    const tableName = randomTableName();

    await clickAddButton();

    const single = await $(LOCATORS.tables.singleTable);

    await single.waitForDisplayed({
        timeout: TEST_DATA.timeouts.medium
    });

    await single.click();

    console.log("Single Table selected.");

    await setActive(active);

    const nameField = await $(LOCATORS.tables.tableName);

    await nameField.waitForDisplayed({
        timeout: TEST_DATA.timeouts.medium
    });

    await nameField.setValue(tableName);

    if (!(await nameField.getText())) {
        throw new Error("Table name was not entered.");
    }

    console.log(`Table name: ${tableName}`);

    const save = await $(LOCATORS.tables.save);

    await save.waitForEnabled({
        timeout: TEST_DATA.timeouts.medium
    });

    await save.click();

    console.log("Single table created.");

    return tableName;

}

async function createMultipleTables(active = true) {

    const prefix = randomPrefix();

    const start = TEST_DATA.tables.start;

    const end =
        Math.floor(
            Math.random() *
            (TEST_DATA.tables.maxEnd - TEST_DATA.tables.minEnd + 1)
        ) + TEST_DATA.tables.minEnd;

    await clickAddButton();

    const multiple = await $(LOCATORS.tables.multipleTable);

    await multiple.waitForDisplayed({
        timeout: TEST_DATA.timeouts.medium
    });

    await multiple.click();

    console.log("Multiple Table selected.");

    const prefixField = await $(LOCATORS.tables.tableName);

    await prefixField.waitForDisplayed({
        timeout: TEST_DATA.timeouts.medium
    });

    await setActive(active);

    await prefixField.setValue(prefix);

    if (!(await prefixField.getText())) {
        throw new Error("Table prefix was not entered.");
    }

    console.log(`Prefix: ${prefix}`);

    const startField = await $(LOCATORS.tables.start);

    await startField.setValue(String(start));

    const endField = await $(LOCATORS.tables.end);

    await endField.setValue(String(end));

    console.log(`Range: ${start}-${end}`);

    const apply = await $(LOCATORS.tables.apply);

    await apply.waitForEnabled({
        timeout: TEST_DATA.timeouts.medium
    });

    await apply.click();

    console.log(`Created ${prefix}${start}-${end}`);

    return prefix;

}

module.exports = {
    createSingleTable,
    createMultipleTables
};