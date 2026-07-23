import {test} from "@playwright/test"

test('Storage State',async ({page}) => {

await page.goto('https://login.salesforce.com/')
await page.locator('#username').fill('gauthami.vn@testleaf.com')
await page.locator('#password').fill('TestLeaf@123')
await page.locator('#Login').click()
await page.waitForTimeout(20000)

await page.context().storageState({path:'Data/SFlogin.json'})

    
})