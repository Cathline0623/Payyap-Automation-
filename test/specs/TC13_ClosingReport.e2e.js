const allure = require('@wdio/allure-reporter').default;
const LoginPage = require('../Pages/LoginPage');
const HomePage = require('../Pages/HomePage');
const RegisterPage = require('../Pages/RegisterPage');
const BranchPage = require('../Pages/BranchPage');
const ClosingReportPage = require('../Pages/ClosingReportPage');

const verifyMail = require('../utils/gmailVerify');


const { loginData,emailData,branchData } = require('../Testdata/Data');

describe('Payyap Mobile', () => {

    beforeEach(async () => {
    await driver.terminateApp('ch.payyap.smartpos');
    await driver.activateApp('ch.payyap.smartpos');
    });

    it('Closing Report via mail', async function () {

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
        await ClosingReportPage.openClosingReport();
        await ClosingReportPage.enterEmail(emailData);
    
        const mailVerified = await verifyMail(
            emailData.email,
            // "Inventory Report",
            // "Report has been generated",
            "The report sent successfully"
        );

        // const mailResult = await verifyMail(
        //     emailData.email,
        //     "Closing Report",
        //     "The report sent successfully"
        // );

        // expect(mailResult.mailVerified).toBe(true);

        // console.log("Excel File:", mailResult.filePath);

        // console.log("Excel Data:", mailResult.excelData);

    });
});