const Auth = require('../keywords/auth');
const Navigation = require('../keywords/navigation');
const Tables = require('../keywords/tables');
const TEST_DATA = require('../data/testData');

describe('Table Creation', () => {

    it('Creates single and multiple tables successfully', async function () {

        this.timeout(TEST_DATA.login.dashboardLoadTimeout * 5);

        console.log("========== TABLE CREATION ==========");

        // Login
        await Auth.login();

        // Branch
        await Navigation.selectTestBranch();

        // Branch Settings
        await Navigation.openBranchSettings();

        // Restaurant
        await Navigation.openRestaurant();

        // Tables
        await Navigation.openTables();

        // Create Single Table
        await Tables.createSingleTable(true);

        // Create Multiple Tables
        await Tables.createMultipleTables(true);

        console.log("========== TABLE CREATION COMPLETED ==========");

    });

});