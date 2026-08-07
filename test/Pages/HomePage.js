const BasePage = require('./BasePage');

class HomePage extends BasePage {

    get toolbarTitle() {
        return $('id=ch.payyap.smartpos:id/toolbar');
    }

    get toolbar() {
    return $('id=ch.payyap.smartpos:id/toolbar');
}

    get appTitle() {
        return $('//*[@resource-id="ch.payyap.smartpos:id/toolbar"]//android.widget.TextView');
    }

    get addUserText() {
        return $('//android.widget.TextView[@text="Add User"]');
    }

    get menuButton() {
        return $('//android.widget.ImageButton[@content-desc="Open navigation drawer"]');
    }

    get navigationDrawer() {
        return $('//android.widget.ImageButton[@content-desc="Open navigation drawer"]');
    }

    get backButton() {
        return $('//android.widget.ImageView[@resource-id="ch.payyap.smartpos:id/ivBackToAdmin"]');
    }

     get productMenu() {
        return $('//androidx.recyclerview.widget.RecyclerView[@resource-id="ch.payyap.smartpos:id/lst_menu_items"]/android.view.ViewGroup[2]');
    }

    async waitForHomeScreen() {
    await this.toolbar.waitForDisplayed({ timeout: 30000 });
}

get allBranches() {
   return $('//*[@text="All Branches"]');
        // return $('//android.widget.TextView[@text="View Branches"]/following::android.widget.TextView[@text="All Branches"][1]');
}


    async openNavigation() {

        if (await this.addUserText.isDisplayed()) {

            await this.navigationDrawer.waitForDisplayed({
                timeout: 30000
            });

            await this.click(
                this.navigationDrawer,
                "Click Navigation Drawer"
            );

        await this.productMenu.waitForDisplayed({ timeout: 10000 });
        await this.click(this.productMenu);

        } else {

            await this.navigationDrawer.waitForDisplayed({
                timeout: 10000
            });

            await this.click(
                this.navigationDrawer,
                "Click Navigation Drawer"
            );

            await this.backButton.waitForDisplayed({
            timeout: 30000
        });

        await this.click(
            this.backButton,
            "Click Back Button"
        );

        await this.productMenu.waitForDisplayed({ timeout: 80000 });
        await this.click(this.productMenu);
        }
    }

    async verifyToolbarTitle(expectedText) {
        await this.verifyText(
            this.appTitle,
            expectedText,
            `Verify Toolbar Title : ${expectedText}`
        );
    }

    async Navigation() {

        if (await this.addUserText.isDisplayed()) {

            await this.navigationDrawer.waitForDisplayed({
                timeout: 30000
            });

            await this.click(
                this.navigationDrawer,
                "Click Navigation Drawer"
            );

            await this.allBranches.waitForDisplayed({
            timeout: 20000
        });
        
        await this.allBranches.click();
            
    }else {

            await this.navigationDrawer.waitForDisplayed({
            timeout: 50000
        });

            await this.click(
                this.navigationDrawer,
                "Click Navigation Drawer"
            );

            await this.backButton.waitForDisplayed({
            timeout: 50000
        });

        await this.click(
            this.backButton,
            "Click Back Button"
        );

            await this.allBranches.waitForDisplayed({
            timeout: 20000
        });
        
        await this.allBranches.click();
            }
}

async Navigationmenu() {

        if (await this.addUserText.isDisplayed()) {

            await this.navigationDrawer.waitForDisplayed({
                timeout: 30000
            });

            await this.click(
                this.navigationDrawer,
                "Click Navigation Drawer"
            );
            
    }else {

            await this.navigationDrawer.waitForDisplayed({
            timeout: 50000
        });

            await this.click(
                this.navigationDrawer,
                "Click Navigation Drawer"
            );

            await this.backButton.waitForDisplayed({
            timeout: 50000
        });

        await this.click(
            this.backButton,
            "Click Back Button"
        );

           

    }
}
}

module.exports = new HomePage();