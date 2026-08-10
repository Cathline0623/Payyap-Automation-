const Auth = require('../keywords/auth');
const Navigation = require('../keywords/navigation');
const Courses = require('../keywords/courses');

describe('Course Creation', () => {

    it('Creates a course successfully', async function () {

        this.timeout(300000);

        await Auth.login();

        await Navigation.selectTestBranch();

        await Navigation.openBranchSettings();

        await Navigation.openRestaurant();

        await Courses.openCourses();

        await Courses.createCourse(true);

        console.log("Course creation flow completed.");

    });

});