const LOCATORS = require('../locators/app.locators');
const TEST_DATA = require('../data/testData');
const allure = require('@wdio/allure-reporter').default;

const TIMEOUT = TEST_DATA.timeouts.medium;

// ============================================================
// ROBUST CLICK
// ============================================================

async function clickElement(selector, elementName) {

    await allure.step(`Open ${elementName}`, async () => {

        const element = await $(selector);

        await element.waitForDisplayed({
            timeout: TEST_DATA.timeouts.long
        });

        await element.waitForEnabled({
            timeout: TEST_DATA.timeouts.long
        });

        await element.click();

        console.log(
            `${elementName} clicked successfully.`
        );

    });
}


// ============================================================
// WAIT FOR NAVIGATION DRAWER
// ============================================================

async function waitForNavigationDrawer() {

    const menu = await $(LOCATORS.navigation.menu);

    await browser.waitUntil(
        async () => {

            try {

                const displayed =
                    await menu.isDisplayed();

                const enabled =
                    await menu.isEnabled();

                return displayed && enabled;

            } catch {

                return false;

            }

        },
        {
            timeout: TEST_DATA.timeouts.long,
            interval: 1000,

            timeoutMsg:
                'Navigation drawer button did not become available after branch selection.'
        }
    );

    return menu;
}


// ============================================================
// SELECT TEST BRANCH
// ============================================================

async function selectTestBranch() {

    await allure.step(
        "Select Test Branch",
        async () => {

            // ====================================================
            // BACK
            // ====================================================

            await clickElement(
                LOCATORS.branch.back,
                "Back"
            );


            // ====================================================
            // ALL BRANCHES
            // ====================================================

            await clickElement(
                LOCATORS.branch.allBranches,
                "All Branches"
            );


            // ====================================================
            // SEARCH BRANCH
            // ====================================================

            await allure.step(
                "Search Branch",
                async () => {

                    const search = await $(
                        LOCATORS.branch.search
                    );

                    await search.waitForDisplayed({
                        timeout:
                            TEST_DATA.timeouts.long
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

                    // Give the branch search results time
                    // to populate.
                    await browser.pause(1500);

                }
            );


            // ====================================================
            // SELECT TESTING BRANCH
            // ====================================================

            await allure.step(
                "Select Branch",
                async () => {

                    const selectedBranch = await $(
                        `android=new UiSelector().text("${TEST_DATA.branch.name}")`
                    );

                    await selectedBranch.waitForDisplayed({
                        timeout:
                            TEST_DATA.timeouts.long
                    });

                    console.log(
                        `Testing branch result displayed. Selecting: ${TEST_DATA.branch.name}`
                    );

                    await selectedBranch.click();

                    console.log(
                        `Testing branch selected: ${TEST_DATA.branch.name}`
                    );

                }
            );


            // ====================================================
            // WAIT FOR DASHBOARD
            // ====================================================

            await allure.step(
                "Wait for Dashboard",
                async () => {

                    console.log(
                        "Waiting for dashboard after branch selection..."
                    );

                    /*
                     * IMPORTANT:
                     *
                     * The branch click can return before the
                     * dashboard/navigation drawer has completely
                     * rendered.
                     *
                     * Wait for the drawer to become available
                     * before attempting to click it.
                     */

                    const menu =
                        await waitForNavigationDrawer();

                    console.log(
                        "Navigation drawer button is available."
                    );


                    // =================================================
                    // OPEN NAVIGATION DRAWER WITH RETRIES
                    // =================================================

                    let opened = false;

                    for (
                        let attempt = 1;
                        attempt <= 5;
                        attempt++
                    ) {

                        try {

                            console.log(
                                `Attempt ${attempt}/5: opening navigation drawer...`
                            );

                            /*
                             * Re-check the element immediately before
                             * clicking. This protects against the UI
                             * being recreated during the transition.
                             */

                            const currentMenu = await $(
                                LOCATORS.navigation.menu
                            );

                            await currentMenu.waitForDisplayed({
                                timeout: 5000
                            });

                            await currentMenu.waitForEnabled({
                                timeout: 5000
                            });

                            await currentMenu.click();

                            opened = true;

                            console.log(
                                "Navigation drawer reopened successfully."
                            );

                            break;

                        } catch (error) {

                            console.log(
                                `Navigation drawer click attempt ${attempt} failed.`
                            );

                            if (attempt < 5) {

                                await browser.pause(2000);

                            }

                        }

                    }


                    if (!opened) {

                        throw new Error(
                            "Unable to open navigation drawer after selecting the test branch."
                        );

                    }

                }
            );

        }
    );
}


// ============================================================
// OPEN BRANCH SETTINGS
// ============================================================

async function openBranchSettings() {

    await clickElement(
        LOCATORS.navigation.branchSettings,
        "Branch Settings"
    );
}


// ============================================================
// OPEN REGISTERS
// ============================================================

async function openRegisters() {

    await clickElement(
        LOCATORS.navigation.registers,
        "Registers"
    );
}


// ============================================================
// OPEN RESTAURANT
// ============================================================

async function openRestaurant() {

    await clickElement(
        LOCATORS.navigation.restaurant,
        "Restaurant"
    );
}


// ============================================================
// OPEN TABLES
// ============================================================

async function openTables() {

    await clickElement(
        LOCATORS.navigation.tables,
        "Tables"
    );
}


// ============================================================
// OPEN COURSES
// ============================================================

async function openCourses() {

    await clickElement(
        LOCATORS.navigation.courses,
        "Courses"
    );
}


// ============================================================
// OPEN CASH IN / OUT
// ============================================================

async function openCashInOut() {

    await clickElement(
        LOCATORS.navigation.cashInOut,
        "Cash In/Out"
    );
}


// ============================================================
// EXPORTS
// ============================================================

module.exports = {
    selectTestBranch,
    openBranchSettings,
    openRegisters,
    openRestaurant,
    openTables,
    openCourses,
    openCashInOut
};