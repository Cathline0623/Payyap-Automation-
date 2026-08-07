const allure = require('@wdio/allure-reporter').default;
const LoginPage = require('../Pages/LoginPage');
const HomePage = require('../Pages/HomePage');
const DepotsProductPage = require('../Pages/DepotsProductPage');

const { loginData,depotproductData} = require('../Testdata/Data');

describe('Payyap Mobile', () => {

    beforeEach(async () => {
    await driver.terminateApp('ch.payyap.smartpos');
    await driver.activateApp('ch.payyap.smartpos');
    });

    it('Create depot product', async function () {

        // this.timeout(180000); 

       await LoginPage.clickAllowPermission();

        await LoginPage.login(
            loginData.email,
            loginData.password
        );

        await HomePage.waitForHomeScreen();
        await HomePage.openNavigation();

        // await DepotsProductPage.openFilter();
        await DepotsProductPage.createDepotProduct(depotproductData);
        // await DepotsProductPage.verifyCreatedProduct(depotproductData);
    
    });

});


















