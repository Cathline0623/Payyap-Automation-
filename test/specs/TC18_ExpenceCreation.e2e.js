const allure = require('@wdio/allure-reporter').default;
const LoginPage = require('../Pages/LoginPage');
const HomePage = require('../Pages/HomePage');
const ExpensePage = require('../Pages/ExpensePage');
const BranchPage = require('../Pages/BranchPage');

const { loginData,expenseData,branchData } = require('../Testdata/Data');

describe('Payyap Mobile', () => {

    beforeEach(async () => {
    await driver.terminateApp('ch.payyap.smartpos');
    await driver.activateApp('ch.payyap.smartpos');
    });

    it('Create Expense', async function () {

        this.timeout(180000); 

       await LoginPage.clickAllowPermission();

        await LoginPage.login(
            loginData.email,
            loginData.password
        );

        await HomePage.waitForHomeScreen();
        await HomePage.Navigation();
        await BranchPage.selectBranch(branchData);
        await ExpensePage.createExpense(expenseData);
    
    });

});