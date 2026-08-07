const BasePage = require('./BasePage');

class ProductPage extends BasePage {

    // Existing
    get productMenu() {
        return $('//androidx.recyclerview.widget.RecyclerView[@resource-id="ch.payyap.smartpos:id/lst_menu_items"]/android.view.ViewGroup[2]');
    }

    get filterProduct() {
        return $('//android.widget.TextView[@resource-id="ch.payyap.smartpos:id/filter_products"]');
    }

    // Product Creation
    get saveButton() {
        // return $('//android.widget.Button[@content-desc="Save"]');
        return $('id=ch.payyap.smartpos:id/menu_item_new_product');
    }

    get categoryDropdown() {
        return $('(//android.widget.ImageButton[@resource-id="ch.payyap.smartpos:id/text_input_end_icon"])[1]');
    }

    get firstCategory() {
        return $('//androidx.recyclerview.widget.RecyclerView[@resource-id="ch.payyap.smartpos:id/category_recycler_view"]/android.widget.LinearLayout[1]/android.widget.ImageView');
    }

    get productName() {
        return $('id=ch.payyap.smartpos:id/product_name_edit_text');
    }

    get taxDropdown() {
        return $('(//android.widget.ImageButton[@resource-id="ch.payyap.smartpos:id/text_input_end_icon"])[2]');
    }

    get sixthTax() {
        return $('//androidx.recyclerview.widget.RecyclerView[@resource-id="ch.payyap.smartpos:id/category_recycler_view"]/android.widget.LinearLayout[6]/android.widget.ImageView');
    }

    get unitDropdown() {
        return $('(//android.widget.ImageButton[@resource-id="ch.payyap.smartpos:id/text_input_end_icon"])[3]');
    }

    get secondUnit() {
        return $('//androidx.recyclerview.widget.RecyclerView[@resource-id="ch.payyap.smartpos:id/category_recycler_view"]/android.widget.LinearLayout[2]/android.widget.ImageView');
    }

    get takeawaySwitch() {
        return $('id=ch.payyap.smartpos:id/product_is_food_switch');
    }

    get modifierSwitch() {
        return $('id=ch.payyap.smartpos:id/switchModifier');
    }

    get sellingPrice() {
        return $('id=ch.payyap.smartpos:id/product_selling_edit_text');
    }

    get purchasePrice() {
        return $('id=ch.payyap.smartpos:id/product_purchase_edit_text');
    }

    get branchDropdown() {
        return $('(//android.widget.ImageButton[@resource-id="ch.payyap.smartpos:id/text_input_end_icon"])[3]');
    }

    get firstBranch() {
        return $('//androidx.recyclerview.widget.RecyclerView[@resource-id="ch.payyap.smartpos:id/category_recycler_view"]/android.widget.LinearLayout[1]/android.widget.ImageView');
    }

    get createProductSave() {
        return $('id=ch.payyap.smartpos:id/menu_item_create_product_save');
    }

    get tdBranch() {
        return $('//android.widget.TextView[@resource-id="ch.payyap.smartpos:id/tvBranchName" and @text="TD"]');
    }

    get branchSave() {
        return $('id=ch.payyap.smartpos:id/btnSave');
    }

    get continueToModifierButton() {
    return $('//android.widget.Button[@resource-id="ch.payyap.smartpos:id/btnContinueToModifier"]');
    }

    get firstModifier() {
        return $('(//android.widget.LinearLayout[@resource-id="ch.payyap.smartpos:id/llRoot"])[1]/android.widget.LinearLayout/android.widget.ImageView[1]');
    }

    get toolbarTitle() {
    return $('//android.view.ViewGroup[@resource-id="ch.payyap.smartpos:id/toolbar"]//android.widget.TextView');
    }

    get snackbarText() {
    return $(
      '//android.widget.TextView[@resource-id="ch.payyap.smartpos:id/snackbar_text"]'
    );
  }

    async openFilter() {

        await this.click(this.filterProduct);
    }

   async createTakeawayProduct(data) {

    await this.click(
        this.filterProduct,
        "Click Filter Product"
    );

    await this.click(
        this.saveButton,
        "Click New Product"
    );

    await this.click(
        this.categoryDropdown,
        "Open Category Dropdown"
    );

    await this.click(
        this.firstCategory,
        "Select First Category"
    );

    await this.setValue(
        this.productName,
        data.productName,
        `Enter Product Name : ${data.productName}`
    );

    await this.click(
        this.taxDropdown,
        "Open Tax Dropdown"
    );

    await this.click(
        this.sixthTax,
        "Select Tax"
    );

    await this.click(
        this.unitDropdown,
        "Open Unit Dropdown"
    );

    await this.click(
        this.secondUnit,
        "Select Unit"
    );

    if (data.isTakeaway === "Yes") {
        await this.click(
            this.takeawaySwitch,
            "Enable Takeaway"
        );
    }

    await this.setValue(
        this.sellingPrice,
        data.sellingPrice,
        `Enter Selling Price : ${data.sellingPrice}`
    );

    await this.setValue(
        this.purchasePrice,
        data.purchasePrice,
        `Enter Purchase Price : ${data.purchasePrice}`
    );

    await this.click(
        this.createProductSave,
        "Click Save Product"
    );

    await this.click(
        this.tdBranch,
        "Select TD Branch"
    );

    await this.click(
        this.branchSave,
        "Click Branch Save"
    );

    // const product = $(`//android.widget.TextView[@text="${data.productName}"]`);

    // await product.waitForDisplayed({ timeout: 10000 });
    // await expect(product).toBeDisplayed();

//     const message = await this.getText(
//     this.snackbarText,
//     "Read Snackbar Text"
// );

// expect(message).toContain(
//     `${data.productName} has been created successfully!`
// );a

await this.snackbarText.waitForDisplayed();

const message = await this.snackbarText.getText();

expect(message).toContain(
    `${data.productName} has been created successfully!`
);
    // await expect(this.toolbarTitle).toBeDisplayed();
}
        async createModifierProduct(data) {

    await this.click(this.filterProduct, "Click Filter Product");
    await this.click(this.saveButton, "Click New Product");

    await this.click(this.categoryDropdown, "Open Category Dropdown");
    await this.click(this.firstCategory, "Select First Category");

    await this.setValue(
        this.productName,
        data.productName,
        `Enter Product Name : ${data.productName}`
    );

    await this.click(this.taxDropdown, "Open Tax Dropdown");
    await this.click(this.sixthTax, "Select Tax");

    await this.click(this.unitDropdown, "Open Unit Dropdown");
    await this.click(this.secondUnit, "Select Unit");

    if (data.isModifier === "Yes") {
        await this.click(
            this.modifierSwitch,
            "Enable Modifier"
        );
    }

    await this.setValue(
        this.sellingPrice,
        data.sellingPrice,
        `Enter Selling Price : ${data.sellingPrice}`
    );

    await this.setValue(
        this.purchasePrice,
        data.purchasePrice,
        `Enter Purchase Price : ${data.purchasePrice}`
    );

    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().resourceId("ch.payyap.smartpos:id/btnContinueToModifier"));');

    await this.click(
        this.continueToModifierButton,
        "Click Continue To Modifier"
    );

    await this.click(
        this.firstModifier,
        "Select First Modifier"
    );

    await this.click(
        this.createProductSave,
        "Click Save Product"
    );

    await this.click(
        this.tdBranch,
        "Select TD Branch"
    );

    await this.click(
        this.branchSave,
        "Click Branch Save"
    );

    const product = $(`//android.widget.TextView[@text="${data.productName}"]`);

    await product.waitForDisplayed({ timeout: 10000 });
    await expect(product).toBeDisplayed();
}

}

module.exports = new ProductPage();