import {test} from "@playwright/test"

test.use(
    {
        storageState:'Data/SFlogin.json'
    }
)

test('Storage State',async ({page}) => {

await page.goto('https://orgfarm-6d28dcc693-dev-ed.develop.lightning.force.com/lightning/page/home')

await page.locator('[title="App Launcher"]').click()


})