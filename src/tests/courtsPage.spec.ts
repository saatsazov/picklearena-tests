import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import CourtsPage from '../pages/CourtsPage';
import credentials from '../data/credentials';

describe('Courts Page UI Elements', () => {

    before(async () => {
        await LoginPage.successfulLogin(credentials.email, credentials.password);
        await HomePage.clickCourtsButton();
    });

    it('should display courts page elements', async () => {
        expect(await CourtsPage.showOnMapButton.isDisplayed()).toBe(true);
        expect(await CourtsPage.firstCourtInList.isDisplayed()).toBe(true);
    });
});
