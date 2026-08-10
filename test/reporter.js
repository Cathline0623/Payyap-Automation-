const allure = require('@wdio/allure-reporter').default;

async function step(name, action) {
    await allure.step(name, async () => {
        await action();
    });
}

module.exports = {
    step
};