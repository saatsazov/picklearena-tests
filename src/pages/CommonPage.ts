export default class CommonPage {
    public get navigateBackIcon() {
        return $('//com.horcrux.svg.SvgView'); 
    }

    public async clickNavigateBack() {
        await this.navigateBackIcon.waitForDisplayed();
        await this.navigateBackIcon.click();
    }
}
