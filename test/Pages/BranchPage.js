const BasePage = require('./BasePage');

class BranchPage extends BasePage {

    get navigationDrawer() {
        return $('//android.widget.ImageButton[@content-desc="Open navigation drawer"]');
    }

    get searchField() {
        return $('//android.widget.EditText[@resource-id="ch.payyap.smartpos:id/etSearch"]');
    }

    // get branchList() {
    //     // return $('//android.widget.LinearLayout[@resource-id="ch.payyap.smartpos:id/llRoot"]');
    //     //  return $(`(//android.widget.TextView[@text="${data.branchName}"])[1]`);
    //     // return $('//android.widget.ImageView[@resource-id="ch.payyap.smartpos:id/ivSelectedBranch"]');

    // }

    get sellProductText() {
        return $('//android.widget.TextView[@text="Sell Product"]');
    }

    get sellProductTitle() {
    return $('//android.widget.TextView[@text="Sell Product"]');
    }

    get allBranches() {
   return $('//*[@text="All Branches"]');
        // return $('//android.widget.TextView[@text="View Branches"]/following::android.widget.TextView[@text="All Branches"][1]');
    }

    branchName(branchName) {
            return $(`//android.widget.TextView[@text="${branchName}"]`);
    }

    branch(branchName) {
    return $(`//android.widget.TextView[@resource-id="ch.payyap.smartpos:id/tvName" and @text="${branchName}"]`);
    }



    get branchManagement() {
    return $('//android.widget.TextView[@resource-id="ch.payyap.smartpos:id/item_side_menu_title" and @text="Branch Management"]');
    }

    get staffTab() {
        return $('id=ch.payyap.smartpos:id/tabStaff');
    }

    get searchField() {
        return $('id=ch.payyap.smartpos:id/etSearch');
    }

    get tableStateSwitch() {
        return $('(//android.widget.Switch[@resource-id="ch.payyap.smartpos:id/switchTableState"])[1]');
    }


//     async selectBranch(data) {

//         await browser.pause(3000);
//         await this.searchField.waitForDisplayed({ timeout: 50000 });
//         await this.click(this.searchField, "Click Search Field");

//         await this.setValue(
//             this.searchField,
//             data.branchName,
//             `Search Branch : ${data.branchName}`
//         );

//         await browser.keys("Enter");

//         // await browser.pause(3000);
        
//         // const branchList = this.branchList(data.branchName);

//         // await branchList.waitForDisplayed({ timeout: 10000 });

//         // await this.click(
//         //     branchList,
//         //     `Select Branch : ${data.branchName}`
//         // );
//         const branchList = this.branch(data.branchName);

// await branchList.waitForDisplayed({
//     timeout: 30000
// });

// await branchList.click();

//         // await this.branchList.waitForDisplayed({ timeout: 50000 });
//         // await this.branchList.click();



    

        
//         await browser.pause(9000);
//         await this.navigationDrawer.waitForDisplayed({ timeout: 70000 });
//         await this.click(
//             this.navigationDrawer,
//             "Open Navigation Drawer"
//         );


//         // await this.branchList.waitForDisplayed({ timeout: 30000 });
//         // await expect(
//         //     this.allBranches(data.branchName)
//         // ).toBeDisplayed();

//         // const branch = this.branchName(data.branchName);

//         // await branch.waitForDisplayed({ timeout: 10000 });
//         // await expect(branch).toBeDisplayed();

//         const branch = this.branchName(data.branchName);

//         await this.verifyDisplayed(
//             branch,
//             `Verify Branch Name: ${data.branchName}`
//         );
//     }

async selectBranch(data) {

    await browser.pause(3000);

    await this.searchField.waitForDisplayed({
        timeout: 50000
    });

    await this.click(
        this.searchField,
        "Click Search Field"
    );

    // Enter branch name character by character
    for (const char of data.branchName) {
        await driver.keys(char);
        await driver.pause(300);
    }

    await driver.keys("Enter");

    // Select searched branch
    // const branchList = this.branch(data.branchName);

    // await branchList.waitForDisplayed({
    //     timeout: 30000
    // });

    // await this.click(
    //     branchList,
    //     `Select Branch : ${data.branchName}`
    // );

    const branchList = this.branch(data.branchName);

    await branchList.waitForDisplayed({
        timeout: 30000
    });

    await branchList.doubleClick();



    await browser.pause(9000);

    // Open navigation drawer
    await this.navigationDrawer.waitForDisplayed({
        timeout: 70000
    });

    await this.click(
        this.navigationDrawer,
        "Open Navigation Drawer"
    );

    // Verify selected branch
    const branch = this.branchName(data.branchName);

    await this.verifyDisplayed(
        branch,
        `Verify Branch Name: ${data.branchName}`
    );
}

    async updateTableState(data) {

    // await this.navigationDrawer.waitForDisplayed();
    //    await this.click(
    //         this.navigationDrawer,
    //         "Open Navigation Drawer"
    // );
    
    await this.branchManagement.waitForDisplayed({ timeout: 10000 });
    await this.click(this.branchManagement, "Open Branch Management");

    await this.staffTab.waitForDisplayed({ timeout: 10000 });
    await this.click(this.staffTab, "Open Staff Tab");

    await this.searchField.waitForDisplayed({ timeout: 10000 });
    await this.click(this.searchField, "Click Search");

    await this.setValue(
        this.searchField,
        data.staffName,
        `Search Staff : ${data.staffName}`
    );

    await this.tableStateSwitch.waitForDisplayed({ timeout: 10000 });

    const isChecked = await this.tableStateSwitch.getAttribute("checked");

    if (data.isTableState === "Yes" && isChecked === "false") {
        await this.click(this.tableStateSwitch, "Enable Table State");
    }

    if (data.isTableState === "No" && isChecked === "true") {
        await this.click(this.tableStateSwitch, "Disable Table State");
    }
}


}

module.exports = new BranchPage();