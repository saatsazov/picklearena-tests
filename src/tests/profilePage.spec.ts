import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';
import credentials from '../data/credentials';

describe('Profile Page UI Elements', () => {

    before(async () => {
        await LoginPage.successfulLogin(credentials.email, credentials.password);
        await ProfilePage.clickProfileIcon();
        await ProfilePage.clickViewProfileButton();
    });

    it('should display all main navigation buttons', async () => {
        expect(await ProfilePage.settingsIcon.isDisplayed()).toBe(true);
        expect(await ProfilePage.shareProfileIcon.isDisplayed()).toBe(true);
        expect(await ProfilePage.editProfileButton.isDisplayed()).toBe(true);
        expect(await ProfilePage.feedTabButton.isDisplayed()).toBe(true);
        expect(await ProfilePage.matchesTabButton.isDisplayed()).toBe(true);
        expect(await ProfilePage.overviewTabButton.isDisplayed()).toBe(true);
    });

    it('should display first match in list', async () => {
        await ProfilePage.clickMatchesTab();
        expect(await ProfilePage.firstMatchInList.isDisplayed()).toBe(true);
    });

    it('should display general info block', async () => {
        await ProfilePage.clickOverviewTab();
        expect(await ProfilePage.generalInfoBlock.isDisplayed()).toBe(true);
    });
});
