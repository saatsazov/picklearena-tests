import CommonPage from "./CommonPage";

class CourtsPage extends CommonPage {
    public get showOnMapButton() { return $('~Show on map'); }
    public get firstCourtInList() { return $('//android.view.ViewGroup[@content-desc="Hello"]/android.view.ViewGroup'); }

    public async clickShowOnMapButton() {
        await this.showOnMapButton.waitForDisplayed();
        await this.showOnMapButton.click();
    }

    public async clickFirstCourt() {
        await this.firstCourtInList.waitForDisplayed();
        await this.firstCourtInList.click();
    }
}

export default new CourtsPage();