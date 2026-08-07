const BasePage = require('./BasePage');

class ClosingReportPage extends BasePage {

    get navigationDrawer() {
        return $('//android.widget.ImageButton[@content-desc="Open navigation drawer"]');
    } 

    get closingReportMenuItem() {
        return $('//androidx.recyclerview.widget.RecyclerView[@resource-id="ch.payyap.smartpos:id/lst_menu_items"]/android.view.ViewGroup[7]');
    }

    get closingReport() {
        return $('//android.widget.TextView[@text="Closing report"]');
    }

    get emailReportButton() {
        return $('//androidx.recyclerview.widget.RecyclerView[@resource-id="ch.payyap.smartpos:id/rvReports"]/android.widget.RelativeLayout[1]/android.widget.LinearLayout/android.widget.ImageView[2]');
    }

    get receiptByEmail() {
        return $('//android.widget.TextView[@text="Receipt by email"]');
    }

    get oldemailField() {
        return $('//android.widget.TextView[@resource-id="android:id/text1" and @text="trackdfect8@gmail.com"]');
    }

    get emailField() {
        return $('//android.widget.EditText[@resource-id="ch.payyap.smartpos:id/etEmail"]');
    }

    get submitButton() {
        return $('//android.widget.TextView[@resource-id="ch.payyap.smartpos:id/buttonSubmit"]');
    }

    get snackbarMessage() {
        return $('id=ch.payyap.smartpos:id/snackbar_text');
    }


    async openClosingReport() {


        await this.navigationDrawer.waitForDisplayed({ timeout: 90000 });

        await this.click(
            this.navigationDrawer,
            "Click Navigation Drawer"
        );

        await this.closingReportMenuItem.waitForDisplayed({
            timeout: 50000
        });

        await this.click(
            this.closingReportMenuItem,
            "Report Menu Item"
        );

        await this.click(
            this.closingReport,
            "Click Closing Report"
        );

        await this.click(
            this.emailReportButton,
            "Click Email Report"
        );

        await this.click(
            this.receiptByEmail,
            "Click Receipt by Email"
        );
    }


    async enterEmail(data) {

        await this.emailField.waitForDisplayed({
            timeout: 30000
        });

        await this.emailField.click();

        await this.emailField.clearValue();

        for (const char of data.email) {

            await driver.keys(char);

            await driver.pause(200);
        }

        await driver.pressKeyCode(66);

        await this.click(
            this.submitButton,
            "Click Submit Button"
        );

        await this.snackbarMessage.waitForDisplayed({
            timeout: 30000
        });

        await this.verifyDisplayed(
            this.snackbarMessage,
            "Verify Snackbar Message"
        );
    }
}

module.exports = new ClosingReportPage();