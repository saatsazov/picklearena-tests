import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import MorePage from '../pages/MorePage';
import RatingPage from '../pages/RatingPage';
import credentials from '../data/credentials';

describe('Rating Page UI Elements', () => {

    before(async () => {
        await LoginPage.successfulLogin(credentials.email, credentials.password);
        await HomePage.clickMoreTab();
        await MorePage.clickRatingButton();
    });

    it('should display rating page elements', async () => {
        expect(await RatingPage.ratingTitle.isDisplayed()).toBe(true);
        expect(await RatingPage.myCountryTabButton.isDisplayed()).toBe(true);
        expect(await RatingPage.allTabButton.isDisplayed()).toBe(true);
        expect(await RatingPage.firstPlayerInList.isDisplayed()).toBe(true);
    });
});
