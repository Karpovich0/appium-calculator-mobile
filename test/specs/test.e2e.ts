import { expect, driver, browser } from "@wdio/globals";
import entry from "./../screenobjects/all.screen.js";

const SEARCH_VALUE = "Algebra";

describe("Calculator", () => {
	it("Categories functionality", async () => {
		await entry.homeScreen.clickElement(entry.homeScreen.elements.categoryButton);
		await entry.homeScreen.clickElement(entry.categoryScreen.elements.categoryAlgebraButton);
		await expect(await entry.homeScreen.isElementDisplayed(entry.categoryScreen.elements.algebraHeader)).toBe(true);
		await expect(await entry.homeScreen.isElementDisplayed(entry.categoryScreen.elements.algebraItemCategory)).toBe(
			true
		);
		await entry.homeScreen.goBack();
	});
	it("Percentage functionality", async () => {
		await entry.homeScreen.clickElement(entry.homeScreen.elements.percentageButton);
		await entry.homeScreen.clickElement(entry.percentageScreen.elements.inputPercentageOne);
		await entry.numpadComponent.inputNumber(200);
		await entry.homeScreen.clickElement(entry.percentageScreen.elements.inputPercentageTwo);
		await entry.numpadComponent.inputNumber(20);
		await expect(
			await entry.homeScreen.isElementDisplayed(entry.percentageScreen.elements.percentageResultOne)
		).toBe(true);
		await expect(
			await entry.homeScreen.isElementDisplayed(entry.percentageScreen.elements.percentageResultTwo)
		).toBe(true);
		await entry.homeScreen.goBack();
	});
	it("Reset value functionality", async () => {
		await entry.homeScreen.clickElement(entry.homeScreen.elements.lengthMode);
		//fill input
		await entry.homeScreen.clickElement(entry.lengthScreen.elements.defaultLength);

		await entry.numpadComponent.inputNumber(20);

		await expect(await entry.homeScreen.isElementDisplayed(entry.lengthScreen.elements.inputedLengthDiv)).toBe(
			true
		);

		await entry.homeScreen.clearPage();

		await expect(await entry.homeScreen.isElementDisplayed(entry.lengthScreen.elements.defaultLength)).toBe(true);
		await entry.homeScreen.goBack();
	});
	it("Search functionality", async () => {
		await entry.homeScreen.clickElement(entry.searchScreen.elements.searchInput);
		await entry.homeScreen.setElementInputValue(entry.searchScreen.elements.searchInput, SEARCH_VALUE);
		await expect(await entry.homeScreen.getElement(entry.searchScreen.elements.algebraResult)).toHaveText(
			SEARCH_VALUE
		);
		await entry.homeScreen.goBack();
	});
	it("Change measuring units", async () => {
		await entry.homeScreen.clickElement(entry.homeScreen.elements.settingsButton);
		await entry.homeScreen.clickElement(entry.settingsScreen.elements.measuringUnits);
		await entry.homeScreen.clickElement(entry.settingsScreen.elements.imperialUnitsRadioButton);
		await expect(await entry.homeScreen.isElementDisplayed(entry.settingsScreen.elements.imperialUnitsTitl)).toBe(
			true
		);
	});
});
