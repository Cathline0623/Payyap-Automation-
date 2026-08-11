const Auth = require('../keywords/auth');
const Navigation = require('../keywords/navigation');
const Warehouse = require('../keywords/warehouse');

describe('Create New Warehouse', () => {

    it('Creates a new warehouse successfully', async function () {

        this.timeout(180000);

        console.log("========== CREATE WAREHOUSE ==========");
        await Auth.login();

        await Navigation.selectTestBranch();

        await Navigation.openBranchSettings();

        const warehouseName =
            await Warehouse.createWarehouse();

        const warehouse = await $(
            `android=new UiSelector().text("${warehouseName}")`
        );

        await warehouse.waitForDisplayed({
            timeout: 20000
        });

        if (!(await warehouse.isDisplayed())) {
            throw new Error(
                `Final verification failed: ` +
                `Warehouse "${warehouseName}" is not displayed.`
            );
        }


        console.log(
            `FINAL VERIFICATION PASSED: "${warehouseName}"`
        );

        console.log(
            "========== WAREHOUSE CREATION COMPLETED =========="
        );

    });

});