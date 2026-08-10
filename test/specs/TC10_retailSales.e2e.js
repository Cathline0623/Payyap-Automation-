const allure = require('@wdio/allure-reporter').default;
const LoginPage = require('../Pages/LoginPage');
const HomePage = require('../Pages/HomePage');
const RetailSalesPage = require('../Pages/RetailSalesPage');
const BranchPage = require('../Pages/BranchPage');

const { loginData,retailSalesData,branchData } = require('../Testdata/Data');

describe('Payyap Mobile', () => {

    beforeEach(async () => {
    await driver.terminateApp('ch.payyap.smartpos');
    await driver.activateApp('ch.payyap.smartpos');
    });

    it('Create Retail Sale', async function () {

       this.timeout(180000); 

       await LoginPage.clickAllowPermission();

        await LoginPage.login(
            loginData.email,
            loginData.password
        );

        await HomePage.waitForHomeScreen();
        await HomePage.Navigation();
        await BranchPage.selectBranch(branchData);
        // await RetailSalesPage.createRetailSale(retailSalesData);
        // await RetailSalesPage.applyDiscount(retailSalesData);

        //Cash:
        // await RetailSalesPage.CashPayment(retailSalesData);
        // await RetailSalesPage.applyTipsAndConfirm(retailSalesData);
     
        //Giftcard:
        // await RetailSalesPage.payWithGiftCard(retailSalesData);

        //Invoice:
        // await RetailSalesPage.payWithInvoice();

        //split:
        // await RetailSalesPage.split(retailSalesData);

        //Transaction:
        // await RetailSalesPage.transaction(retailSalesData);

        await RetailSalesPage.createRetailSale(retailSalesData);
        await RetailSalesPage.processDiscountNotes(retailSalesData);
        await RetailSalesPage.processPayment(retailSalesData);
        await RetailSalesPage.processTips(retailSalesData);
        await RetailSalesPage.transaction(retailSalesData);
        


    });

});