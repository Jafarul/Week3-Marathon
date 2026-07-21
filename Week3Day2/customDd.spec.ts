import {test} from "@playwright/test"

test('custom dropdowns',async ({page}) => {

await page.goto('https://www.leafground.com/select.xhtml')
await page.locator('text="Select Country"').nth(1).click()  //selects the dropdown
await page.locator('[data-label="Germany"]').click()

})