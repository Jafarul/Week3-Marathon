import {test} from "@playwright/test"

test("Basic Xpath",async({page})=>{

await page.goto("https://leaftaps.com/opentaps/control/main")
await page.locator('//input[@id="username"]').fill('democsr2')
await page.locator('//label[text()="Password"]').fill("crmsfa")
await page.locator('//input[contains(@class,"decorative")]').click()
await page.locator('//a[normalize-space()="CRM/SFA"]').click()


})