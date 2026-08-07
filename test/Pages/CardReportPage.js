const BasePage = require('./BasePage');

class CardReportPage extends BasePage {

    get navigationDrawer() {
        return $('//android.widget.ImageButton[@content-desc="Open navigation drawer"]');
    } 

    get inventoryMenuItem() {
        return $('//androidx.recyclerview.widget.RecyclerView[@resource-id="ch.payyap.smartpos:id/lst_menu_items"]/android.view.ViewGroup[7]');
    }

    get cardTransactionsReport() {
        return $('//android.widget.TextView[@text="Card Transactions Report"]');
    }

    get fromDateIcon() {
        return $('(//android.widget.ImageButton[@resource-id="ch.payyap.smartpos:id/text_input_end_icon"])[1]');
    }

    get startDate() {
        return $('//android.widget.TextView[@content-desc="Wednesday, July 15"]');
    }

    get endDate() {
        return $('//android.widget.TextView[@content-desc="Today Friday, August 7"]');
    }
    

    get confirmButton() {
        return $('id=ch.payyap.smartpos:id/confirm_button');
    }

    get regDropdown() {
        return $('(//android.widget.ImageButton[@resource-id="ch.payyap.smartpos:id/text_input_end_icon"])[2]');
    }

    get retailOption() {
        return $('//android.widget.TextView[@resource-id="ch.payyap.smartpos:id/tvName" and @text="Retail"]');
    }

    get applyButton() {
        return $('//android.widget.TextView[@resource-id="ch.payyap.smartpos:id/btnApply"]');
    }

    get generateButton() {
        return $('id=ch.payyap.smartpos:id/btnGenerate');
    }

    get oldEmailField() {
        return $('//android.widget.TextView[@resource-id="android:id/text1" and @text="trackdfect8@gmail.com"]');
    }

    get emailField() {
        return $('//android.widget.EditText[@resource-id="ch.payyap.smartpos:id/etEmail"]');
    }

    get submitButton() {
        return $('//android.widget.TextView[@resource-id="ch.payyap.smartpos:id/buttonSubmit"]');
    }

    get successMessage() {
    return $('//android.widget.TextView[@text="The report sent successfully"]');
    }

    async generateCardTransactionReport() {


        // await this.navigationDrawer.waitForDisplayed({ timeout: 90000 });

        // await this.click(
        //     this.navigationDrawer,
        //     "Click Navigation Drawer"
        // );

        await this.click(this.inventoryMenuItem, "Click Inventory Menu");
        await this.click(this.cardTransactionsReport, "Click Card Transactions Report");


        await this.click(this.fromDateIcon, "Open Date Picker");
        await this.click(this.startDate, "Select Start Date");
        await this.click(this.endDate, "Select End Date");
        await this.click(this.confirmButton, "Confirm Date Range");

        await this.click(this.regDropdown, "Open Registration Dropdown");
        await this.click(this.retailOption, "Select Retail");
        await this.click(this.applyButton, "Click Apply");

        await this.click(this.generateButton, "Generate Report");
    }

    async enterEmail(data) {

        await this.oldEmailField.waitForDisplayed({ timeout: 30000 });

        await this.oldEmailField.click();

        await this.emailField.clearValue();

        for (const char of data.email) {
            await driver.keys(char);
            await driver.pause(200);
        }

        await driver.pressKeyCode(66);

        await this.click(this.submitButton, "Click Submit Button");

        // await this.successMessage.waitForDisplayed({ timeout: 30000 });

        // await expect(this.successMessage).toHaveText(
        //     "The report sent successfully"
        // );

    }

async verifyReportSentSuccessfully() {

    await this.successMessage.waitForDisplayed({ timeout: 30000 });

    await expect(this.successMessage).toHaveText(
        "The report sent successfully"
    );
}
}

module.exports = new CardReportPage();