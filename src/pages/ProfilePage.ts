import CommonPage from "./CommonPage";

class ProfilePage extends CommonPage {
    public get settingsIcon() { return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup[2]/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.GroupView/com.horcrux.svg.PathView[1]'); }
    public get shareProfileIcon() { return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup[1]/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.PathView'); }
    public get editProfileButton() { return $('~Edit Profile'); }
    public get saveButton() { return $('//android.widget.TextView[@text="Save"]'); }
    public get feedTabButton() { return $('~Feed'); }
    public get matchesTabButton() { return $('~Matches'); }
    public get overviewTabButton() { return $('~Overview'); }
    public get firstMatchInList() { return $('~Test Team2, 1, Gorgonzola, 3, Final result, League of Champions'); }
    public get generalInfoBlock() { return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[10]'); }
    public get profilePictureEditButton() { return $('(//android.widget.TextView[@text="Edit"])[1]'); }
    public get coverPhotoEditButton() { return $('(//android.widget.TextView[@text="Edit"])[2]'); }
    public get fullNameInputField() { return $('//android.widget.EditText[@text="Andrii"]'); }
    public get usernameInputField() { return $('//android.widget.EditText[@text="flantoro"]'); }
    public get phoneNumberInputField() { return $('~Phone Number input'); }
    public get skillLevelButton() { return $('~Skill level, 3.0 (Novice)'); }
    public get dateOfBirthButton() { return $('~Date of birth, 02/10/2026'); }
    public get notificationsButton() { return $('~Notifications, 0'); }
    public get aboutButton() { return $('~About'); }

    public async clickSettingsIcon() {
        await this.settingsIcon.waitForDisplayed();
        await this.settingsIcon.click();
    }

    public async clickShareProfileIcon() {
        await this.shareProfileIcon.waitForDisplayed();
        await this.shareProfileIcon.click();
    }

    public async clickEditProfile() {
        await this.editProfileButton.waitForDisplayed();
        await this.editProfileButton.click();
    }

    public async clickSave() {
        await this.saveButton.waitForDisplayed();
        await this.saveButton.click();
    }

    public async clickFeedTab() {
        await this.feedTabButton.waitForDisplayed();
        await this.feedTabButton.click();
    }

    public async clickMatchesTab() {
        await this.matchesTabButton.waitForDisplayed();
        await this.matchesTabButton.click();
    }

    public async clickOverviewTab() {
        await this.overviewTabButton.waitForDisplayed();
        await this.overviewTabButton.click();
    }

    public async clickFirstMatch() {
        await this.firstMatchInList.waitForDisplayed();
        await this.firstMatchInList.click();
    }

    public async clickProfilePictureEdit() {
        await this.profilePictureEditButton.waitForDisplayed();
        await this.profilePictureEditButton.click();
    }

    public async clickCoverPhotoEdit() {
        await this.coverPhotoEditButton.waitForDisplayed();
        await this.coverPhotoEditButton.click();
    }

    public async clickNotifications() {
        await this.notificationsButton.waitForDisplayed();
        await this.notificationsButton.click();
    }

    public async clickAbout() {
        await this.aboutButton.waitForDisplayed();
        await this.aboutButton.click();
    }

    public async clickSkillLevel() {
        await this.skillLevelButton.waitForDisplayed();
        await this.skillLevelButton.click();
    }

    public async clickDateOfBirth() {
        await this.dateOfBirthButton.waitForDisplayed();
        await this.dateOfBirthButton.click();
    }
}

export default new ProfilePage();