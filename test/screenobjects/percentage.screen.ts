import Page from "./../pageobjects/page.js";

class percentageScreen extends Page {
	elements = {
		inputPercentageOne: '(//android.view.View[@resource-id="all.in.one.calculator:id/valueArea"])[2]',
		inputPercentageTwo: '(//android.view.View[@resource-id="all.in.one.calculator:id/valueArea"])[3]',
		percentageResultOne: '//android.widget.TextView[@resource-id="all.in.one.calculator:id/value" and @text="160"]',
		percentageResultTwo: '//android.widget.TextView[@resource-id="all.in.one.calculator:id/value" and @text="40"]',
	};
}
export default new percentageScreen();
