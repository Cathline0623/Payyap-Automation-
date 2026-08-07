const allure = require('@wdio/allure-reporter').default;
const LoginPage = require('../Pages/LoginPage');
const HomePage = require('../Pages/HomePage');


const { loginData,productData} = require('../Testdata/Data');

describe('Payyap Mobile', () => {

    beforeEach(async () => {
    await driver.terminateApp('ch.payyap.smartpos');
    await driver.activateApp('ch.payyap.smartpos');
    });

    it('Login and Open Product Filter', async function () {

        this.timeout(180000); 

       await LoginPage.clickAllowPermission();

        await LoginPage.login(
            loginData.email,
            loginData.password
        );

        // await HomePage.openNavigationDrawer();
        // await HomePage.clickBack();
        // await HomePage.verifyToolbarTitle(productData.toolbarTitle);
        await HomePage.waitForHomeScreen();
        await HomePage.openNavigation();
    
    });

});