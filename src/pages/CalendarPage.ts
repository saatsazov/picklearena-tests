import CommonPage from "./CommonPage";

class CalendarPage extends CommonPage {
    public get calendarTitle() { return $('//android.widget.TextView[@text="Calendar"]'); }
    public get rightArrowButton() { return $('(//android.widget.ImageView[@resource-id="undefined.rightArrow"])[2]'); }
    public get leftArrowButton() { return $('(//android.widget.ImageView[@resource-id="undefined.leftArrow"])[2]'); }

    public async clickRightArrowButton() {
        await this.rightArrowButton.waitForDisplayed();
        await this.rightArrowButton.click();
    }

    public async clickLeftArrowButton() {
        await this.leftArrowButton.waitForDisplayed();
        await this.leftArrowButton.click();
    }
}

export default new CalendarPage();
