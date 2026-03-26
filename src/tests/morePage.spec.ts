import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import MorePage from '../pages/MorePage';
import credentials from '../data/credentials';

describe('More Page UI Elements', () => {

    before(async () => {
        await LoginPage.successfulLogin(credentials.email, credentials.password);
        await HomePage.clickMoreTab();
    });

    it('should display all navigation buttons', async () => {
        expect(await MorePage.leaguesButton.isDisplayed()).toBe(true);
        expect(await MorePage.groupsButton.isDisplayed()).toBe(true);
        expect(await MorePage.arenaButton.isDisplayed()).toBe(true);
        expect(await MorePage.calendarButton.isDisplayed()).toBe(true);
        expect(await MorePage.eventsButton.isDisplayed()).toBe(true);
        expect(await MorePage.teamsButton.isDisplayed()).toBe(true);
        expect(await MorePage.ratingButton.isDisplayed()).toBe(true);
    });

});
