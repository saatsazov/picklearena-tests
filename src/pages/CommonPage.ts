export default class CommonPage {
    public get navigateBackIcon() { return $('//com.horcrux.svg.SvgView'); }
    public get showPasswordIcon() { return $('//android.widget.ImageView'); }
    public get notificationsIcon() { return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup'); }
    public get profileIcon() { return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ImageView'); }
    public get viewProfileButton() { return $('~View profile'); }
    public get editYourProfileButton() { return $('~Edit your profile'); }
    public get signOutButton() { return $('~Sign out'); }
    public get contextButton() { return $('(//android.widget.TextView[@text=""])[1]'); }
    public get filtersButton() { return $('~, Filters'); }
    public get mapViewButton() { return $('~Map view'); }
    public get createNewButton() { return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup[2]/com.horcrux.svg.SvgView'); }
    public get searchInputField() { return $('//android.widget.EditText[@text="Search ..."]'); }
    public get filterButton() { return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]/com.horcrux.svg.SvgView'); }

    public get homeTabButton() { return $('~Home'); }
    public get leaguesTabButton() { return $('~Leagues'); }
    public get groupsTabButton() { return $('~Groups'); }
    public get chatsTabButton() { return $('~Chats'); }
    public get moreTabButton() { return $('~More'); }

    public get newbySkillLevelButton() { return $('~Newby - 2.0 '); }
    public get begginerSkillLevelButton() { return $('~Beginner - 2.5 '); }
    public get noviceSkillLevelButton() { return $('~Novice - 3.0 '); }
    public get intermediateSkillLevelButton() { return $('~Intermediate - 3.5 '); }
    public get advancedIntermediateSkillLevelButton() { return $('~Advanced intermediate - 4.0 '); }
    public get advancedSkillLevelButton() { return $('~Advanced - 4.5 '); }
    public get expertSkillLevelButton() { return $('~Expert - 5.0 +'); }

    public async clickNavigateBack() {
        await this.navigateBackIcon.waitForDisplayed();
        await this.navigateBackIcon.click();
    }

    public async togglePasswordVisibility() {
        await this.showPasswordIcon.waitForDisplayed();
        await this.showPasswordIcon.click();
    }

    public async clickNotificationsIcon() {
        await this.notificationsIcon.waitForDisplayed();
        await this.notificationsIcon.click();
    }

    public async clickProfileIcon() {
        await this.profileIcon.waitForDisplayed();
        await this.profileIcon.click();
    }

    public async clickViewProfileButton() {
        await this.viewProfileButton.waitForDisplayed();
        await this.viewProfileButton.click();
    }

    public async clickEditYourProfileButton() {
        await this.editYourProfileButton.waitForDisplayed();
        await this.editYourProfileButton.click();
    }

    public async clickSignOutButton() {
        await this.signOutButton.waitForDisplayed();
        await this.signOutButton.click();
    }

    public async clickContextButton() {
        await this.contextButton.waitForDisplayed();
        await this.contextButton.click();
    }

    public async clickFiltersButton() {
        await this.filtersButton.waitForDisplayed();
        await this.filtersButton.click();
    }

    public async clickMapViewButton() {
        await this.mapViewButton.waitForDisplayed();
        await this.mapViewButton.click();
    }

    public async clickCreateNewButton() {
        await this.createNewButton.waitForDisplayed();
        await this.createNewButton.click();
    }

    public async enterSearchText(text: string) {
        await this.searchInputField.waitForDisplayed();
        await this.searchInputField.click();
        await this.clearInput(this.searchInputField);
        await driver.pause(1000);
        await driver.keys(text);
    }

    public async clickFilterButton() {
        await this.filterButton.waitForDisplayed();
        await this.filterButton.click();
    }

    public async clickHomeTab() {
        await this.homeTabButton.waitForDisplayed();
        await this.homeTabButton.click();
    }

    public async clickLeaguesTab() {
        await this.leaguesTabButton.waitForDisplayed();
        await this.leaguesTabButton.click();
    }

    public async clickGroupsTab() {
        await this.groupsTabButton.waitForDisplayed();
        await this.groupsTabButton.click();
    }

    public async clickChatsTab() {
        await this.chatsTabButton.waitForDisplayed();
        await this.chatsTabButton.click();
    }

    public async clickMoreTab() {
        await this.moreTabButton.waitForDisplayed();
        await this.moreTabButton.click();
    }

    public async clearInput(element: any, lengthToClear: number = 30) {
        await element.waitForDisplayed();
        await element.click();
        await driver.pause(500);
        for (let i = 0; i < lengthToClear; i++) {
            await driver.keys('\uE003');
        }
    }
}
