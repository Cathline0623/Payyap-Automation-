const allure = require('@wdio/allure-reporter').default;
const LoginPage = require('../Pages/LoginPage');
const HomePage = require('../Pages/HomePage');
const TakeawayPage = require('../Pages/TakeawayPage');
const BranchPage = require('../Pages/BranchPage');

const { loginData,TakeawayData,branchData } = require('../Testdata/Data');

describe('Payyap Mobile', () => {

    beforeEach(async () => {

    await driver.terminateApp('ch.payyap.smartpos');

    // await driver.execute('mobile: shell', {
    //     command: 'pm',
    //     args: ['clear', 'ch.payyap.smartpos']
    // });

    await driver.activateApp('ch.payyap.smartpos');

    await driver.pause(2000);

    });

    it('Create Restaurant Sale', async function () {

       this.timeout(180000); 

       await LoginPage.clickAllowPermission();

        await LoginPage.login(
            loginData.email,
            loginData.password
        );

        await HomePage.waitForHomeScreen();
        await HomePage.Navigation();
        await BranchPage.selectBranch(branchData);
        await TakeawayPage.unlinkAndSelectRegister();
        await TakeawayPage.openTakeaway();


    });
});