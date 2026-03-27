import CommonPage from "./CommonPage";

class LeaguesPage extends CommonPage {
    public get createLeagueButton() { return $('//*[contains(@content-desc, "Create league") or contains(@text, "Create league")]'); }
    public get leagueInList() { return $('//*[contains(@content-desc, "League of Champions") and contains(@content-desc, "Joined as Gorgonzola")]'); }
    public get firstLeagueInList() { return $('//*[contains(@content-desc, "Prodrive 1") and contains(@content-desc, "4 / 4 teams") and contains(@content-desc, "Naples")]'); }

    public async clickCreateLeagueButton() {
        await this.createLeagueButton.waitForDisplayed();
        await this.createLeagueButton.click();
    }

    public async clickLeagueInList() {
        await this.leagueInList.waitForDisplayed();
        await this.leagueInList.click();
    }

    public async clickFirstLeagueInList() {
        await this.firstLeagueInList.waitForDisplayed();
        await this.firstLeagueInList.click();
    }
}

export default new LeaguesPage();
