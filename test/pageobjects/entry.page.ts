import { browser } from "@wdio/globals";
import Page from "./page.js";

class Entry extends Page {
	elements = {
		// categoryButton: '//android.widget.ImageView[@resource-id="all.in.one.calculator:id/moreBtn"]',
		// categoryAlgebraButton:
		// 	'//android.view.ViewGroup[@resource-id="all.in.one.calculator:id/content"]/android.widget.FrameLayout[1]/android.view.ViewGroup',
		// algebraHeader: '//android.widget.EditText[@resource-id="all.in.one.calculator:id/searchInput"]',
		// algebraItemCategory: '(//android.widget.TextView[@resource-id="all.in.one.calculator:id/description"])[1]',
		// percentageButton: '(//android.widget.TextView[@resource-id="all.in.one.calculator:id/name"])[13]',
		// percentageTitle: '//android.widget.FrameLayout[@content-desc="Percentage"]',
		//selectPercentageMode: '(//android.view.View[@resource-id="all.in.one.calculator:id/valueArea"])', - delete
		//percentageMode: '(//androidx.cardview.widget.CardView[@resource-id="all.in.one.calculator:id/item"])[3]', - delete
		// inputPercentageOne: '(//android.view.View[@resource-id="all.in.one.calculator:id/valueArea"])[2]',
		// inputPercentageTwo: '(//android.view.View[@resource-id="all.in.one.calculator:id/valueArea"])[3]',
		// percentageResultOne: '//android.widget.TextView[@resource-id="all.in.one.calculator:id/value" and @text="160"]',
		// percentageResultTwo: '//android.widget.TextView[@resource-id="all.in.one.calculator:id/value" and @text="40"]',
		// lengthMode: '(//android.view.View[@resource-id="all.in.one.calculator:id/icon"])[5]',
		// inputedLengthDiv: '//android.widget.TextView[@resource-id="all.in.one.calculator:id/value" and @text="20"]',
		// lengthInput: '(//android.view.View[@resource-id="all.in.one.calculator:id/valueArea"])[1]',
		// resetButton: '//android.widget.Button[@content-desc="Clear"]',
		// confirmResetButton: '//android.widget.Button[@resource-id="android:id/button1"]',
		// defaultLength: '//android.widget.TextView[@resource-id="all.in.one.calculator:id/value" and @text="1"]',
		// searchInput: '//android.widget.EditText[@resource-id="all.in.one.calculator:id/searchInput"]',
		// algebraResult: '(//android.widget.TextView[@resource-id="all.in.one.calculator:id/description"])[1]',
		// settingsButton: '//android.widget.Button[@content-desc="Settings"]',
		// measuringUnits:
		// 	'//android.widget.TextView[@resource-id="all.in.one.calculator:id/title" and @text="Measuring Units"]',
		// imperialUnitsRadioButton:
		// 	'//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="Imperial"]',
		// imperialUnitsTitl:
		// 	'//android.widget.TextView[@resource-id="all.in.one.calculator:id/caption" and @text="Imperial"]',
	};
	// 	public async clearPage(): Promise<void> {
	// 		await this.clickElement(this.elements.resetButton);
	// 		await this.clickElement(this.elements.confirmResetButton);}
}

export default new Entry();
