const LOCATORS = require('../locators/app.locators');
const TEST_DATA = require('../data/testData');
const { randomRegisterName } = require('../utils/randomData');

describe('Create New Register', () => {

    it('Creates a new register successfully', async function () {

        this.timeout(180000);

        console.log("========== LOGIN ==========");

        const email = await $(LOCATORS.login.email);

        await email.waitForDisplayed({
            timeout: 15000
        });

        await email.setValue(
            TEST_DATA.users.cathline.email
        );

        const password = await $(LOCATORS.login.password);

        await password.setValue(
            TEST_DATA.users.cathline.password
        );

        const signIn = await $(LOCATORS.login.signIn);

        await signIn.click();

        const menuButton = await $(LOCATORS.navigation.menu);

        await menuButton.waitForDisplayed({
            timeout: TEST_DATA.login.dashboardLoadTimeout
        });

        console.log("Logged in.");

        console.log("Opening sidebar...");

        await menuButton.click();

        const registers = await $(LOCATORS.navigation.registers);

        await registers.waitForDisplayed({
            timeout: TEST_DATA.timeouts.medium
        });

        await registers.click();

        console.log("Registers opened.");

        const addButton = await $(LOCATORS.register.add);

        await addButton.waitForDisplayed({
            timeout: TEST_DATA.timeouts.medium
        });

        await addButton.click();

        const newRegister = await $(LOCATORS.register.newRegister);

        await newRegister.waitForDisplayed({
            timeout: TEST_DATA.timeouts.medium
        });

        await newRegister.click();

        console.log("New Register selected.");

        const registerName = await $(LOCATORS.register.registerName);

        await registerName.waitForDisplayed({
            timeout: TEST_DATA.timeouts.medium
        });

        const randomName = randomRegisterName();

        await registerName.setValue(randomName);

        console.log(`Register name: ${randomName}`);

        const warehouseField = await $(LOCATORS.register.warehouseField);

        await warehouseField.waitForDisplayed({
            timeout: TEST_DATA.timeouts.medium
        });

        await warehouseField.click();

        const warehouse = await $(LOCATORS.register.warehouseListItem);

        await warehouse.waitForDisplayed({
            timeout: TEST_DATA.timeouts.medium
        });

        await warehouse.click();

        console.log("Warehouse selected.");

        const saveWarehouse = await $(LOCATORS.register.saveWarehouse);

        await saveWarehouse.waitForDisplayed({
            timeout: TEST_DATA.timeouts.medium
        });

        await saveWarehouse.click();

        const saveRegister = await $(LOCATORS.register.createRegister);

        await saveRegister.waitForDisplayed({
            timeout: TEST_DATA.timeouts.medium
        });

        await saveRegister.click();

        console.log("Register created.");

        const pageTitle = await $(LOCATORS.register.pageTitle);

        await pageTitle.waitForDisplayed({
            timeout: TEST_DATA.timeouts.long
        });

        console.log("Flow completed successfully.");

    });

});