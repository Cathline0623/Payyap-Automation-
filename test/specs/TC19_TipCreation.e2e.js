const allure = require('@wdio/allure-reporter').default;
const LoginPage = require('../Pages/LoginPage');
const HomePage = require('../Pages/HomePage');
const TipPage = require('../Pages/TipPage');
const RetailSalesPage = require('../Pages/RetailSalesPage');
const BranchPage = require('../Pages/BranchPage');

const { loginData,tipData,retailSalesData ,branchData} = require('../Testdata/Data');

describe('Payyap Mobile', () => {

    beforeEach(async () => {
    await driver.terminateApp('ch.payyap.smartpos');
    await driver.activateApp('ch.payyap.smartpos');
    });

    it('Create Tip', async function () {

        this.timeout(180000); 

       await LoginPage.clickAllowPermission();

        await LoginPage.login(
            loginData.email,
            loginData.password
        );

        await HomePage.waitForHomeScreen();
        await HomePage.Navigation();
        await BranchPage.selectBranch(branchData);
        await TipPage.createTip(tipData);
        await RetailSalesPage.createRetailSale(retailSalesData);
    });

});