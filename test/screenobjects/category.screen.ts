import Page from "./../pageobjects/page.js";

class categoryScreen extends Page {
	elements = {
		categoryAlgebraButton:
			'//android.view.ViewGroup[@resource-id="all.in.one.calculator:id/content"]/android.widget.FrameLayout[1]/android.view.ViewGroup',
		algebraHeader: '//android.widget.EditText[@resource-id="all.in.one.calculator:id/searchInput"]',
		algebraItemCategory: '(//android.widget.TextView[@resource-id="all.in.one.calculator:id/description"])[1]',
	};
}

export default new categoryScreen();
