import CommonPage from "./CommonPage";

class EventPage extends CommonPage {
    public get firstEventInList() { return $('~Get together, Public, Nice, Sun, August 17, 2025 2:07 PM, Prague, Czechia, 7/4 participants'); }
    public get joinEventButton() { return $('(//android.widget.Button[@content-desc="Join Event"])[1]'); }

    public async clickFirstEvent() {
        await this.firstEventInList.waitForDisplayed();
        await this.firstEventInList.click();
    }

    public async clickJoinEventButton() {
        await this.joinEventButton.waitForDisplayed();
        await this.joinEventButton.click();
    }
}

export default new EventPage();
