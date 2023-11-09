import { config as sharedConfig } from "./wdio.conf.js";
import { driver } from "@wdio/globals";
import dotenv from "dotenv";
import entry from "./../test/screenobjects/all.screen.js";

dotenv.config(); // Load environment variables from .env file
export const config = {
	...sharedConfig,
	user: process.env.BROWSERSTACK_USERNAME,
	key: process.env.BROWSERSTACK_ACCESS_KEY,
	hostname: "hub.browserstack.com",

	beforeTest: async function () {
		(await entry.homeScreen.isElementDisplayed(entry.homeScreen.elements.acceptPersonalData)) &&
			(await entry.homeScreen.clickElement(entry.homeScreen.elements.acceptPersonalData));
		await driver.closeApp();
		await driver.activateApp("all.in.one.calculator");
		await driver.setOrientation("PORTRAIT");
	},

	capabilities: [
		{
			"bstack:options": {
				deviceName: "Samsung Galaxy S22 Ultra",
				osVersion: "12.0",
				deviceOrientation: "portrait",
			},
		},
	],

	services: [
		[
			"browserstack",
			{
				app: process.env.BROWSERSTACK_ANDROID_APP_ID || "bs://429443e9df65e5f4ec9ec14fafb5866ab6727abc",
				buildIdentifier: "${BUILD_NUMBER}",
				// opts: { forcelocal: false, localIdentifier: "webdriverio-appium-app-browserstack-repo" },
				browserstackLocal: true,
				testObservability: true,
				testObservabilityOptions: {
					projectName: "BrowserStack Android app testing",
					buildName: "browserstack Android build",
				},
				debug: true,
				networkLogs: true,
				consoleLogs: "warn",
			},
		],
	],
};
