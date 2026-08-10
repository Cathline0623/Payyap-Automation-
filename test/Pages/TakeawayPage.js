const BasePage = require('./BasePage');

class TakeawayPage extends BasePage {

    // get navigationDrawer() {
    //     return $('//android.widget.ImageButton[@content-desc="Open navigation drawer"]');
    // }

    // get retailSalesMenu() {
    //     return $('//androidx.recyclerview.widget.RecyclerView[@resource-id="ch.payyap.smartpos:id/lst_menu_items"]/android.view.ViewGroup[4]');
    // }

    get takeAwayButton() {
        return $('//android.widget.Button[@content-desc="Take-away"]');
    }

    // get searchProductField() {
    //     return $('id=ch.payyap.smartpos:id/input_edit_text_qr');
    // }

    // get firstProduct() {
    //     return $('(//android.view.ViewGroup[@resource-id="ch.payyap.smartpos:id/swipe_reveal_layout"])[1]/android.widget.FrameLayout[1]/androidx.appcompat.widget.LinearLayoutCompat');
    // }

    // get selectedProductHeader() {
    //     return $('//android.widget.LinearLayout[@resource-id="ch.payyap.smartpos:id/selected_products_header"]');
    // }

    // product(productName) {
    //     return $(`//android.widget.TextView[@text="${productName}"]`);
    // }

    get placeOrderButton() {
    return $('id=ch.payyap.smartpos:id/btnPlaceOrder');
    }

    get closeButton() {
        return $('id=ch.payyap.smartpos:id/button_close');
    }

    get orderStatus() {
    return $('id=ch.payyap.smartpos:id/tvOrderStatus');
    }

    // get registerMenu() {
    //     return $('//androidx.recyclerview.widget.RecyclerView[@resource-id="ch.payyap.smartpos:id/lst_menu_items"]/android.view.ViewGroup[3]');
    // }

    get unlinkRegisterButton() {
        return $('(//android.view.ViewGroup[@resource-id="ch.payyap.smartpos:id/swipe_reveal_layout"])[1]/android.widget.FrameLayout[1]/android.view.ViewGroup');
    }

    get unlinkRegisterOption() {
        return $('//android.widget.TextView[@text="Unlink register"]');
    }

    get confirmButton() {
        return $('//android.widget.Button[@resource-id="android:id/button1"]');
    }

    get selectRegisterButton() {
        return $('(//android.view.ViewGroup[@resource-id="ch.payyap.smartpos:id/swipe_reveal_layout"])[2]/android.widget.FrameLayout[1]/android.view.ViewGroup');
    }

    get selectRegisterOption() {
        return $('//android.widget.TextView[@text="Select register"]');
    }

    // get assignedText() {
    //     return $('//android.widget.TextView[@text="Assigned"]');
    // }

    get saveCustomFieldsButton() {
    return $('id=ch.payyap.smartpos:id/btnSaveCustomFields');
    }

    get addpayButton() {
        return $('id=ch.payyap.smartpos:id/btnAddChanges');
    }

//Sales

 get registerMenu() {
        return $('//androidx.recyclerview.widget.RecyclerView[@resource-id="ch.payyap.smartpos:id/lst_menu_items"]/android.view.ViewGroup[3]');
    }

    get firstRegister() {
        return $('(//android.view.ViewGroup[@resource-id="ch.payyap.smartpos:id/swipe_reveal_layout"])[1]/android.widget.FrameLayout[1]/android.view.ViewGroup');
    }

    get selectRegisterText() {
        return $('//android.widget.TextView[@text="Select register"]');
    }

    get okButton() {
        return $('id=android:id/button1');
    }

    get assignedText() {
        return $('//android.widget.TextView[@text="Assigned"]');
    }

    get navigationDrawer() {
        return $('//android.widget.ImageButton[@content-desc="Open navigation drawer"]');
    }

    get retailSalesMenu() {
        return $('//androidx.recyclerview.widget.RecyclerView[@resource-id="ch.payyap.smartpos:id/lst_menu_items"]/android.view.ViewGroup[4]');
    }

    get searchProductField() {
        return $('id=ch.payyap.smartpos:id/input_edit_text_qr');
    }

    get firstProduct() {
        return $('(//android.view.ViewGroup[@resource-id="ch.payyap.smartpos:id/swipe_reveal_layout"])[1]/android.widget.FrameLayout[1]/androidx.appcompat.widget.LinearLayoutCompat');
    }

    get selectedProductHeader() {
        return $('//android.widget.LinearLayout[@resource-id="ch.payyap.smartpos:id/selected_products_header"]');
    }

    get payButton() {
        return $('id=ch.payyap.smartpos:id/selected_products_pay');
    }

    get cashPayment() {
        return $('//android.widget.TextView[@resource-id="ch.payyap.smartpos:id/tvName" and @text="Cash"]');
    }

    get paymentScreen() {
        return $('//android.widget.LinearLayout');
    }

    get tipOne() {
        return $('id=ch.payyap.smartpos:id/one');
    }

    get tipTwo() {
        return $('id=ch.payyap.smartpos:id/two');
    }

    get confirmedButton() {
        return $('//android.widget.TextView[@text="Confirm"]');
    }

    get noReceiptButton() {
        return $('//android.widget.TextView[@text="No Receipt"]');
    }

    get unlinkRegister() {
        return $('//android.widget.TextView[@text="Unlink register"]');
    }

    get giftCardPaymentMethod() {
        return $('//android.widget.TextView[@resource-id="ch.payyap.smartpos:id/tvName" and @text="Gift card"]');
    }

    get giftCardNumberField() {
        return $('//android.widget.EditText[@resource-id="ch.payyap.smartpos:id/input_edit_text_qr" and @text="Scan or Type Card No."]');
    }

    get giftCardPayButton() {
        return $('//android.widget.LinearLayout[@resource-id="ch.payyap.smartpos:id/llPay"]');
    }

    get discountText() {
    return $('//android.widget.TextView[@text="Discount"]');
}

get discountEight() {
    return $('id=ch.payyap.smartpos:id/eight');
}

get addDiscountButton() {
    return $('//android.widget.TextView[@text="Add"]');
}

get selectedProductsNote() {
    return $('//android.widget.RelativeLayout[@resource-id="ch.payyap.smartpos:id/selected_products_note"]/android.widget.LinearLayout');
}

get notesEditText() {
    return $('id=ch.payyap.smartpos:id/notes_edit_text');
}

get selectedProductsHeaderIcon() {
    return $('//android.widget.LinearLayout[@resource-id="ch.payyap.smartpos:id/selected_products_header"]/android.widget.ImageView[2]');
}

get customerName() {
    return $('//android.widget.TextView[@resource-id="ch.payyap.smartpos:id/tvName" and @text="customer 2"]');
}

get invoicePaymentMethod() {
    return $('//android.widget.TextView[@resource-id="ch.payyap.smartpos:id/tvName" and @text="Invoice"]');
}

get splitPayment() {
    return $('//android.widget.TextView[@text="Split"]');
}

get cashAmountField() {
    return $('id=ch.payyap.smartpos:id/etCashAmount');
}

get showMorePaymentMethods() {
    return $('//android.widget.TextView[@text="Show more payment methods"]');
}

get invoiceAmountField() {
    return $('id=ch.payyap.smartpos:id/etInvoiceAmount');
}

get continueButton() {
    return $('id=ch.payyap.smartpos:id/btnContinue');
}

product(productName) {
    return $(
        `//android.widget.TextView[@text="${productName}"]`
    );
}

get fragmentContainer() {
    return $('//android.widget.FrameLayout[@resource-id="ch.payyap.smartpos:id/fragment_container"]/android.view.ViewGroup');
}

get addCustomerButton() {
    return $('id=ch.payyap.smartpos:id/menu_item_add_customer');
}

get submitButton() {
    return $('id=ch.payyap.smartpos:id/buttonSubmit');
}

async unlinkAndSelectRegister() {

    await this.click(
        this.registerMenu,
        "Click Register Menu"
    );

    await this.click(
        this.unlinkRegisterButton,
        "Click Unlink Register"
    );

    await this.click(
        this.unlinkRegisterOption,
        "Click Unlink Register Option"
    );

    await this.click(
        this.confirmButton,
        "Confirm Unlink Register"
    );

    await this.click(
        this.selectRegisterButton,
        "Click Select Register"
    );

    await this.click(
        this.selectRegisterOption,
        "Click Select Register Option"
    );

    await this.click(
        this.confirmButton,
        "Confirm Register Selection"
    );

    await this.assignedText.waitForDisplayed({ timeout: 10000 });
    await expect(this.assignedText).toBeDisplayed();

}

    async openTakeaway() {

        await this.navigationDrawer.waitForDisplayed({
            timeout: 80000
        });
        await this.click(
            this.navigationDrawer,
            "Click Navigation Drawer"
        );

        await this.retailSalesMenu.waitForDisplayed({ timeout: 20000 });
        await this.click(
            this.retailSalesMenu,
            "Click Retail Sales"
        );

        await this.takeAwayButton.waitForDisplayed({ timeout: 10000 });
        await this.click(
            this.takeAwayButton,
            "Select Take-away"
        );
    }

    async selectProducts(data) {

        for (const productName of data.productNames) {

            await this.searchProductField.waitForDisplayed({
                timeout: 10000
            });

            await this.click(
                this.searchProductField,
                "Click Product Search"
            );

            await this.searchProductField.clearValue();

            await driver.pause(500);

            for (const char of productName) {
                await driver.keys(char);
                await driver.pause(500);
            }

            await driver.pause(1500);

            const product = this.product(productName);

            await product.waitForDisplayed({
                timeout: 15000
            });

            await this.click(
                product,
                `Select Product : ${productName}`
            );

            await driver.pause(1000);
        }

        // await this.selectedProductHeader.waitForDisplayed({
        //     timeout: 10000
        // });

        // await this.click(
        //     this.selectedProductHeader,
        //     "Open Selected Products"
        // );

            await this.click(
            this.placeOrderButton,
            "Click Place Order"
            );

            await this.closeButton.waitForDisplayed({
                timeout: 50000
            });

            await this.click(
                this.closeButton,
                "Click Close"
            );

            await this.orderStatus.waitForDisplayed({
                timeout: 30000
            });

            await expect(this.orderStatus).toBeDisplayed();
    }

async applyDiscount(data) {

    await this.discountText.waitForDisplayed({
        timeout: 10000
    });

    await this.click(
        this.discountText,
        "Click Discount"
    );

    await this.discountEight.waitForDisplayed({
        timeout: 10000
    });

    await this.click(
        this.discountEight,
        "Select Discount"
    );

    await this.addDiscountButton.waitForDisplayed({
        timeout: 10000
    });

    await this.click(
        this.addDiscountButton,
        "Click Add"
    );

    await this.selectedProductsNote.waitForDisplayed({
        timeout: 10000
    });

    await this.click(
        this.selectedProductsNote,
        "Click Selected Products Note"
    );

    await this.notesEditText.waitForDisplayed({
        timeout: 10000
    });

    await this.click(
        this.notesEditText,
        "Click Notes"
    );

    await this.notesEditText.setValue(data.note);

    await this.click(
        this.addDiscountButton,
        "Click Add"
    );

}
async CashPayment(data) {

        await this.click(
        this.saveCustomFieldsButton,
        "Click Save Custom Fields"
        );

        await this.click(
            this.addpayButton,
            "Click pay"
        );

        await this.cashPayment.waitForDisplayed({ timeout: 30000 });
        await this.click(
            this.cashPayment,
            "Select Payment Method"
        );

}

async payWithGiftCard(data) {

    await this.payButton.waitForDisplayed({ timeout: 10000 });
        await this.click(
            this.payButton,
            "Click Pay"
    );

    await this.giftCardPaymentMethod.waitForDisplayed({
        timeout: 30000
    });

    await this.click(
        this.giftCardPaymentMethod,
        "Select Gift Card Payment"
    );

    await this.giftCardNumberField.waitForDisplayed({
        timeout: 10000
    });

    await this.click(
        this.giftCardNumberField,
        "Click Gift Card Number"
    );

    await this.giftCardNumberField.clearValue();

    await this.giftCardNumberField.setValue(
        data.giftCardNumber
    );

    await this.click(
        this.giftCardPayButton,
        "Click Gift Card Pay"
    );

    await this.paymentScreen.waitForDisplayed({ timeout: 10000 });
    await expect(this.paymentScreen).toBeDisplayed();

    await this.click(
        this.noReceiptButton,
        "Select No Receipt"
    );
}

async payWithInvoice(data) {

    // await this.selectedProductsHeaderIcon.waitForDisplayed({
    //     timeout: 10000
    // });

    // await this.click(
    //     this.selectedProductsHeaderIcon,
    //     "Click Selected Products Header"
    // );

    await this.addCustomerButton.waitForDisplayed({
    timeout: 10000
    });

    await this.click(
        this.addCustomerButton,
        "Click Add Customer"
    );

    await this.customerName.waitForDisplayed({
        timeout: 10000
    });

    await this.click(
        this.customerName,
        "Select Customer"
    );

    await this.submitButton.waitForDisplayed({
    timeout: 10000
    });

    await this.click(
        this.submitButton,
        "Click Submit"
    );

    await this.click(
        this.saveCustomFieldsButton,
        "Click Save Custom Fields"
    );

    await this.addpayButton.waitForDisplayed({ timeout: 10000 });

    await this.click(
            this.addpayButton,
            "Click pay"
        );

    await this.invoicePaymentMethod.waitForDisplayed({
        timeout: 30000
    });

    await this.click(
        this.invoicePaymentMethod,
        "Select Invoice Payment"
    );

    await this.paymentScreen.waitForDisplayed({
        timeout: 10000
    });

    await expect(this.paymentScreen).toBeDisplayed();

    // await this.noReceiptButton.waitForDisplayed({
    //     timeout: 10000
    // });

    // await this.click(
    //     this.noReceiptButton,
    //     "Select No Receipt"
    // );

    await driver.pause(8000);

       for (const productName of data.productNames) {

            await this.verifyDisplayed(
                this.product(productName),
                `Verify Product : ${productName}`
            );
        }

        await this.verifyDisplayed(
            this.fragmentContainer,
            "Verify Fragment Container"
        );

        
}

async split(data) {

    await this.selectedProductsHeaderIcon.waitForDisplayed({
        timeout: 10000
    });

    await this.click(
        this.selectedProductsHeaderIcon,
        "Click Selected Products Header"
    );

    await this.customerName.waitForDisplayed({
        timeout: 10000
    });

    await this.click(
        this.customerName,
        "Select Customer"
    );

    

    await this.payButton.waitForDisplayed({ timeout: 10000 });
        await this.click(
            this.payButton,
            "Click Pay"
    );

    await this.splitPayment.waitForDisplayed({
        timeout: 30000
    });

    await this.click(
        this.splitPayment,
        "Click Split"
    );

    await this.cashAmountField.waitForDisplayed({
        timeout: 10000
    });

    await this.click(
        this.cashAmountField,
        "Click Cash Amount"
    );

    await this.cashAmountField.setValue(
        data.cashAmount
    );

    await this.showMorePaymentMethods.waitForDisplayed({
        timeout: 10000
    });

    await this.click(
        this.showMorePaymentMethods,
        "Show More Payment Methods"
    );

    await this.invoiceAmountField.waitForDisplayed({
        timeout: 10000
    });

    await this.click(
        this.invoiceAmountField,
        "Click Invoice Amount"
    );

    await this.invoiceAmountField.setValue(
        data.invoiceAmount
    );

    await this.click(
        this.continueButton,
        "Click Continue"
    );

    await this.paymentScreen.waitForDisplayed({
        timeout: 10000
    });

    await expect(this.paymentScreen).toBeDisplayed();

    // await this.noReceiptButton.waitForDisplayed({
    //     timeout: 10000
    // });

    // await this.click(
    //     this.noReceiptButton,
    //     "Select No Receipt"
    // );
}

async applyTipsAndConfirm(data) {

        await this.verifyDisplayed(
            this.tipOne,
            "Verify Tip One is displayed"
        );

        await this.verifyDisplayed(
            this.tipTwo,
            "Verify Tip Two is displayed"
        );

        if (data.tipSelectionOne === "Yes") {
            await this.click(
                this.tipOne,
                `Select Tip ${data.tipOne}`
            );
        }

        if (data.tipSelectionTwo === "Yes") {
            await this.click(
                this.tipTwo,
                `Select Tip ${data.tipTwo}`
            );
        }

        await this.click(
            this.confirmedButton,
            "Click Confirm Payment"
        );

        await this.paymentScreen.waitForDisplayed({ timeout: 10000 });
        await expect(this.paymentScreen).toBeDisplayed();


        // await this.noReceiptButton.waitForDisplayed({ timeout: 90000 });
        // await this.click(
        //     this.noReceiptButton,
        //     "Select No Receipt"
        // );

       await driver.pause(8000);

       for (const productName of data.productNames) {

            await this.verifyDisplayed(
                this.product(productName),
                `Verify Product : ${productName}`
            );
        }

        await this.verifyDisplayed(
            this.fragmentContainer,
            "Verify Fragment Container"
        );

    }

async processPayment(data) {

    if (data.paymentMethod === "cash") {
        await this.CashPayment(data);
    }
    else if (data.paymentMethod === "giftCard") {
        await this.payWithGiftCard(data);
    }
    else if (data.paymentMethod === "payWithInvoice") {
        await this.payWithInvoice(data);
    }
    else if (data.paymentMethod === "split") {
        await this.split(data);
    }
    else {
        throw new Error(
            `Unsupported payment method: ${data.paymentMethod}`
        );
    }
}

async processDiscountNotes(data) {

    if (data.discount === "Yes") {
        await this.applyDiscount(data);
    }
}

async processTips(data) {
    if (data.tips === "Yes") {
        await this.applyTipsAndConfirm(data);
    }
}

}

module.exports = new TakeawayPage();