const BasePage = require('./BasePage');

class ExpensePage extends BasePage {

    get navigationDrawer() {
        return $('//android.widget.ImageButton[@content-desc="Open navigation drawer"]');
    }

    get Branchsettings() {
        return $('//androidx.recyclerview.widget.RecyclerView[@resource-id="ch.payyap.smartpos:id/lst_menu_items"]/android.view.ViewGroup[8]');
    }

    get expensesMenu() {
        return $('//android.widget.TextView[@text="Expenses"]');
    }

    get addExpenseButton() {
        return $('id=ch.payyap.smartpos:id/menu_item_new_product');
    }

    get expenseTypeDropdown() {
        return $('(//android.widget.ImageButton[@resource-id="ch.payyap.smartpos:id/text_input_end_icon"])[1]');
    }

    expenseType(name) {
        return $(`//android.widget.TextView[@text="${name}"]`);
    }

    // get branchDropdown() {
    //     return $('(//android.widget.ImageButton[@resource-id="ch.payyap.smartpos:id/text_input_end_icon"])[2]');
    // }

    // get branchList() {
    //     return $('//android.widget.LinearLayout[@resource-id="ch.payyap.smartpos:id/llRoot"]/android.widget.ImageView');
    // }
    get regdropdown() {
        return $('(//android.widget.ImageButton[@resource-id="ch.payyap.smartpos:id/text_input_end_icon"])[2]');
    }

    get register() {
        return $('//android.widget.LinearLayout[@resource-id="ch.payyap.smartpos:id/llRoot"]/android.widget.ImageView');
    }

    get applyButton() {
        return $('id=ch.payyap.smartpos:id/btnApply');
    }

    get taxDropdown() {
        return $('(//android.widget.ImageButton[@resource-id="ch.payyap.smartpos:id/text_input_end_icon"])[3]');
    }

    tax(name) {
        return $(`//android.widget.TextView[@text="${name}"]`);
    }

    get amountField() {
        return $('id=ch.payyap.smartpos:id/etAmount');
    }

    get noteField() {
        return $('id=ch.payyap.smartpos:id/etNote');
    }

    get saveButton() {
        return $('id=ch.payyap.smartpos:id/menu_item_save');
    }

    get categoryName() {
        return $('id=ch.payyap.smartpos:id/tvCategoryName');
    }

    async createExpense(data) {

        // await this.navigationDrawer.waitForDisplayed({
        //     timeout: 80000
        // });

        //     await this.click(
        //         this.navigationDrawer,
        //         "Click Navigation Drawer"
        //     );

        await this.Branchsettings.waitForDisplayed({ timeout: 10000 });
        await this.click(this.Branchsettings, "Open Branch Settings");

        await this.expensesMenu.waitForDisplayed({ timeout: 10000 });
        await this.click(this.expensesMenu, "Open Expenses");

        await this.addExpenseButton.waitForDisplayed({ timeout: 10000 });
        await this.click(this.addExpenseButton, "Click Add Expense");

        await this.expenseTypeDropdown.waitForDisplayed({ timeout: 10000 });
        await this.click(this.expenseTypeDropdown, "Open Expense Type");

        await this.click(
            this.expenseType(data.expenseType),
            `Select Expense Type : ${data.expenseType}`
        );

        // await this.branchDropdown.waitForDisplayed({ timeout: 10000 });
        // await this.click(this.branchDropdown, "Open Branch");

        // await this.branchList.waitForDisplayed({ timeout: 10000 });
        // await this.click(this.branchList, `Select Branch : ${data.expenseBranch}`);

        await this.regdropdown.waitForDisplayed({ timeout: 10000 });
        await this.click(this.regdropdown, "Open Register");

        await this.register.waitForDisplayed({ timeout: 10000 });
        await this.click(this.register, `Select Register : ${data.expensereg}`);

        await this.applyButton.waitForDisplayed({ timeout: 10000 });
        await this.click(this.applyButton, "Click Apply");

        await this.taxDropdown.waitForDisplayed({ timeout: 10000 });
        await this.click(this.taxDropdown, "Open Tax");

        await this.click(
            this.tax(data.tax),
            `Select Tax : ${data.tax}`
        );

        await this.amountField.waitForDisplayed({ timeout: 10000 });
        await this.setValue(
            this.amountField,
            data.amount,
            `Enter Amount : ${data.amount}`
        );

        await this.noteField.waitForDisplayed({ timeout: 10000 });
        await this.setValue(
            this.noteField,
            data.note,
            `Enter Note : ${data.note}`
        );

        await this.saveButton.waitForDisplayed({ timeout: 10000 });
        await this.click(this.saveButton, "Click Save");

        await this.categoryName.waitForDisplayed({ timeout: 10000 });
        await expect(this.categoryName).toHaveText(data.expenseType);
    }
}

module.exports = new ExpensePage();