const BasePage = require('./BasePage');

class DepotsProductPage extends BasePage {

     get filterDepot() {
        return $('id=ch.payyap.smartpos:id/filter_depots');
    }

    get newProductButton() {
        return $('id=ch.payyap.smartpos:id/menu_item_new_product');
    }

    get depotProductName() {
        return $('id=ch.payyap.smartpos:id/product_name_edit_text');
    }

    get depotSellingPrice() {
        return $('id=ch.payyap.smartpos:id/product_selling_price_edit_text');
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

    get searchProduct() {
    return $('id=ch.payyap.smartpos:id/input_edit_text_qr');
}

get firstProduct() {
    return $('id=ch.payyap.smartpos:id/product_desc_first_line_name');
}

get editProduct() {
    return $('id=ch.payyap.smartpos:id/menu_item_view_product_edit');
}

get assignProductDropdown() {
    return $('(//android.widget.ImageButton[@resource-id="ch.payyap.smartpos:id/text_input_end_icon"])[1]');
}

get assignedCheckbox() {
    return $('id=ch.payyap.smartpos:id/assigned_checkbox_right');
}

get assignProductSave() {
    return $('id=ch.payyap.smartpos:id/menu_assign_products_item_save');
}

get editProductSave() {
    return $('id=ch.payyap.smartpos:id/menu_edit_product_item_save');
}

get firstBranchHeader() {
    return $('(//android.widget.LinearLayout[@resource-id="ch.payyap.smartpos:id/branchHeader"])[1]');
}

    async createDepotProduct(data) {

    await this.click(
        this.filterDepot,
        "Click Depot Filter"
    );

    await this.click(
        this.newProductButton,
        "Click New Depot Product"
    );

    await this.setValue(
        this.depotProductName,
        data.productName,
        `Enter Depot Product Name : ${data.productName}`
    );

    await this.setValue(
        this.depotSellingPrice,
        data.sellingPrice,
        `Enter Selling Price : ${data.sellingPrice}`
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

    // const oldProduct = $(`//android.widget.TextView[@text="${data.productName}"]`);

    // await oldProduct.waitForDisplayed({ timeout: 10000 });
    // await expect(oldProduct).toBeDisplayed();

    await this.click(
        this.searchProduct,
        "Click Search Product"
    );

    await this.setValue(
        this.searchProduct,
        data.productName,
        `Search Product : ${data.productName}`
    );

    await this.click(
        this.firstProduct,
        "Open Product"
    );

    await this.click(
        this.editProduct,
        "Click Edit Product"
    );

    await this.click(
        this.assignProductDropdown,
        "Open Favourite Product Dropdown"
    );

    await this.click(
        this.searchProduct,
        "Click Favourite Product Search"
    );

    let existingText = await this.searchProduct.getText();

    while (existingText.length > 0) {
        await driver.pressKeyCode(67);
        existingText = existingText.slice(0, -1);
    }

    await this.setValue(
        this.searchProduct,
        data.favProduct,
        `Search Favourite Product : ${data.favProduct}`
    );

    await this.click(
        this.assignedCheckbox,
        "Select Favourite Product"
    );

    await this.click(
        this.assignProductSave,
        "Save Favourite Product"
    );

    await this.click(
        this.editProductSave,
        "Save Edited Product"
    );

    await this.click(
        this.firstBranchHeader,
        "Select Branch"
    );

    await this.click(
        this.branchSave,
        "Save Branch"
    );

    const product = $(`//android.widget.TextView[@text="${data.productName}"]`);

    await product.waitForDisplayed({ timeout: 10000 });
    await expect(product).toBeDisplayed();
}

    

}

module.exports = new DepotsProductPage();