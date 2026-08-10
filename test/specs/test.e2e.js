describe('Add Product', () => {

    it('Create Variant Product', async () => {

        await driver.activateApp('ch.payyap.smartpos');

        await $('//*[@text="Add Product"]').click();

        // ---------------- CONFIG ----------------

        const productNames = [
            "Bread",
            "Banana",
            "Milk",
            "Apple",
            "Chocolate",
            "Coffee",
            "Rice",
            "Juice"
        ];

        const productName =
            `${productNames[Math.floor(Math.random() * productNames.length)]}-${Math.floor(Math.random() * 900 + 100)}`;

        const category = "snacks";
        const unit = "g";

        const takeaway = true;
        const modifiers = true;

        // ---------------- PRODUCT TYPE ----------------

        const productType = await $('id=ch.payyap.smartpos:id/product_type_edit_text');
        await productType.waitForDisplayed({ timeout: 20000 });
        await productType.click();

        const variant = await $('android=new UiSelector().text("Variant")');
        await variant.waitForDisplayed({ timeout: 20000 });
        await variant.click();

        // ---------------- PRODUCT NAME ----------------

        const productNameField = await $('id=ch.payyap.smartpos:id/product_name_edit_text');

        await productNameField.waitForDisplayed({ timeout: 20000 });
        await productNameField.setValue(productName);

        // ---------------- CATEGORY ----------------

        // ---------------- CATEGORY ----------------

const categoryField = await $('id=ch.payyap.smartpos:id/product_category_edit_text');

await categoryField.waitForDisplayed({ timeout: 30000 });
await categoryField.click();

// Wait until the category popup is actually loaded
const categoryList = await $('id=ch.payyap.smartpos:id/category_recycler_view');
await categoryList.waitForDisplayed({ timeout: 30000 });

// Now click the category
const snacks = await $('android=new UiSelector().text("snacks")');
await snacks.waitForDisplayed({ timeout: 30000 });
await snacks.click();

        // ---------------- UNIT ----------------

        const unitField = await $('id=ch.payyap.smartpos:id/product_unit_edit_text');

        await unitField.waitForDisplayed({ timeout: 20000 });
        await unitField.click();

        const unitOption = await $(`android=new UiSelector().text("${unit}")`);

        await unitOption.waitForDisplayed({ timeout: 20000 });
        await unitOption.click();

        // ---------------- TAKEAWAY ----------------

        if (takeaway) {

            const takeawaySwitch = await $('id=ch.payyap.smartpos:id/product_is_food_switch');

            const checked =
                (await takeawaySwitch.getAttribute("checked")) === "true";

            if (!checked) {
                await takeawaySwitch.click();
            }
        }

        // ---------------- MODIFIERS ----------------

        if (modifiers) {

            const modifierSwitch = await $('id=ch.payyap.smartpos:id/switchModifier');

            const checked =
                (await modifierSwitch.getAttribute("checked")) === "true";

            if (!checked) {
                await modifierSwitch.click();
            }
        }

        await driver.pause(5000);

    });

});