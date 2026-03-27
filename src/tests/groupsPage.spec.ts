import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import GroupsPage from '../pages/GroupsPage';
import credentials from '../data/credentials';

describe('Groups Page UI Elements', () => {

    before(async () => {
        await LoginPage.successfulLogin(credentials.email, credentials.password);
        await HomePage.clickGroupsTab();
    });

    it('should display groups page elements', async () => {
        await GroupsPage.clickCloseIconButton();
        expect(await GroupsPage.searchInputField.isDisplayed()).toBe(true);
        expect(await GroupsPage.createGroupButton.isDisplayed()).toBe(true);
        expect(await GroupsPage.filtersButton.isDisplayed()).toBe(true);
        expect(await GroupsPage.myGroupInList.isDisplayed()).toBe(true);
        expect(await GroupsPage.joinGroupButton.isDisplayed()).toBe(true);
        expect(await GroupsPage.firstGroupInList.isDisplayed()).toBe(true);
    });

});
