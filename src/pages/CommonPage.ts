export default class CommonPage {
    public get navigateBackIcon() { return $('//com.horcrux.svg.SvgView'); }
    public get showPasswordIcon() { return $('//android.widget.ImageView'); }

    public async clickNavigateBack() {
        await this.navigateBackIcon.waitForDisplayed();
        await this.navigateBackIcon.click();
    }

    public async togglePasswordVisibility() {
        await this.showPasswordIcon.waitForDisplayed();
        await this.showPasswordIcon.click();
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
