import {expect, test,} from "@playwright/test"

test("Learn playwright assertions",async ({page}) => {

await page.goto("https://leaftaps.com/opentaps/control/main")

console.log(await page.title()) //Leaftaps - TestLeaf Automation Platform
console.log(page.url()) //https://leaftaps.com/opentaps/control/main

//retry assertion(for locators and page)
await expect(page).toHaveURL('https://leaftaps.com/opentaps/control/main')
await expect(page).toHaveTitle('Leaftaps - TestLeaf Automation Platform')

//non retry assertion (comparisons)
const URL=page.url()
const Title= await page.title()

expect(URL).toBe('https://leaftaps.com/opentaps/control/main')
expect(Title).toContain('Leaftaps - TestLeaf Automation Platform')


await expect(page.locator('#username')).toBeVisible()
const pwd=page.locator('#password')
await expect(pwd).toBeEmpty()
await expect(pwd).toBeEditable()
await expect(pwd).toBeEnabled()

//by default it is hard assertion-when assertion fails, execution stops in the same line.
//await expect(pwd).toBeDisabled({timeout:2000})

//soft assertion- continues to execute the next line of code
await expect.soft(pwd).toBeDisabled({timeout:2000})

await page.locator('#username').fill('demosalesmanager',{timeout:5000})
await page.locator('#password').fill('crmsfa',{timeout:5000})

console.log("Assertion completed successfully");


})