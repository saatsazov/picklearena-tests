import CommonPage from "./CommonPage";

class LoginPage extends CommonPage {
    public get loginButton() {
        return $('~Log in');
    }

    public get emailInputField() {
        return $('//android.view.ViewGroup[@content-desc="Sign in, Email, Password, Or, Don\'t have an account?"]/android.view.ViewGroup[2]/android.view.ViewGroup');
    }

    public get passwordInputField() {
        return $('//android.view.ViewGroup[@content-desc="Sign in, Email, Password, Or, Don\'t have an account?"]/android.view.ViewGroup[3]/android.view.ViewGroup');
    }

    public get showPasswordIcon() {
        return $('//android.widget.ImageView');
    }

    public get signInButton() {
        return $('~login-button');
    }

    public get forgotPasswordButton() {
        return $('//android.widget.TextView[@text="Forgot password"]');
    }

    public get googleSignInButton() {
        return $('//android.widget.Button[@text="Sign in with Google"]');
    }

    public get registerButton() {
        return $('//android.widget.TextView[@text=" Register"]');
    }

    public get recoveryPasswordEmailInputField() {
        return $('//android.view.ViewGroup[@content-desc="Forgot password, Enter your email address, we\'ll send you the instructions on how to change your password, Email, Don\'t have an account?"]/android.view.ViewGroup[2]/android.view.ViewGroup');
    }

    public get sendButton() {
        return $('~send-button');
    }

    public get gotItButton() {
        return $('~Got it');
    }

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

    public async togglePasswordVisibility() {
        await this.showPasswordIcon.waitForDisplayed();
        await this.showPasswordIcon.click();
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

    public async loginFullFlow(email: string, password: string) {
        await this.clickInitialLoginButton();
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickSignInButton();
    }
}

export default new LoginPage();
