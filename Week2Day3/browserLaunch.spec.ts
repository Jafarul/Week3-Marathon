/* browser-> Launches browser
context->creates an isolated browser session.
page->opens a new tab within that session.  */

import {chromium, test} from "@playwright/test"

test('browser launch', async () => {

const browser= await chromium.launch({channel:"msedge",headless:false})  //browser
const context=await browser.newContext()      //context
const page=await context.newPage()            //page

await page.goto("https://leaftaps.com/opentaps/control/main")

})