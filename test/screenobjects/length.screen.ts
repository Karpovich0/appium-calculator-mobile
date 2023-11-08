import Page from "./../pageobjects/page.js";

class lengthScreen extends Page {
	elements = {
		inputedLengthDiv: '//android.widget.TextView[@resource-id="all.in.one.calculator:id/value" and @text="20"]',
		lengthInput: '(//android.view.View[@resource-id="all.in.one.calculator:id/valueArea"])[1]',
		defaultLength: '//android.widget.TextView[@resource-id="all.in.one.calculator:id/value" and @text="1"]',
	};
}

export default new lengthScreen();
