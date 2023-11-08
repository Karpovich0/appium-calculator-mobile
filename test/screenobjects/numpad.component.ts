import Page from "./../pageobjects/page.js";

class numpadComponent extends Page {
	elements = {
		numbers: [
			'//android.widget.Button[@resource-id="all.in.one.calculator:id/digit_0"]',
			'//android.widget.Button[@resource-id="all.in.one.calculator:id/digit_1"]',
			'//android.widget.Button[@resource-id="all.in.one.calculator:id/digit_2"]',
			'//android.widget.Button[@resource-id="all.in.one.calculator:id/digit_3"]',
			'//android.widget.Button[@resource-id="all.in.one.calculator:id/digit_4"]',
			'//android.widget.Button[@resource-id="all.in.one.calculator:id/digit_5"]',
			'//android.widget.Button[@resource-id="all.in.one.calculator:id/digit_6"]',
			'//android.widget.Button[@resource-id="all.in.one.calculator:id/digit_7"]',
			'//android.widget.Button[@resource-id="all.in.one.calculator:id/digit_8"]',
			'//android.widget.Button[@resource-id="all.in.one.calculator:id/digit_9"]',
		],
		confirmInput: '//android.widget.ImageButton[@content-desc="equals"]',
	};
	public async inputNumber(number: number): Promise<void> {
		//we split our number into array
		var arrayNumbers = ("" + number).split("");
		//then for each element of array we do a click
		for (let i = 0; i < arrayNumbers.length; i++) {
			await this.clickElement(this.elements.numbers[arrayNumbers[i]]);
		}
		await this.clickElement(this.elements.confirmInput);
	}
}

export default new numpadComponent();
