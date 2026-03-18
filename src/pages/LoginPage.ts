
class LoginPage {
    public get btnInitialLogin() {
        return $('~Log in');
    }

    public get inputEmail() {
        return $('//android.view.ViewGroup[@content-desc="Sign in, Email, Password, Or, Don\'t have an account?"]/android.view.ViewGroup[2]/android.view.ViewGroup');
    }

    public get inputPassword() {
        return $('//android.view.ViewGroup[@content-desc="Sign in, Email, Password, Or, Don\'t have an account?"]/android.view.ViewGroup[3]/android.view.ViewGroup');
    }

    public get iconShowPassword() {
        return $('//android.widget.ImageView');
    }

    public get btnSignIn() {
        return $('~Sign in button');
    }

    public async clickInitialLoginButton() {
        await this.btnInitialLogin.waitForDisplayed();
        await this.btnInitialLogin.click();
    }

    public async enterEmail(email: string) {
        await this.inputEmail.waitForDisplayed();
        await this.inputEmail.click();
        await driver.pause(1000);
        await driver.keys(email);
    }

    public async enterPassword(password: string) {
        await this.inputPassword.waitForDisplayed();
        await this.inputPassword.click();
        await driver.pause(1000);
        await driver.keys(password);
    }

    public async togglePasswordVisibility() {
        await this.iconShowPassword.waitForDisplayed();
        await this.iconShowPassword.click();
    }

    public async clickSignInButton() {
        await this.btnSignIn.waitForDisplayed();
        await this.btnSignIn.click();
    }

    public async loginFullFlow(email: string, password: string) {
        await this.clickInitialLoginButton();
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickSignInButton();
    }
}

export default new LoginPage();
