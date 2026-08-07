const allure = require('@wdio/allure-reporter').default;
const LoginPage = require('../Pages/LoginPage');
const HomePage = require('../Pages/HomePage');
const RegisterPage = require('../Pages/RegisterPage');
const BranchPage = require('../Pages/BranchPage');

const { loginData,branchData } = require('../Testdata/Data');

describe('Payyap Mobile', () => {

    beforeEach(async () => {
    await driver.terminateApp('ch.payyap.smartpos');
    await driver.activateApp('ch.payyap.smartpos');
    });

    it('Register close & reopen', async function () {

        this.timeout(180000); 

       await LoginPage.clickAllowPermission();

        await LoginPage.login(
            loginData.email,
            loginData.password
        );

        await HomePage.waitForHomeScreen();
        await HomePage.Navigation();
        await BranchPage.selectBranch(branchData);
        await RegisterPage.registerclose();
        await RegisterPage.registerOpen();
    


    });
});