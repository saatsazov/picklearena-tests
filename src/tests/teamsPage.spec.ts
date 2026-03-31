import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import MorePage from '../pages/MorePage';
import TeamsPage from '../pages/TeamsPage';
import credentials from '../data/credentials';

describe('Teams Page UI Elements', () => {

    before(async () => {
        await LoginPage.successfulLogin(credentials.email, credentials.password);
        await HomePage.clickMoreTab();
        await MorePage.clickTeamsButton();
    });

    it('should display teams page elements', async () => {
        expect(await TeamsPage.teamsTitle.isDisplayed()).toBe(true);
        expect(await TeamsPage.filterIcon.isDisplayed()).toBe(true);
        expect(await TeamsPage.myTeamsTabButton.isDisplayed()).toBe(true);
        expect(await TeamsPage.allTeamsTabButton.isDisplayed()).toBe(true);
        expect(await TeamsPage.firstTeamInList.isDisplayed()).toBe(true);
    });

});
