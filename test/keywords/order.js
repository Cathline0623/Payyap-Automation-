import { clickElement, enterText } from "../utils/actions.js";
import { TIMEOUT } from "../utils/constants.js";

export async function placeCashOrder() {

    // ============================
    // Click Add New (+)
    // ============================
    await clickElement(
        'android=new UiSelector().resourceId("ch.payyap.smartpos:id/menu_item_new_order")',
        "Add New"
    );

    // ============================
    // Select first table
    // ============================
    const firstTable = await $(
        '(//androidx.recyclerview.widget.RecyclerView[@resource-id="ch.payyap.smartpos:id/rvTables"]//android.widget.LinearLayout[@resource-id="ch.payyap.smartpos:id/llRoot"])[1]'
    );

    await firstTable.waitForDisplayed({
        timeout: TIMEOUT
    });

    await firstTable.click();

    // ============================
    // Wait for Search field
    // ============================
    const searchBar = await $(
        'android=new UiSelector().resourceId("ch.payyap.smartpos:id/input_edit_text_qr")'
    );

    await searchBar.waitForDisplayed({
        timeout: TIMEOUT
    });

    await searchBar.click();

    await browser.pause(500);

    await driver.keys("wings");

    await driver.pressKeyCode(66); // Enter / Done

    // ============================
    // Select first result
    // ============================
    const firstResult = await $(
        '(//androidx.recyclerview.widget.RecyclerView[@resource-id="ch.payyap.smartpos:id/rvProducts"]//android.widget.LinearLayout[@resource-id="ch.payyap.smartpos:id/llRoot"])[1]'
    );

    await firstResult.waitForDisplayed({
        timeout: TIMEOUT
    });

    await firstResult.click();

    // ============================
    // Wait for Place Order button
    // ============================
    const placeOrder = await $(
        'android=new UiSelector().resourceId("ch.payyap.smartpos:id/btnPlaceOrder")'
    );

    await placeOrder.waitForEnabled({
        timeout: TIMEOUT
    });

    await placeOrder.click();

    // ============================
    // "Items not printed" popup
    // ============================
    const popupClose = await $(
        'android=new UiSelector().resourceId("ch.payyap.smartpos:id/button_close")'
    );

    if (await popupClose.isDisplayed().catch(() => false)) {

        console.log("Items not printed popup detected.");

        await popupClose.click();

    } else {

        console.log("Popup not displayed.");

    }

    // ============================
    // Wait until Orders screen returns
    // ============================
    const firstOrder = await $(
        '(//androidx.recyclerview.widget.RecyclerView[@resource-id="ch.payyap.smartpos:id/rvTables"]//android.widget.LinearLayout[@resource-id="ch.payyap.smartpos:id/llRoot"])[1]'
    );

    await firstOrder.waitForDisplayed({
        timeout: TIMEOUT
    });

    await firstOrder.click();

    // ============================
    // Wait for Pay button
    // ============================
    const payButton = await $(
        'android=new UiSelector().resourceId("ch.payyap.smartpos:id/btnAddChanges")'
    );

    await payButton.waitForDisplayed({
        timeout: TIMEOUT
    });

    await payButton.click();

    // ============================
    // Select Cash
    // ============================
    const cash = await $(
        '(//androidx.recyclerview.widget.RecyclerView[@resource-id="ch.payyap.smartpos:id/rvDefaultMethods"]//android.widget.LinearLayout[@resource-id="ch.payyap.smartpos:id/llRoot"])[1]'
    );

    await cash.waitForDisplayed({
        timeout: TIMEOUT
    });

    await cash.click();

    // ============================
    // Confirm
    // ============================
    const confirm = await $(
        'android=new UiSelector().text("Confirm")'
    );

    await confirm.waitForDisplayed({
        timeout: TIMEOUT
    });

    await confirm.click();

    // ============================
    // Wait for Processing popup to disappear
    // ============================
    const processing = await $('android=new UiSelector().textContains("Processing Payment")');

    if (await processing.isDisplayed().catch(() => false)) {

        console.log("Waiting for payment processing...");

        await processing.waitForDisplayed({
            reverse: true,
            timeout: 60000
        });

    }

    // ============================
    // Verify Receipt Screen
    // ============================
    const receipt = await $('android=new UiSelector().textContains("Order #")');

    await receipt.waitForDisplayed({
        timeout: TIMEOUT
    });

    console.log("Cash payment completed successfully.");
}