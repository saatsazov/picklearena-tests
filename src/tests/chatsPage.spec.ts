import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ChatsPage from '../pages/ChatsPage';
import credentials from '../data/credentials';

describe('Chats Page UI Elements', () => {

    before(async () => {
        await LoginPage.successfulLogin(credentials.email, credentials.password);
        await HomePage.clickChatsTab();
    });

    it('should display chats page elements', async () => {
        expect(await ChatsPage.chatSearchInPutField.isDisplayed()).toBe(true);
        expect(await ChatsPage.chatsTitle.isDisplayed()).toBe(true);
        expect(await ChatsPage.firstChatInList.isDisplayed()).toBe(true);
    });

});
