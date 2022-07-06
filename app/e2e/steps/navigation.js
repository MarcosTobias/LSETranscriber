const {defineFeature, loadFeature } = require("jest-cucumber");
const feature = loadFeature("./features/navigation.feature");

defineFeature(feature, (test) => {
    beforeEach(async () => {
        await global.page.goto("http://localhost:3000");

        await page.waitForTimeout(2000);
    });
    

    test("The user can go to the about page from the main page", ({ when, then, given }) => {
        given("The user is on the main page", async () => {
            await global.page.goto("http://localhost:3000");
        });

        when("The user clicks on About", async () => {
            await new Promise(res => setTimeout(() => {
                expect(true).toBe(true)
                res()
              }, 2500))

            const button = await page.$("a#about");
            
            await button.evaluate(b => b.click());
        });

        then("The user is shown the about page", async () => {
            await new Promise(res => setTimeout(() => {
                expect(true).toBe(true)
                res()
              }, 2500))

            await expect(page).toMatch("About page");
        });
    });

    test("The user can go to the help page from the about page", ({ given, when, then }) => {
        given("The user is on the about page", async () => {
            await global.page.goto("http://localhost:3000/about");
        });

        when("The user clicks on Help", async () => {
            await new Promise(res => setTimeout(() => {
                expect(true).toBe(true)
                res()
              }, 2500))

            const button = await page.$("a#help");
            
            await button.evaluate(b => b.click());
        });

        then("The user is shown the help page", async () => {
            await new Promise(res => setTimeout(() => {
                expect(true).toBe(true)
                res()
              }, 2500))

            await expect(page).toMatch("First of all");
        });
    });

    test("The user can go to the main page from the help page", async ({ when, then, given }) => {
        given("The user is on the help page", async () => {
            await global.page.goto("http://localhost:3000/help");
        });

        when("The user clicks on LSETranscriber", async () => {
            await new Promise(res => setTimeout(() => {
                expect(true).toBe(true)
                res()
              }, 2500))

            const button = await page.$("a.mb-1");
            
            await button.evaluate(b => b.click());
        });

        then("The user is shown the main page", async () => {
            await new Promise(res => setTimeout(() => {
                expect(true).toBe(true)
                res()
              }, 2500))
              
            await expect(page).toMatch("Start/stop");
        });
    });
});

