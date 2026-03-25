import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import EventPage from '../pages/EventPage';
import credentials from '../data/credentials';

describe('Event Page UI Elements', () => {

    before(async () => {
        await LoginPage.successfulLogin(credentials.email, credentials.password);
        await HomePage.clickEventsButton();
    });

    it('should display event page elements', async () => {
        expect(await EventPage.firstEventInList.isDisplayed()).toBe(true);
        expect(await EventPage.joinEventButton.isDisplayed()).toBe(true);
    });

});
