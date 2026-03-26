import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import credentials from '../data/credentials';

describe('Home Page UI Elements', () => {

    before(async () => {
        await LoginPage.successfulLogin(credentials.email, credentials.password);
    });

    it('should display home page navigation buttons', async () => {
        expect(await HomePage.courtsButton.isDisplayed()).toBe(true);
        expect(await HomePage.eventsButton.isDisplayed()).toBe(true);
        expect(await HomePage.calendarButton.isDisplayed()).toBe(true);
        expect(await HomePage.teamsButton.isDisplayed()).toBe(true);
        expect(await HomePage.ratingButton.isDisplayed()).toBe(true);
    });

    it('should display all bottom navigation buttons', async () => {
        expect(await HomePage.homeTabButton.isDisplayed()).toBe(true);
        expect(await HomePage.leaguesTabButton.isDisplayed()).toBe(true);
        expect(await HomePage.groupsTabButton.isDisplayed()).toBe(true);
        expect(await HomePage.chatsTabButton.isDisplayed()).toBe(true);
        expect(await HomePage.moreTabButton.isDisplayed()).toBe(true);
    });

    it('should display header icons (notifications and profile)', async () => {
        expect(await HomePage.notificationsIcon.isDisplayed()).toBe(true);
        expect(await HomePage.profileIcon.isDisplayed()).toBe(true);
    });
});
