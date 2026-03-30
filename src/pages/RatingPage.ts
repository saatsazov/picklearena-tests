import CommonPage from "./CommonPage";

class RatingPage extends CommonPage {
    public get myCountryTabButton() { return $('//*[contains(@content-desc, "My country") or contains(@text, "My country")]'); }
    public get allTabButton() { return $('//*[contains(@content-desc, "All") or contains(@text, "All")]'); }
    public get ratingTitle() { return $('//android.widget.TextView[@text="Rating"]'); }
    public get firstPlayerInList() { return $('//*[contains(@content-desc, "Logan") and contains(@content-desc, "Expert")]'); }

    public async clickMyCountryTab() {
        await this.myCountryTabButton.waitForDisplayed();
        await this.myCountryTabButton.click();
    }

    public async clickAllTab() {
        await this.allTabButton.waitForDisplayed();
        await this.allTabButton.click();
    }

    public async clickFirstPlayer() {
        await this.firstPlayerInList.waitForDisplayed();
        await this.firstPlayerInList.click();
    }
}

export default new RatingPage();
