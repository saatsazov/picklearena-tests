import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import MorePage from '../pages/MorePage';
import CalendarPage from '../pages/CalendarPage';
import credentials from '../data/credentials';

describe('Calendar Page UI Elements', () => {

    before(async () => {
        await LoginPage.successfulLogin(credentials.email, credentials.password);
        await HomePage.clickMoreTab();
        await MorePage.clickCalendarButton();
    });

    it('should display calendar page elements', async () => {
        expect(await CalendarPage.calendarTitle.isDisplayed()).toBe(true);
        expect(await CalendarPage.leftArrowButton.isDisplayed()).toBe(true);
        expect(await CalendarPage.rightArrowButton.isDisplayed()).toBe(true);
    });
});
