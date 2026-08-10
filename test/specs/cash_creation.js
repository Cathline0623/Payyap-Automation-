const Auth = require('../keywords/auth');
const Navigation = require('../keywords/navigation');
const Cash = require('../keywords/cashinout');
const TEST_DATA = require('../data/testData');


describe('Cash In/Out', () => {

    it('Creates Cash In and Cash Out', async function () {

        this.timeout(
            TEST_DATA.login.dashboardLoadTimeout * 5
        );

        console.log("========== CASH IN/OUT ==========");

        // LOGIN
        await Auth.login();

        // SELECT TESTING BRANCH
        await Navigation.selectTestBranch();

        // OPEN BRANCH SETTINGS
        await Navigation.openBranchSettings();

        // OPEN CASH IN/OUT
        await Navigation.openCashInOut();

        // CASH IN
        await Cash.addCash("in");

        // CASH OUT
        await Cash.addCash("out");

        console.log(
            "========== CASH IN/OUT COMPLETED =========="
        );

    });

});