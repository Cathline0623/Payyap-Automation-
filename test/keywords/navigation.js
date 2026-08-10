const LOCATORS = require('../locators/app.locators');
const TEST_DATA = require('../data/testData');
const allure = require('@wdio/allure-reporter').default;

const TIMEOUT = TEST_DATA.timeouts.medium;

async function clickElement(selector, elementName) {

    await allure.step(`Open ${elementName}`, async () => {

        const element = await $(selector);

        await element.waitForDisplayed({
            timeout: TIMEOUT
        });

        await element.click();

    });

}

async function selectTestBranch() {

    await allure.step("Select Test Branch", async () => {

        // ==============================
        // BACK
        // ==============================

        await clickElement(
            LOCATORS.branch.back,
            "Back"
        );


        // ==============================
        // ALL BRANCHES
        // ==============================

        await clickElement(
            LOCATORS.branch.allBranches,
            "All Branches"
        );


        // ==============================
        // SEARCH BRANCH
        // ==============================

        await allure.step("Search Branch", async () => {

            const search = await $(
                LOCATORS.branch.search
            );

            await search.waitForDisplayed({
                timeout: TEST_DATA.timeouts.medium
            });

            await search.click();

            await browser.pause(300);

            await search.clearValue();

            await search.setValue(
                TEST_DATA.branch.search
            );

            console.log(
                `Branch search entered: "${TEST_DATA.branch.search}"`
            );

        });


        // ==============================
        // SELECT TESTING BRANCH
        // ==============================

        await allure.step("Select Branch", async () => {

            const selectedBranch = await $(
                LOCATORS.branch.byName(
                    TEST_DATA.branch.name
                )
            );

            await selectedBranch.waitForDisplayed({
                timeout: TEST_DATA.timeouts.long
            });

            console.log(
                `Selecting branch: ${TEST_DATA.branch.name}`
            );

            await selectedBranch.click();

        });


        // ==============================
        // REOPEN SIDEBAR
        // ==============================

        await allure.step(
            "Reopen Navigation Drawer",
            async () => {

                const menu = await $(
                    LOCATORS.navigation.menu
                );

                await menu.waitForDisplayed({
                    timeout: TEST_DATA.timeouts.long
                });

                await menu.click();

            }
        );

    });
}



async function openBranchSettings() {

    await clickElement(
        LOCATORS.navigation.branchSettings,
        "Branch Settings"
    );

}

async function openRegisters() {

    await clickElement(
        LOCATORS.navigation.registers,
        "Registers"
    );

}

async function openRestaurant() {

    await clickElement(
        LOCATORS.navigation.restaurant,
        "Restaurant"
    );

}

async function openTables() {

    await clickElement(
        LOCATORS.navigation.tables,
        "Tables"
    );

}

async function openCourses() {

    await clickElement(
        LOCATORS.navigation.courses,
        "Courses"
    );

}

async function openCashInOut() {

    await clickElement(
        LOCATORS.navigation.cashInOut,
        "Cash In/Out"
    );

}

module.exports = {
    selectTestBranch,
    openBranchSettings,
    openRegisters,
    openRestaurant,
    openTables,
    openCourses,
    openCashInOut
};