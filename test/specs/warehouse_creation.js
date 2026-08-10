const Auth = require('../keywords/auth');
const Navigation = require('../keywords/navigation');
const Warehouse = require('../keywords/warehouse');

describe('Create New Register', () => {

    it('Creates a new register successfully', async function () {

        this.timeout(180000);

        await Auth.login();

await Navigation.selectTestBranch();

await Navigation.openBranchSettings();

const randomName = await Warehouse.createWarehouse();

        await browser.waitUntil(async () => {

            const warehouse = await $(`android=new UiSelector().text("${randomName}")`);

            return await warehouse.isDisplayed();

        }, {

            timeout: 20000,
            interval: 1000

        });

        console.log("Flow completed successfully.");

    });

});