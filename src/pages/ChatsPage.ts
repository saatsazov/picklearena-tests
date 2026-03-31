import CommonPage from "./CommonPage";

class ChatsPage extends CommonPage {
    public get chatsTitle() { return $('(//android.widget.TextView[@text="Chats"])[1]'); }
    public get firstChatInList() { return $('~Bagrat'); }
    public get chatSearchInPutField() { return $('//android.widget.EditText[@text="Search ..."]'); }

    public async clickFirstChat() {
        await this.firstChatInList.waitForDisplayed();
        await this.firstChatInList.click();
    }

    public async clickChatSearchInPutField() {
        await this.chatSearchInPutField.waitForDisplayed();
        await this.chatSearchInPutField.click();
    }
}

export default new ChatsPage();
