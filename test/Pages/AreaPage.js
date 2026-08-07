const BasePage = require('./BasePage');

class AreaPage extends BasePage {

    get navigationDrawer() {
        return $('//android.widget.ImageButton[@content-desc="Open navigation drawer"]');
    }

    get branchSettings() {
        return $('//androidx.recyclerview.widget.RecyclerView[@resource-id="ch.payyap.smartpos:id/lst_menu_items"]/android.view.ViewGroup[8]');
    }

    get restaurant() {
        return $('//android.widget.TextView[@text="Restaurant"]');
    }

    get areasMenu() {
        return $('//android.widget.TextView[@text="Areas"]');
    }

    get addAreaButton() {
        return $('id=ch.payyap.smartpos:id/menu_item_new_product');
    }

    get areaNameField() {
        return $('id=ch.payyap.smartpos:id/etName');
    }

    // get areaNameField() {
    // return $('//android.widget.EditText[@resource-id="ch.payyap.smartpos:id/etName"]');
    // }

    get submitButton() {
        return $('id=ch.payyap.smartpos:id/buttonSubmit');
    }

    table(tableName) {
        return $(`//android.widget.TextView[@resource-id="ch.payyap.smartpos:id/tvName" and @text="${tableName}"]`);
    }

    get applyButton() {
        return $('id=ch.payyap.smartpos:id/btnApply');
    }

    area(areaName) {
        return $(`//android.widget.TextView[@text="${areaName}"]`);
    }

    tableName(tableName) {
        return $(`//android.widget.TextView[@text="${tableName}"]`);
    }

    async createArea(data) {

        // await this.navigationDrawer.waitForDisplayed({ timeout: 80000 });

        // await this.click(
        //     this.navigationDrawer,
        //     "Click Navigation Drawer"
        // );

        await this.click(
            this.branchSettings,
            "Open Branch Settings"
        );

        await this.click(this.restaurant, "Open Restaurant");

        await this.click(
            this.areasMenu,
            "Open Areas"
        );

        await this.click(
            this.addAreaButton,
            "Click Add Area"
        );

        // await this.areaNameField.waitForExist({ timeout: 30000 });

        // await this.click(
        //     this.areaNameField,
        //     "Click Area Name"
        // );

        const suggestion = $('id=android:id/text1');

        if (await suggestion.isDisplayed()) {
            await suggestion.click();
        }

        await this.areaNameField.click();
        await this.areaNameField.clearValue();
        // await driver.keys(data.areaName);
        for (const char of data.areaName) {
            await driver.keys(char);
            await driver.pause(200);
        }
                

        await driver.pressKeyCode(66);


        // await this.setValue(
        //     this.areaNameField,
        //     data.areaName,
        //     `Enter Area Name : ${data.areaName}`
        // );

        await this.click(
            this.submitButton,
            "Click Submit"
        );

        const table = this.table(data.tableName);

        await table.waitForDisplayed({
    timeout: 30000
});

        await this.click(
            table,
            `Select Table : ${data.tableName}`
        );

        await this.click(
            this.applyButton,
            "Click Apply"
        );
    }

    async verifyCreatedArea(data) {

        const area = this.area(data.areaName);

        await this.verifyDisplayed(
            area,
            `Verify Area : ${data.areaName}`
        );

        // const table = this.tableName(data.tableName);

        // await this.verifyDisplayed(
        //     table,
        //     `Verify Table : ${data.tableName}`
        // );
    }
}

module.exports = new AreaPage();