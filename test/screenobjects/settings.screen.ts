import Page from "./../pageobjects/page.js";

class settingsScreen extends Page {
	elements = {
		measuringUnits:
			'//android.widget.TextView[@resource-id="all.in.one.calculator:id/title" and @text="Measuring Units"]',
		imperialUnitsRadioButton:
			'//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="Imperial"]',
		imperialUnitsTitl:
			'//android.widget.TextView[@resource-id="all.in.one.calculator:id/caption" and @text="Imperial"]',
	};
}

export default new settingsScreen();
