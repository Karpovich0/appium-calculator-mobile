import Page from "./../pageobjects/page.js";

class homeScreen extends Page {
	elements = {
		acceptPersonalData:
			"/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.app.Dialog/android.view.View[2]/android.view.View/android.widget.Button[1]",
		categoryButton: '//android.widget.ImageView[@resource-id="all.in.one.calculator:id/moreBtn"]',
		percentageButton: '(//android.widget.TextView[@resource-id="all.in.one.calculator:id/name"])[13]',
		lengthMode: '(//android.view.View[@resource-id="all.in.one.calculator:id/icon"])[5]',
		resetButton: '//android.widget.Button[@content-desc="Clear"]',
		confirmResetButton: '//android.widget.Button[@resource-id="android:id/button1"]',
		settingsButton: '//android.widget.Button[@content-desc="Settings"]',
	};
	public async clearPage(): Promise<void> {
		await this.clickElement(this.elements.resetButton);
		await this.clickElement(this.elements.confirmResetButton);
	}
}

export default new homeScreen();
