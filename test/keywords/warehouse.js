const LOCATORS = require('../locators/app.locators');
const TEST_DATA = require('../data/testData');

const {
    randomWarehouseName,
    randomEmail
} = require('../utils/randomData');


async function createWarehouse() {

    const warehouses = await $(LOCATORS.navigation.warehouses);

    await warehouses.waitForDisplayed({
        timeout: TEST_DATA.timeouts.medium
    });

    await warehouses.click();

    console.log("Warehouses opened.");

    const add = await $(LOCATORS.warehouse.add);

    await add.waitForDisplayed({
        timeout: TEST_DATA.timeouts.medium
    });

    await add.click();

    console.log("Add Warehouse form opened.");

    const warehouseName = randomWarehouseName();

    const name = await $(LOCATORS.warehouse.name);

    await name.waitForDisplayed({
        timeout: TEST_DATA.timeouts.medium
    });

    await name.setValue(warehouseName);

    const enteredName = await name.getAttribute("text");

    if (enteredName !== warehouseName) {
        throw new Error(
            `Warehouse name was not entered correctly. ` +
            `Expected: "${warehouseName}", Actual: "${enteredName}"`
        );
    }

    console.log(`Warehouse Name: ${warehouseName}`);

    const address = await $(LOCATORS.warehouse.address);

    await address.waitForDisplayed({
        timeout: TEST_DATA.timeouts.medium
    });

    await address.setValue("Automation Address");

    const enteredAddress = await address.getAttribute("text");

    if (enteredAddress !== "Automation Address") {
        throw new Error(
            `Warehouse address was not entered correctly. ` +
            `Actual: "${enteredAddress}"`
        );
    }

    console.log("Address entered.");

    const email = randomEmail();

    const emailField = await $(LOCATORS.warehouse.email);

    await emailField.waitForDisplayed({
        timeout: TEST_DATA.timeouts.medium
    });

    await emailField.setValue(email);

    const enteredEmail = await emailField.getAttribute("text");

    if (enteredEmail !== email) {
        throw new Error(
            `Warehouse email was not entered correctly. ` +
            `Expected: "${email}", Actual: "${enteredEmail}"`
        );
    }

    console.log(`Email: ${email}`);

    const phone = await $(LOCATORS.warehouse.phone);

    await phone.waitForDisplayed({
        timeout: TEST_DATA.timeouts.medium
    });

    await phone.setValue(TEST_DATA.warehouse.phone);

    const enteredPhone = await phone.getAttribute("text");

    if (enteredPhone !== TEST_DATA.warehouse.phone) {
        throw new Error(
            `Warehouse phone was not entered correctly. ` +
            `Expected: "${TEST_DATA.warehouse.phone}", Actual: "${enteredPhone}"`
        );
    }

    console.log(`Phone: ${TEST_DATA.warehouse.phone}`);

    const save = await $(LOCATORS.warehouse.save);

    await save.waitForEnabled({
        timeout: TEST_DATA.timeouts.medium
    });

    await save.click();

    console.log("Save clicked.");

    await browser.waitUntil(
        async () => {
            return !(await name.isDisplayed().catch(() => false));
        },
        {
            timeout: TEST_DATA.timeouts.long,
            interval: 1000,
            timeoutMsg:
                "Warehouse form did not close after clicking Save."
        }
    );

    console.log("Warehouse form closed.");

    const createdWarehouse = await $(
        `android=new UiSelector().text("${warehouseName}")`
    );

    await createdWarehouse.waitForDisplayed({
        timeout: TEST_DATA.timeouts.long
    });

    if (!(await createdWarehouse.isDisplayed())) {
        throw new Error(
            `Created warehouse "${warehouseName}" was not found.`
        );
    }

    console.log(
        `VERIFIED: Warehouse "${warehouseName}" exists.`
    );


    return warehouseName;
}


module.exports = {
    createWarehouse
};