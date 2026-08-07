const allure = require('@wdio/allure-reporter').default;

class StepHelper {

    static async step(stepName, action) {
        await allure.step(stepName, async () => {
            await action();
        });
    }
}

module.exports = StepHelper;