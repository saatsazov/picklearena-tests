import CommonPage from "./CommonPage";

class RegistrationPage extends CommonPage {

    public get joinForFreeButton() { return $('~Join for free'); }
    public get emailInputField() { return $('//android.view.ViewGroup[@content-desc="Create an account, Email, Password, Or, Already have an account?"]/android.view.ViewGroup[2]/android.view.ViewGroup'); }
    public get passwordInputField() { return $('//android.view.ViewGroup[@content-desc="Create an account, Email, Password, Or, Already have an account?"]/android.view.ViewGroup[3]/android.view.ViewGroup'); }
    public get nextButton() { return $('~Sign in button'); }
    public get signInButton() { return $('//android.widget.TextView[@text=" Sign in"]'); }
    public get fullNameInputField() { return $('//android.widget.EditText[@text="Write a name..."]'); }
    public get locationInputField() { return $('//android.widget.TextView[@text="Write location ..."]'); }
    public get searchLocationIcon() { return $('//android.view.ViewGroup[@content-desc="Move the map"]/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.PathView'); }
    public get neededLocationInputField() { return $('//android.widget.EditText'); }
    public get neededLocationButton() { return $('~Lvivo gatvė, Vilnius, Vilnius City Municipality, Lithuania'); }
    public get confirmLocationButton() { return $('~Confirm'); }
    public get phoneNumberInputField() { return $('~Phone Number input'); }
    public get maleGenderCheckbox() { return $('//android.view.ViewGroup[@content-desc="Male"]/android.view.ViewGroup'); }
    public get femaleGenderCheckbox() { return $('//android.view.ViewGroup[@content-desc="Female"]/android.view.ViewGroup'); }
    public get continueButton() { return $('~Continue'); }
    public get datePickerButton() { return $('id=com.picklearena.app:id/pickerWrapper'); }
    public get usernameInputField() { return $('//android.widget.EditText'); }
    public get usernameGenerateButton() { return $('//android.widget.TextView[@text="Auto generate"]'); }

    public get newbySkillLevelButton() { return $('~Newby - 2.0 '); }
    public get begginerSkillLevelButton() { return $('~Beginner - 2.5 '); }
    public get noviceSkillLevelButton() { return $('~Novice - 3.0 '); }
    public get intermediateSkillLevelButton() { return $('~Intermediate - 3.5 '); }
    public get advancedIntermediateSkillLevelButton() { return $('~Advanced intermediate - 4.0 '); }
    public get advancedSkillLevelButton() { return $('~Advanced - 4.5 '); }
    public get expertSkillLevelButton() { return $('~Expert - 5.0 +'); }

    public get finishButton() { return $('~Finish'); }
    public get letsGoButton() { return $('~Let\'s go!'); }

    public async clickJoinForFree() {
        await this.joinForFreeButton.waitForDisplayed();
        await this.joinForFreeButton.click();
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

    public async clickNext() {
        await this.nextButton.waitForDisplayed();
        await this.nextButton.click();
    }

    public async clickSignIn() {
        await this.signInButton.waitForDisplayed();
        await this.signInButton.click();
    }

    public async enterFullName(name: string) {
        await this.fullNameInputField.waitForDisplayed();
        await this.fullNameInputField.click();
        await driver.pause(1000);
        await driver.keys(name);
    }

    public async clickLocationInput() {
        await this.locationInputField.waitForDisplayed();
        await this.locationInputField.click();
    }

    public async clickSearchLocationIcon() {
        await this.searchLocationIcon.waitForDisplayed();
        await this.searchLocationIcon.click();
    }

    public async searchAndSelectNeededLocation(locationText: string) {
        await this.neededLocationInputField.waitForDisplayed();
        await this.neededLocationInputField.click();
        await driver.pause(1000);
        await driver.keys(locationText);

        await this.neededLocationButton.waitForDisplayed();
        await this.neededLocationButton.click();
    }

    public async clickConfirmLocation() {
        await this.confirmLocationButton.waitForDisplayed();
        await this.confirmLocationButton.click();
    }

    public async enterPhoneNumber(number: string) {
        await this.phoneNumberInputField.waitForDisplayed();
        await this.phoneNumberInputField.click();
        await driver.pause(1000);
        await driver.keys(number);
    }

    public async selectGender(gender: 'male' | 'female') {
        if (gender === 'male') {
            await this.maleGenderCheckbox.waitForDisplayed();
            await this.maleGenderCheckbox.click();
        } else {
            await this.femaleGenderCheckbox.waitForDisplayed();
            await this.femaleGenderCheckbox.click();
        }
    }

    public async clickContinue() {
        await this.continueButton.waitForDisplayed();
        await this.continueButton.click();
    }

    public async clickDatePicker() {
        await this.datePickerButton.waitForDisplayed();
        await this.datePickerButton.click();
    }

    public async enterUsername(username: string) {
        await this.usernameInputField.waitForDisplayed();
        await this.usernameInputField.click();
        await driver.pause(1000);
        await driver.keys(username);
    }

    public async autoGenerateUsername() {
        await this.usernameGenerateButton.waitForDisplayed();
        await this.usernameGenerateButton.click();
    }

    public async selectSkillLevel(level: 'Newby' | 'Beginner' | 'Novice' | 'Intermediate' | 'Advanced intermediate' | 'Advanced' | 'Expert') {
        let levelButton;
        switch (level) {
            case 'Newby': levelButton = this.newbySkillLevelButton; break;
            case 'Beginner': levelButton = this.begginerSkillLevelButton; break;
            case 'Novice': levelButton = this.noviceSkillLevelButton; break;
            case 'Intermediate': levelButton = this.intermediateSkillLevelButton; break;
            case 'Advanced intermediate': levelButton = this.advancedIntermediateSkillLevelButton; break;
            case 'Advanced': levelButton = this.advancedSkillLevelButton; break;
            case 'Expert': levelButton = this.expertSkillLevelButton; break;
        }
        if (levelButton) {
            await levelButton.waitForDisplayed();
            await levelButton.click();
        }
    }

    public async clickFinish() {
        await this.finishButton.waitForDisplayed();
        await this.finishButton.click();
    }

    public async clickLetsGo() {
        await this.letsGoButton.waitForDisplayed();
        await this.letsGoButton.click();
    }
}

export default new RegistrationPage();