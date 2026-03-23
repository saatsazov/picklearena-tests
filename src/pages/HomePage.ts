import CommonPage from "./CommonPage";

class HomePage extends CommonPage {
    public get courtsButton() { return $('//android.view.ViewGroup[@content-desc="Courts"]/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.GroupView/com.horcrux.svg.RectView[2]'); }
    public get eventsButton() { return $('//android.view.ViewGroup[@content-desc="Events"]/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.GroupView/com.horcrux.svg.RectView[2]'); }
    public get calendarButton() { return $('//android.view.ViewGroup[@content-desc="Calendar"]/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.GroupView/com.horcrux.svg.RectView[2]'); }
    public get teamsButton() { return $('//android.view.ViewGroup[@content-desc="Teams"]/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.GroupView/com.horcrux.svg.RectView[2]'); }
    public get ratingButton() { return $('//android.view.ViewGroup[@content-desc="Rating"]/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.GroupView/com.horcrux.svg.RectView[2]'); }

    public async clickCourtsButton() {
        await this.courtsButton.waitForDisplayed();
        await this.courtsButton.click();
    }

    public async clickEventsButton() {
        await this.eventsButton.waitForDisplayed();
        await this.eventsButton.click();
    }

    public async clickCalendarButton() {
        await this.calendarButton.waitForDisplayed();
        await this.calendarButton.click();
    }

    public async clickTeamsButton() {
        await this.teamsButton.waitForDisplayed();
        await this.teamsButton.click();
    }

    public async clickRatingButton() {
        await this.ratingButton.waitForDisplayed();
        await this.ratingButton.click();
    }
}

export default new HomePage();
