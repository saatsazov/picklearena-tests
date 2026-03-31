import CommonPage from "./CommonPage";

class TeamsPage extends CommonPage {
    public get teamsTitle() { return $('//android.widget.TextView[@text="Teams"]'); }
    public get myTeamsTabButton() { return $('~My teams'); }
    public get allTeamsTabButton() { return $('~All teams'); }
    public get firstTeamInList() { return $('//*[contains(@content-desc, "Gorgonzola") and contains(@content-desc, "Andrii")]'); }

    public async clickMyTeamsTab() {
        await this.myTeamsTabButton.waitForDisplayed();
        await this.myTeamsTabButton.click();
    }

    public async clickAllTeamsTab() {
        await this.allTeamsTabButton.waitForDisplayed();
        await this.allTeamsTabButton.click();
    }

    public async clickFirstTeam() {
        await this.firstTeamInList.waitForDisplayed();
        await this.firstTeamInList.click();
    }
}

export default new TeamsPage();
