import LoginPage from '../pages/LoginPage';
import credentials from "../data/credentials";
import data from "../data/data";

describe('Authentication', () => {

    it('should show error when trying to login with empty credentials', async () => {
        await LoginPage.clickInitialLoginButton();
        await LoginPage.clickSignInButton();

        expect(await LoginPage.isMissingCredentialsErrorVisible()).toBe(true);
        await LoginPage.clickNavigateBack();
    });

    it('should show error when trying to login with invalid credentials', async () => {
        await LoginPage.clickInitialLoginButton();
        await LoginPage.enterEmail(data.invalidEmail);
        await LoginPage.enterPassword(data.invalidPassword);
        await LoginPage.clickSignInButton();

        expect(await LoginPage.isInvalidEmailPasswordErrorVisible()).toBe(true);
        await LoginPage.clickNavigateBack();
    });

    it('should reset password', async () => {
        await LoginPage.clickInitialLoginButton();
        await LoginPage.clickForgotPasswordButton();
        await LoginPage.enterRecoveryEmail(credentials.email);
        await LoginPage.clickSendButton();
        await LoginPage.clickGotItButton();
        await LoginPage.clickNavigateBack();
    });

    it('should login successfully', async () => {
        await LoginPage.enterEmail(credentials.email);
        await LoginPage.enterPassword(credentials.password);
        await LoginPage.clickSignInButton();

        await driver.pause(5000);
    });
});
