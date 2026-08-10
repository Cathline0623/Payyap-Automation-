const LOCATORS = require('../locators/app.locators');
const TEST_DATA = require('../data/testData');

const {
    randomWarehouseName,
    randomEmail
} = require('../utils/randomData');

async function createWarehouse() {

    // Open Warehouses

    const warehouses = await $(LOCATORS.navigation.warehouses);

    await warehouses.waitForDisplayed({
        timeout: TEST_DATA.timeouts.medium
    });

    await warehouses.click();

    console.log("Warehouses opened.");

    // Add Warehouse

    const add = await $(LOCATORS.warehouse.add);

    await add.waitForDisplayed({
        timeout: TEST_DATA.timeouts.medium
    });

    await add.click();

    // Warehouse Name

    const warehouseName = randomWarehouseName();

    const name = await $(LOCATORS.warehouse.name);

    await name.waitForDisplayed({
        timeout: TEST_DATA.timeouts.medium
    });

    await name.setValue(warehouseName);

    if (!(await name.getText())) {
        throw new Error("Warehouse name was not entered.");
    }

    console.log(`Warehouse Name: ${warehouseName}`);

    // Address

    const address = await $(LOCATORS.warehouse.address);

    await address.setValue("Automation Address");

    if (!(await address.getText())) {
        throw new Error("Warehouse address was not entered.");
    }

    console.log("Address entered.");

    // Email

    const email = randomEmail();

    const emailField = await $(LOCATORS.warehouse.email);

    await emailField.setValue(email);

    if (!(await emailField.getText())) {
        throw new Error("Warehouse email was not entered.");
    }

    console.log(`Email: ${email}`);

    // Phone

    const phone = await $(LOCATORS.warehouse.phone);

    await phone.setValue(TEST_DATA.warehouse.phone);

    if (!(await phone.getText())) {
        throw new Error("Warehouse phone was not entered.");
    }

    console.log(`Phone: ${TEST_DATA.warehouse.phone}`);

    // Save

    const save = await $(LOCATORS.warehouse.save);

    await save.waitForEnabled({
        timeout: TEST_DATA.timeouts.medium
    });

    await save.click();

    console.log("Warehouse created successfully.");

    return warehouseName;

}

module.exports = {
    createWarehouse
};