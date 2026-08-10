const LOCATORS = require('../locators/app.locators');
const TEST_DATA = require('../data/testData');
const allure = require('@wdio/allure-reporter').default;

const TIMEOUT = TEST_DATA.timeouts.medium;

function randomGiftCardNumber() {
    return Math.floor(
        100000 + Math.random() * 900000
    ).toString();
}

async function clickElement(selector, elementName) {

    await allure.step(`Click ${elementName}`, async () => {

        const element = await $(selector);

        await element.waitForDisplayed({
            timeout: TIMEOUT
        });

        await element.click();

    });

}

async function enterText(selector, value, fieldName) {

    await allure.step(`Enter ${fieldName}`, async () => {

        const field = await $(selector);

        await field.waitForDisplayed({
            timeout: TIMEOUT
        });

        await field.clearValue();

        await field.setValue(value);

        const entered = await field.getText();

        if (!entered) {
            throw new Error(`${fieldName} was not entered.`);
        }

    });

}

async function openSell() {

    await clickElement(
        LOCATORS.navigation.sell,
        "Sell"
    );

    // VERIFY Sell page loaded
    const search = await $('android=new UiSelector().text("Search")');

    await search.waitForDisplayed({
        timeout: TIMEOUT
    });

    console.log("Sell screen loaded.");

}

async function sellGiftCard(amount = "20") {

    console.log("STEP 1");
    await clickElement(
        LOCATORS.giftCard.moreButton,
        "More"
    );

    console.log("STEP 2");
    const giftCard = await $(LOCATORS.giftCard.giftCard);

    await giftCard.waitForDisplayed({
        timeout: TIMEOUT
    });

    await giftCard.click();

    console.log("STEP 3");
    const sellGiftCard = await $(LOCATORS.giftCard.sellGiftCard);

    await sellGiftCard.waitForDisplayed({
        timeout: TIMEOUT
    });

    await sellGiftCard.click();
    await browser.pause(3000);

    console.log("STEP 4");
    const cardField = await $(LOCATORS.giftCard.cardNumber);

    await cardField.waitForDisplayed({
        timeout: TIMEOUT
    });

    const cardNumber = randomGiftCardNumber();

    console.log("STEP 5");
    await enterText(
        LOCATORS.giftCard.cardNumber,
        cardNumber,
        "Gift Card Number"
    );

    console.log(`Gift Card Number: ${cardNumber}`);

    console.log("STEP 6");
    const amountField = await $(LOCATORS.giftCard.amount);

    await amountField.waitForDisplayed({
        timeout: TIMEOUT
    });

    await amountField.click();

    await browser.pause(500);

    await driver.keys(amount);

    console.log("STEP 7");
    await clickElement(
        LOCATORS.giftCard.next,
        "Next"
    );

    console.log("STEP 8");

    // VERIFY Cart button appears
    const cart = await $(LOCATORS.giftCard.cart);

    await cart.waitForDisplayed({
        timeout: TIMEOUT
    });

    console.log("Gift card added.");
}


async function openCart() {

    await clickElement(
        LOCATORS.giftCard.cart,
        "Cart"
    );

    // VERIFY Pay button
    const pay = await $(LOCATORS.giftCard.pay);

    await pay.waitForDisplayed({
        timeout: TIMEOUT
    });

    console.log("Cart opened.");

}

async function payByCash() {

    await clickElement(
        LOCATORS.giftCard.pay,
        "Pay"
    );

    // VERIFY Cash option
    const cash = await $(LOCATORS.giftCard.cash);

    await cash.waitForDisplayed({
        timeout: TIMEOUT
    });

    await cash.click();

    // VERIFY Confirm
    const confirm = await $(LOCATORS.giftCard.confirm);

    await confirm.waitForDisplayed({
        timeout: TIMEOUT
    });

    await confirm.click();

    // WAIT until No Receipt is displayed
    const noReceipt = await $(LOCATORS.giftCard.noReceipt);

    await noReceipt.waitForDisplayed({
        timeout: TEST_DATA.timeouts.long
    });

    console.log("Payment successful.");

    await noReceipt.click();

    console.log("No Receipt selected.");

}

module.exports = {
    openSell,
    sellGiftCard,
    openCart,
    payByCash
};