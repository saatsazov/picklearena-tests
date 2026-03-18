import LoginPage from '../pages/LoginPage';
import credentials from "../data/credentials";

describe('Authentication', () => {
    it('should login successfully', async () => {
        await LoginPage.clickInitialLoginButton();
        await LoginPage.enterEmail(credentials.email);
        await LoginPage.enterPassword(credentials.password);
        await LoginPage.clickSignInButton();
        await driver.pause(10000);
    });
});
