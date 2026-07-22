import {test,expect} from "@playwright/test"

test("Learn Playwright Locators",async ({page}) => {

await page.goto("https://login.salesforce.com/")
const login= page.getByAltText('Salesforce login')
await expect(login).toBeVisible()

await page.getByRole('textbox',{name:"Username"}).fill('gauthami.vn@testleaf.com')
//await page.getByLabel('Username').fill("gauthami.vn@testleaf.com")

await page.locator('label').filter({hasText:"Password"}).fill("TestLeaf@123")

await page.getByRole('button',{name:"Log In"}).click()

await page.getByTitle("App Launcher").first().click() //nth(0)

//await page.locator('.slds-icon-waffle').filter({hasText:"App Launcher"}).click()

//await page.getByRole('button',{name:"View All Applications"}).click()

await page.getByText('View All',{exact:true}).first().click()
await page.waitForTimeout(5000)
await page.getByPlaceholder("Search apps or items...",{exact:true}).fill("Accounts")

//await page.getByRole('combobox',{name:"Search apps or items..."}).fill("Accounts")
})








    
