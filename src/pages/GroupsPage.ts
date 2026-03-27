import CommonPage from "./CommonPage";

class GroupsPage extends CommonPage {
    public get createGroupButton() { return $('//*[contains(@content-desc, "Create group") or contains(@text, "Create group")]'); }
    public get myGroupInList() { return $('//*[contains(@content-desc, "Test Group1") and contains(@content-desc, "2 members")]'); }
    public get joinGroupButton() { return $('(//android.widget.Button[@content-desc="Request to join"])[1]'); }
    public get firstGroupInList() { return $('//*[contains(@content-desc, "Top Secret") and contains(@content-desc, "Czechia")]'); }

    public async clickCreateGroupButton() {
        await this.createGroupButton.waitForDisplayed();
        await this.createGroupButton.click();
    }

    public async clickMyGroupInList() {
        await this.myGroupInList.waitForDisplayed();
        await this.myGroupInList.click();
    }

    public async clickJoinGroupButton() {
        await this.joinGroupButton.waitForDisplayed();
        await this.joinGroupButton.click();
    }

    public async clickFirstGroupInList() {
        await this.firstGroupInList.waitForDisplayed();
        await this.firstGroupInList.click();
    }
}

export default new GroupsPage();
