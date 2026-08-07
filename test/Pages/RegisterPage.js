const BasePage = require('./BasePage');

class RegisterPage extends BasePage {

    get navigationDrawer() {
        return $('//android.widget.ImageButton[@content-desc="Open navigation drawer"]');
    }
     get registerMenu() {
        return $('//androidx.recyclerview.widget.RecyclerView[@resource-id="ch.payyap.smartpos:id/lst_menu_items"]/android.view.ViewGroup[3]');
    }

    get firstRegister() {
        return $('(//android.view.ViewGroup[@resource-id="ch.payyap.smartpos:id/swipe_reveal_layout"])[1]/android.widget.FrameLayout[1]/android.view.ViewGroup');
    }
    get closeCashRegister() {
        return $('//android.widget.TextView[@text="Close the cash register"]');
    }

    get nextButton() {
        return $('id=ch.payyap.smartpos:id/next');
    }

    get submitButton() {
        return $('//android.widget.TextView[@text="Submit"]');
    }

    get closedRegister() {
        return $('(//android.view.ViewGroup[@resource-id="ch.payyap.smartpos:id/swipe_reveal_layout"])[1]/android.widget.FrameLayout[1]/android.view.ViewGroup');
    }



    get openCashRegister() {
        return $('//android.widget.TextView[@text="Open the cash register"]');
    }

    get openButton() {
        return $('//android.widget.TextView[@text="Open"]');
    }

    // get registerOpenedToast() {
    //     return $('//android.widget.Toast[@text="Register has been opened successfully"]');
    // }
    get registerOpenedToast() {
    return $('//*[contains(@text,"Register has been opened successfully")]');
    }

    get closenote() {
    return $('//android.widget.EditText[@resource-id="ch.payyap.smartpos:id/edit_text_200"]');
    }

    get cashbookOption() {
    return $('//android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout[4]');
}

    get reportText() {
        return $('//android.widget.ScrollView/android.widget.LinearLayout');
    }

    get backButton() {
        return $('id=ch.payyap.smartpos:id/back');
    }


async registerclose(data) {

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
            "Select Retail Register"
        );

        await this.click(
        this.closeCashRegister,
        "Click Close the Cash Register"
         );


        await this.click(
        this.nextButton,
        "Click Next Button - Step 1"
    );

    // await this.closenote.waitForDisplayed({ timeout: 10000 });
    //     await this.click(
    //     this.closenote,
    //     "Click Close notes"
    // );

    // await this.setValue(
    //     this.closenote,
    //     "close",
    //     "Enter notes"
    // );

    await this.nextButton.waitForDisplayed({
        timeout: 30000
    });

    await this.click(
        this.nextButton,
        "Click Next Button - Step 2"
    );

    // await this.cashbookOption.click();

    // const text = await this.reportText.getText();

    // console.log("Cashbook Report:");
    // console.log(text);

    // await this.backButton.click();

    // return text;


    await this.nextButton.waitForDisplayed({
        timeout: 30000
    });

    await this.click(
        this.nextButton,
        "Click Next Button - Step 3"
    );

    //  await this.nextButton.waitForDisplayed({
    //     timeout: 30000
    // });

    // await this.click(
    //     this.nextButton,
    //     "Click Next Button - Step 4"
    // );


    await this.click(
        this.submitButton,
        "Click Submit"
    );

    await this.verifyDisplayed(
        this.closedRegister,
        "Verify Register Closed Successfully"
    );
}
async registerOpen() {


    await this.firstRegister.waitForDisplayed({
    timeout: 30000
    });

    await this.click(
        this.firstRegister,
        "Select Retail Register"
    );

    await this.click(
        this.openCashRegister,
        "Click Open the Cash Register"
    );

    await this.click(
        this.openButton,
        "Click Open Button"
    );

    // await this.verifyDisplayed(
    //     this.registerOpenedToast,
    //     "Verify Register Opened Successfully Toast"
    // );

    //const toast = $('//*[contains(@text,"Register has been opened successfully")]');

    // await toast.waitForDisplayed();

    // await expect(toast).toBeDisplayed();
}
    
}
    


module.exports = new RegisterPage();