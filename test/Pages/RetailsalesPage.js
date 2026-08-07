const BasePage = require('./BasePage');

class RetailSalesPage extends BasePage {

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

    get confirmButton() {
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
    return $('//android.widget.TextView[@resource-id="ch.payyap.smartpos:id/customer_name" and @text="customer 2"]');
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

get transactionMenu() {
    return $('//androidx.recyclerview.widget.RecyclerView[@resource-id="ch.payyap.smartpos:id/lst_menu_items"]/android.view.ViewGroup[5]');
}

get firstTransaction() {
    return $('//androidx.recyclerview.widget.RecyclerView[@resource-id="ch.payyap.smartpos:id/recycler_view_transactions"]/android.widget.LinearLayout[1]');
}

get transactionItems() {
    return $('//android.widget.TextView[@resource-id="ch.payyap.smartpos:id/transaction_items"]');
}

transactionAmount(amount) {
    return $(
        `(//android.widget.TextView[@text="CHF ${amount}"])[2]`
    );
}

    async createRetailSale(data) {

        // await this.navigationDrawer.waitForDisplayed({
        //     timeout: 80000
        // });

        //     await this.click(
        //         this.navigationDrawer,
        //         "Click Navigation Drawer"
        //     );
            
        await this.registerMenu.waitForDisplayed({ timeout: 10000 });
        await this.click(
            this.registerMenu,
            "Open Register Menu"
        );

        await this.firstRegister.waitForDisplayed({ timeout: 10000 });
        await this.click(
            this.firstRegister,
            "Retail Register"
        );

        // await this.selectRegisterText.waitForDisplayed({ timeout: 10000 });
        await this.click(
            this.selectRegisterText,
            "Select Register"
        );

        await this.click(
            this.okButton,
            "Click OK"
        );

        await this.assignedText.waitForDisplayed({ timeout: 10000 });
        await expect(this.assignedText).toBeDisplayed();

        await this.click(
            this.navigationDrawer,
            "Open Navigation Drawer"
        );

        await this.retailSalesMenu.waitForDisplayed({ timeout: 10000 });
        await this.click(
            this.retailSalesMenu,
            "Open Retail Sales"
        );




        // await this.searchProductField.waitForDisplayed({ timeout: 10000 });
        // await this.click(
        //     this.searchProductField,
        //     "Click Product Search"
        // );

        // await this.searchProductField.clearValue();


        // for (const char of data.productName) {

        //     await driver.keys(char);

        //     await driver.pause(300);
        // }

        // await this.firstProduct.waitForDisplayed({
        //     timeout: 10000
        // });

        // await this.click(
        //     this.firstProduct,
        //     `Select Product : ${data.productName}`
        // );

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
    
        await this.selectedProductHeader.waitForDisplayed({ timeout: 10000 });
        await this.click(
            this.selectedProductHeader,
            "Open Selected Products"
        );

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


        await this.payButton.waitForDisplayed({ timeout: 10000 });
            await this.click(
                this.payButton,
                "Click Pay"
        );

        await this.cashPayment.waitForDisplayed({ timeout: 30000 });
        await this.click(
            this.cashPayment,
            "Select Payment Method"
        );

        await this.paymentScreen.waitForDisplayed({ timeout: 10000 });
        await expect(this.paymentScreen).toBeDisplayed();

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

    // await this.paymentScreen.waitForDisplayed({ timeout: 10000 });
    // await expect(this.paymentScreen).toBeDisplayed();

    // await this.click(
    //     this.noReceiptButton,
    //     "Select No Receipt"
    // );
}

async payWithInvoice() {

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
            this.confirmButton,
            "Click Confirm"
        );

        await this.paymentScreen.waitForDisplayed({ timeout: 10000 });
        await expect(this.paymentScreen).toBeDisplayed();


        // await this.noReceiptButton.waitForDisplayed({ timeout: 30000 });
        // await this.click(
        //     this.noReceiptButton,
        //     "Select No Receipt"
        // );
    }
async transaction(data) {

    await this.transactionMenu.waitForDisplayed({
        timeout: 10000
    });

    await this.click(
        this.transactionMenu,
        "Open Transactions"
    );

    await this.firstTransaction.waitForDisplayed({
        timeout: 10000
    });

    await this.click(
        this.firstTransaction,
        "Open First Transaction"
    );

    // Verify Products
    await this.transactionItems.waitForDisplayed({
        timeout: 10000
    });

    const actualTransactionItems =
        await this.transactionItems.getText();

    for (const productName of data.productNames) {

        expect(actualTransactionItems).toContain(
            productName
        );
    }

    // Calculate expected amount
    const expectedAmount =
        Number(data.cashAmount) +
        Number(data.invoiceAmount);

    // Verify Amount
    const amount = this.transactionAmount(
        expectedAmount.toFixed(2)
    );

    await amount.waitForDisplayed({
        timeout: 10000
    });

    await expect(amount).toBeDisplayed();
}
}

module.exports = new RetailSalesPage();