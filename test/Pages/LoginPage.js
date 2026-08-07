const BasePage = require('./BasePage');

class LoginPage extends BasePage {

    get email() {
        return $('id=ch.payyap.smartpos:id/sign_in_email_edit_text');
    }

    get password() {
        return $('id=ch.payyap.smartpos:id/sign_in_password_edit_text');
    }

    get signInBtn() {
        return $('//android.widget.Button[@resource-id="ch.payyap.smartpos:id/sign_in_sign_in_button"]');
    }
    get allowPermissionBtn() {
    return $('id=com.android.permissioncontroller:id/permission_allow_button');
}

    async clickAllowPermission() {
        const isDisplayed = await this.allowPermissionBtn
            .waitForDisplayed({ timeout: 10000 })
            .catch(() => false);

        if (isDisplayed) {
            await this.click(
                this.allowPermissionBtn,
                "Click Allow Permission"
            );
        }

}

    async login(email, password) {

    await this.setValue(
        this.email,
        email,
        `Enter Email : ${email}`
    );

    await this.setValue(
        this.password,
        password,
        `Enter Password : ${password}`
    );

    await this.click(
        this.signInBtn,
        "Click Sign In Button"
    );
}
}

module.exports = new LoginPage();