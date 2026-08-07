const BasePage = require('./BasePage');

class InventoryPage extends BasePage {


    get navigationDrawer() {
        return $('//android.widget.ImageButton[@content-desc="Open navigation drawer"]');
    } 
    
    get inventoryMenuItem() {
        return $('//androidx.recyclerview.widget.RecyclerView[@resource-id="ch.payyap.smartpos:id/lst_menu_items"]/android.view.ViewGroup[7]');
    }


    get inventoryReport() {
        return $('//android.widget.TextView[@text="Inventory Report"]');
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


    async openInventoryReport() {

        // await this.navigationDrawer.waitForDisplayed({ timeout: 90000 });

        // await this.click(
        //     this.navigationDrawer,
        //     "Click Navigation Drawer"
        // );

        await this.inventoryMenuItem.waitForDisplayed({ timeout: 50000 });
        await this.click(
            this.inventoryMenuItem,
            "Report Menu Item"
        );


        await this.click(
            this.inventoryReport,
            "Click Inventory Report"
        );
    }


    async enterEmail(data) {

        await this.oldemailField.waitForDisplayed({
            timeout: 30000
        });


        await this.oldemailField.click();

        

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
    }

}

module.exports = new InventoryPage();