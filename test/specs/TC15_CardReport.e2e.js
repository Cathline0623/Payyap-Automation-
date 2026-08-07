const allure = require('@wdio/allure-reporter').default;
const LoginPage = require('../Pages/LoginPage');
const HomePage = require('../Pages/HomePage');
const CardReportPage = require('../Pages/CardReportPage');

const verifyMail = require('../utils/gmailVerify');
const BranchPage = require('../Pages/BranchPage');

const { loginData,emailData,branchData,cardReportData} = require('../Testdata/Data');

describe('Payyap Mobile', () => {

    beforeEach(async () => {
    await driver.terminateApp('ch.payyap.smartpos');
    await driver.activateApp('ch.payyap.smartpos');
    });

    it('Card Report sent via mail', async function () {

        this.timeout(180000); 

       await LoginPage.clickAllowPermission();

        await LoginPage.login(
            loginData.email,
            loginData.password
        );

        await HomePage.waitForHomeScreen();
        await HomePage.Navigation();
        await BranchPage.selectBranch(branchData);
        await CardReportPage.generateCardTransactionReport(cardReportData);
        await CardReportPage.enterEmail(emailData);
        await CardReportPage.verifyReportSentSuccessfully();
       
    
        const mailVerified = await verifyMail(
            emailData.email,
            // "Inventory Report",
            // "Report has been generated",
            "The report sent successfully"
        );

        // expect(mailVerified).toBe(true);
    



        
    });
});