import CommonPage from "./CommonPage";

class LoginPage extends CommonPage {
    public get loginButton() { return $('~Log in'); }
    public get emailInputField() { return $('//android.view.ViewGroup[@content-desc="Sign in, Email, Password, Or, Don\'t have an account?"]/android.view.ViewGroup[2]/android.view.ViewGroup'); }
    public get passwordInputField() { return $('//android.view.ViewGroup[@content-desc="Sign in, Email, Password, Or, Don\'t have an account?"]/android.view.ViewGroup[3]/android.view.ViewGroup'); }
    public get signInButton() { return $('~Sign in button'); }
    public get forgotPasswordButton() { return $('//android.widget.TextView[@text="Forgot password"]'); }
    public get googleSignInButton() { return $('//android.widget.Button[@text="Sign in with Google"]'); }
    public get registerButton() { return $('//android.widget.TextView[@text=" Register"]'); }
    public get recoveryPasswordEmailInputField() { return $('//android.view.ViewGroup[@content-desc="Forgot password, Enter your email address, we\'ll send you the instructions on how to change your password, Email, Don\'t have an account?"]/android.view.ViewGroup[2]/android.view.ViewGroup'); }
    public get sendButton() { return $('~Send password reset request'); }
    public get gotItButton() { return $('~Got it'); }
    public get invalidEmailPasswordError() { return $('//android.widget.TextView[@text="Invalid email or password"]'); }
    public get missingCredentialsError() { return $('//android.widget.TextView[@text="Please enter both email and password."]'); }

    public async clickInitialLoginButton() {
        await this.loginButton.waitForDisplayed();
        await this.loginButton.click();
    }

    public async enterEmail(email: string) {
        await this.emailInputField.waitForDisplayed();
        await this.emailInputField.click();
        await driver.pause(1000);
        await driver.keys(email);
    }

    public async enterPassword(password: string) {
        await this.passwordInputField.waitForDisplayed();
        await this.passwordInputField.click();
        await driver.pause(1000);
        await driver.keys(password);
    }

    public async clickSignInButton() {
        await this.signInButton.waitForDisplayed();
        await this.signInButton.click();
    }

    public async clickForgotPasswordButton() {
        await this.forgotPasswordButton.waitForDisplayed();
        await this.forgotPasswordButton.click();
    }

    public async clickGoogleSignInButton() {
        await this.googleSignInButton.waitForDisplayed();
        await this.googleSignInButton.click();
    }

    public async clickRegisterButton() {
        await this.registerButton.waitForDisplayed();
        await this.registerButton.click();
    }

    public async enterRecoveryEmail(email: string) {
        await this.recoveryPasswordEmailInputField.waitForDisplayed();
        await this.recoveryPasswordEmailInputField.click();
        await driver.pause(1000);
        await driver.keys(email);
    }

    public async clickSendButton() {
        await this.sendButton.waitForDisplayed();
        await this.sendButton.click();
    }

    public async clickGotItButton() {
        await this.gotItButton.waitForDisplayed();
        await this.gotItButton.click();
    }

    public async isInvalidEmailPasswordErrorVisible() {
        await this.invalidEmailPasswordError.waitForDisplayed();
        return await this.invalidEmailPasswordError.isDisplayed();
    }

    public async isMissingCredentialsErrorVisible() {
        await this.missingCredentialsError.waitForDisplayed();
        return await this.missingCredentialsError.isDisplayed();
    }

    public async successfulLogin(email: string, password: string) {
        await this.clickInitialLoginButton();
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickSignInButton();
        await driver.pause(5000);
    }
}

export default new LoginPage();
