/* const browser= await chromium.launch({channel:"msedge",headless:false})  //browser
const context=await browser.newContext()      //context
const page=await context.newPage()            //page
 */

import {test} from "@playwright/test"

test("page fixture",async ({page}) => {

await page.goto("https://www.google.com/")

console.log(await page.title())
console.log( page.url())
   
})