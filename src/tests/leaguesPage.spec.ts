import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import LeaguesPage from '../pages/LeaguesPage';
import credentials from '../data/credentials';

describe('Leagues Page UI Elements', () => {

    before(async () => {
        await LoginPage.successfulLogin(credentials.email, credentials.password);
        await HomePage.clickLeaguesTab();
    });

    it('should display leagues page elements', async () => {
        await LeaguesPage.clickCloseIconButton();
        expect(await LeaguesPage.searchInputField.isDisplayed()).toBe(true);
        expect(await LeaguesPage.createLeagueButton.isDisplayed()).toBe(true);
        expect(await LeaguesPage.filtersButton.isDisplayed()).toBe(true);
        expect(await LeaguesPage.leagueInList.isDisplayed()).toBe(true);
        expect(await LeaguesPage.firstLeagueInList.isDisplayed()).toBe(true);
    });

});
