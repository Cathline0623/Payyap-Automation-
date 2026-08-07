const allure = require('@wdio/allure-reporter').default;

class BasePage {

    async click(element, stepName = "Click Element") {
        allure.addStep(stepName);
        await element.waitForDisplayed();
        await element.click();
    }

    async setValue(element, value, stepName = "Enter Value") {
        allure.addStep(stepName);
        await element.waitForDisplayed();
        await element.setValue(value);
    }

    async verifyText(element, text, stepName = "Verify Text") {
        allure.addStep(stepName);
        await element.waitForDisplayed();
        await expect(element).toHaveText(text);
    }

    async getText(element, stepName = "Get Text") {
    allure.addStep(stepName);
    await element.waitForDisplayed();
    return await element.getText();
}

    async scrollToElement(element, stepName = "Scroll To Element") {
        allure.addStep(stepName);
        await element.scrollIntoView();
    }

    async scrollDown(stepName = "Scroll Down") {
        allure.addStep(stepName);

        await browser.execute('mobile: swipeGesture', {
            left: 500,
            top: 1500,
            width: 300,
            height: 800,
            direction: 'up',
            percent: 0.35
        });
    }

    async scrollUntilVisible(element, stepName = "Scroll Until Element Visible") {
        allure.addStep(stepName);

        while (!(await element.isExisting())) {
            const canScrollMore = await driver.execute('mobile: scrollGesture', {
                left: 100,
                top: 300,
                width: 800,
                height: 1200,
                direction: 'down',
                percent: 0.7
            });

            if (!canScrollMore) {
                throw new Error('Element not found after scrolling');
            }
        }
    }

    async verifyDisplayed(element, stepName) {
    allure.addStep(stepName);

    await element.waitForDisplayed({ timeout: 10000 });
    await expect(element).toBeDisplayed();
    }

    async verifyText(element, expectedText, stepName) {
        allure.addStep(stepName);

        await element.waitForDisplayed({ timeout: 10000 });
        await expect(element).toHaveText(expectedText);
    }

    async typeSlowly(element, text, stepName) {
    allure.addStep(stepName);

    await element.waitForDisplayed({ timeout: 10000 });
    await element.clearValue();

    for (const char of text) {
        await element.addValue(char);
        await driver.pause(150);
    }
    }
    // async attachScreenshot(name = "Screenshot") {
    //     const screenshot = await browser.takeScreenshot();

    //     allure.addAttachment(
    //         name,
    //         Buffer.from(screenshot, 'base64'),
    //         'image/png'
    //     );
    // }
}

module.exports = BasePage;