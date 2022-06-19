const { defineFeature, loadFeature } = require("jest-cucumber");
const feature = loadFeature("./features/no-hand-prediction.feature");

defineFeature(feature, (test) => {
    beforeEach(async () => {
        await global.page.goto("http://localhost:3000");
    });

    test("The user is on the main page", ({ given, when, then, and }) => {
        given("A prediction", async () => {
            await expect(page).toMatch("Start/stop");
        });

        when("The user clicks on start recording", async() => {
            await expect(page).toClick("button", { text: "Start/stop" });
        });

        and("Waits two seconds with no hand present on his screen", async () => {
            await page.waitForTimeout(2000);
        });

        then("The prediction adds a blank", async () => {
            await expect(page).toMatch(" ");
        });

    });
});