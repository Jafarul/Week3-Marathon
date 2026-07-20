import {test} from "@playwright/test"

test("Learn CSS selectors",async ({page}) => {


await page.goto("https://leaftaps.com/opentaps/control/main")

//username
//await page.locator('p>input').first().fill('democsr2')
//await page.locator('p>input').nth(0).fill('democsr2')
//await page.locator('input').nth(0).fill('democsr2')

await page.locator('#username').fill('democsr2')

//password
//await page.locator('label+input').nth(1).fill('crmsfa')
await page.locator('.inputLogin').nth(1).fill('crmsfa')

//login button
//await page.locator('p~p input').nth(1).click()
await page.locator('input[type="submit"]').click()


/* nth method 
first()-> nth(0)-> first match
inbetween-> nth(1)-> second match
last()-> nth(n)->last match*/

    
})