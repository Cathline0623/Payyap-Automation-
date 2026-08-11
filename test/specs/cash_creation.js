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

        await Auth.login();
        await Navigation.selectTestBranch();
        await Navigation.openBranchSettings();
        await Navigation.openCashInOut();
        await Cash.addCash("in");
        await Cash.addCash("out");

        console.log(
            "========== CASH IN/OUT COMPLETED =========="
        );

    });

});