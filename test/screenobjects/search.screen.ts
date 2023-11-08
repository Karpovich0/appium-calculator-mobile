import Page from "./../pageobjects/page.js";

class searchScreen extends Page {
	elements = {
		searchInput: '//android.widget.EditText[@resource-id="all.in.one.calculator:id/searchInput"]',
		algebraResult: '(//android.widget.TextView[@resource-id="all.in.one.calculator:id/description"])[1]',
	};
}

export default new searchScreen();
