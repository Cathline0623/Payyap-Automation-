const BasePage = require('./BasePage');

class TipPage extends BasePage {

    get navigationDrawer() {
        return $('//android.widget.ImageButton[@content-desc="Open navigation drawer"]');
    }

    get Branchsettings() {
        return $('//androidx.recyclerview.widget.RecyclerView[@resource-id="ch.payyap.smartpos:id/lst_menu_items"]/android.view.ViewGroup[8]');
    }
    
    get restaurant() {
        return $('//android.widget.TextView[@text="Restaurant"]');
    }

    get tip() {
        return $('//android.widget.TextView[@text="Tip"]');
    }

    get tipActivated() {
        return $('id=ch.payyap.smartpos:id/tip_is_tip_activated');
    }

    get cashSwitch() {
        return $('//android.widget.Switch[@resource-id="ch.payyap.smartpos:id/tip_is_pay_by_cash"]');
    }

    get cardSwitch() {
        return $('//android.widget.Switch[@resource-id="ch.payyap.smartpos:id/tip_is_pay_by_card"]');
    }

    get clearTipOne() {
        return $('(//android.widget.ImageButton[@content-desc="Clear text"])[1]');
    }

    get tipValueOne() {
        return $('id=ch.payyap.smartpos:id/tip_value_one');
    }

    get clearTipTwo() {
        return $('(//android.widget.ImageButton[@content-desc="Clear text"])[2]');
    }

    get tipValueTwo() {
        return $('id=ch.payyap.smartpos:id/tip_value_two');
    }

    get saveButton() {
        return $('id=ch.payyap.smartpos:id/menu_item_save');
    }

    get tipbackButton() {
    return $('//android.widget.ImageButton');
    }


async createTip(data) {

        // await this.navigationDrawer.waitForDisplayed({
        //     timeout: 80000
        // });

        //     await this.click(
        //         this.navigationDrawer,
        //         "Click Navigation Drawer"
        //     );

        await this.Branchsettings.waitForDisplayed({ timeout: 10000 });
        await this.click(this.Branchsettings, "Open Branch Settings");

        await this.click(this.restaurant, "Open Restaurant");

        await this.click(this.tip, "Open Tip Settings");

        // Tip Activated
        await this.setSwitch(this.tipActivated, data.tipActivated);

        // Cash
        await this.setSwitch(this.cashSwitch, data.cashEnabled);

        // Card
        await this.setSwitch(this.cardSwitch, data.cardEnabled);

        // Tip Value 1
        await this.click(this.clearTipOne, "Clear Tip Value One");
        await this.setValue(this.tipValueOne, data.tipValueOne);

        // Tip Value 2
        await this.click(this.clearTipTwo, "Clear Tip Value Two");
        await this.setValue(this.tipValueTwo, data.tipValueTwo);

        await this.click(this.saveButton, "Save Tip Settings");

        await this.click(this.tipbackButton, "Click Tip Back Button");

        await this.click(this.tipbackButton, "Click Tip Back Button");

        await this.navigationDrawer.waitForDisplayed({
            timeout: 80000
        });

            await this.click(
                this.navigationDrawer,
                "Click Navigation Drawer"
            );
    }

    async setSwitch(element, value) {

        const checked = await element.getAttribute("checked");

        if (value.toLowerCase() === "yes" && checked === "false") {
            await element.click();
        }

        if (value.toLowerCase() === "no" && checked === "true") {
            await element.click();
        }
    }
}

module.exports = new TipPage();





