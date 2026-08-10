const LOCATORS = require('../locators/app.locators');
const TEST_DATA = require('../data/testData');

const {
    randomCourseName
} = require('../utils/randomData');

async function openCourses() {

    const courses = await $(LOCATORS.courses.courses);

    await courses.waitForDisplayed({
        timeout: TEST_DATA.timeouts.medium
    });

    await courses.click();

    console.log("Courses opened.");

}

async function createCourse(active = true) {

    // +
    const add = await $(LOCATORS.courses.addButton);

    await add.waitForDisplayed({
        timeout: TEST_DATA.timeouts.medium
    });

    await add.click();

    // Active toggle
    const toggle = await $(LOCATORS.courses.activeToggle);

    await toggle.waitForDisplayed({
        timeout: TEST_DATA.timeouts.medium
    });

    const checked = await toggle.getAttribute("checked");

    if ((checked === "true") !== active) {
        await toggle.click();
    }

    // Course name
    const courseName = randomCourseName();

    const nameField = await $(LOCATORS.courses.courseName);

    await nameField.waitForDisplayed({
        timeout: TEST_DATA.timeouts.medium
    });

    await nameField.setValue(courseName);

    console.log(`Course: ${courseName}`);

    // Choose colour
const picker = await $(LOCATORS.courses.colourPicker);

await picker.waitForDisplayed({
    timeout: TEST_DATA.timeouts.medium
});

await picker.click();

const colours = await $$(LOCATORS.courses.colourOption);

if (colours.length === 0) {
    throw new Error("No colour options found.");
}

const randomColour =
    colours[Math.floor(Math.random() * colours.length)];

await randomColour.click();

    // Apply
    const apply = await $(LOCATORS.courses.applyColour);

    await apply.waitForDisplayed({
        timeout: TEST_DATA.timeouts.medium
    });

    await apply.click();

    // Save
    const save = await $(LOCATORS.courses.save);

    await save.waitForDisplayed({
        timeout: TEST_DATA.timeouts.medium
    });

    await save.click();

    console.log("Course created.");

}

module.exports = {
    openCourses,
    createCourse
};