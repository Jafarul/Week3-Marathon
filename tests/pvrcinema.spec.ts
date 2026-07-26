import { test, chromium, expect } from '@playwright/test';

test('Launch Edge Browser', async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: false })
  const context = await browser.newContext({
   permissions: []
   })
  const page = await context.newPage();

   await page.goto("https://www.pvrcinemas.com");
   
 /*  page.on('dialog', async dialog => {
    console.log(`Dialog message: ${dialog.message()}`)
    await dialog.dismiss()
    */


    
    //Select the Location as Chennai
    await page.locator('#city>input').fill('Chennai');  ////*[@id="city_list"]/*[text()="Chennai"]
    const citySelect= page.locator('//*[@id="city_list"]/*[text()="Chennai"]')
    await citySelect.click()

    //Verify the PVR Logo is visible and the page is loaded
    await expect(page.getByRole('img', {name: 'PVR Logo'})).toBeVisible()
    console.log("PVR Logo is visible and the page is loaded.")

    //Verify the Quick Book is visible and enabled
    const quickBook = page.getByText('Movie', { exact: true })    
    const quickBookClicked = await quickBook.isEnabled();
   
    //Click on Quick Book if it is not enabled
    quickBookClicked?
      console.log("In Quick book. the Cinema is Active and visible:", quickBookClicked): await quickBook.click()
    
    //Click on Select Movie and select the movie DHAMAAL 4
    await page.locator('span').filter({ hasText: 'Select Movie' }).click()
    const movieOption = page.locator('li').filter({ hasText: 'DHAMAAL 4' }).first()
    const movieSelected="DHAMAAL 4"
    console.log(`Movie selected: ${movieSelected}`)
    await expect(movieOption).toBeVisible({ timeout: 10000 });
    await movieOption.click();


    //Click on Select Date and select Today's date
    // await page.locator('span').filter({ hasText: 'Select Date' }).click()
    const dateOption = page.locator("(//*[text()='Select Date'])[2]/following::*[contains(@class,'dropdown-panel')]//ul/li/*")
    let dateSelected;
    for (let i = 0; i < await dateOption.count(); i++) {
         await dateOption.nth(i).waitFor({ timeout: 20000 });
         dateSelected = await dateOption.nth(i).textContent()
        const currentDay = new Date().getDate().toString()
        console.log(currentDay)
        if (dateSelected && dateSelected.includes(currentDay)) {
            await dateOption.nth(i).click()
            break;
        }
        
    }    
    console.log(`Date Selected: ${dateSelected}`)


    //Click on Select Cinema and select Cinema as PVR Heritage RSL ECR Chennai
    // await page.locator('span') .filter({ hasText: 'Select Cinema' }).click()
    const cinemaOptions = page.locator("(//*[text()='Select Cinema'])[2]/following::*[contains(@class,'dropdown-panel')]//ul/li/*")
    await expect(cinemaOptions.nth(0)).toBeVisible({ timeout: 5000 });
    const cinemaSelected = (await cinemaOptions.nth(0).innerText())?.trim()
    
    let length = cinemaSelected.length
    console.log(`Length of Cinema Name: ${length}`)
    console.log(`Cinema Selected: ${cinemaSelected}`)
    await cinemaOptions.nth(0).click()
   
    let maxLength = 26
    let cineName
    if (length > maxLength) {
        cineName = cinemaSelected.slice(0, maxLength-3) + "..."   
    }
    console.log(`Cinema Name after truncation: ${cineName}`)

    //Click on Select Timing and select Timing    
    const timingSelect = page.locator("(//*[text()='Select Timing'])[2]/following::*[contains(@class,'dropdown')]//ul/li/*/*[1]")
    const timingStateSelect = page.locator("(//*[text()='Select Timing'])[2]/following::*[contains(@class,'dropdown')]//ul/li")

    let enabledTimingFound = false

    for (let i = 0; i < await timingSelect.count(); i++) {
        const timingOption = timingSelect.nth(i)
        const timingText = await timingSelect.textContent()
        const timingState = timingStateSelect.nth(i)
        const isTimingEnabled = await timingState.getAttribute('class').then(className => !className?.includes('disabled'))

        console.log(`Timing Option: ${timingText} | Enabled: ${isTimingEnabled}`)

        if (isTimingEnabled) {
            await timingOption.click();
            console.log(`Selected Timing: ${timingText}`);
            enabledTimingFound = true;
            break;
        }
    }

    if (!enabledTimingFound) {
        await page.locator("(//*[text()='"+cineName+"'])[2]").click()
        const cinemaSelect = page.locator("(//*[text()='"+cineName+"'])[2]/following::*[contains(@class,'dropdown-panel')]//ul/li/*");

        for (let i = 0; i < await cinemaSelect.count(); i++) {
            const cinemaOption = cinemaSelect.nth(i);
            const cinemaName = await cinemaOption.textContent();

            if (!cinemaName) {
                continue;
            }

            console.log(`Checking cinema: ${cinemaName}`);
            await cinemaOption.click();

            await page.locator('span').filter({ hasText: 'Select Timing' }).click();
            const timingOptionsForCinema = page.locator("(//*[text()='Select Timing'])[2]/following::*[contains(@class,'dropdown')]//ul/li/*/*[1]");

            for (let j = 0; j < await timingOptionsForCinema.count(); j++) {
                const timingForCinema = timingOptionsForCinema.nth(j);
                const timingTextForCinema = await timingForCinema.textContent();
                const timingStateforCinema = timingStateSelect.nth(j)
                const isTimingEnabledForCinema = await timingStateforCinema.getAttribute('class').then(className => !className?.includes('disabled'));

                console.log(`Timing for selected cinema: ${timingTextForCinema} | Enabled: ${isTimingEnabledForCinema}`);

                if (isTimingEnabledForCinema) {
                    await timingForCinema.click();
                    console.log(`Selected Timing for cinema ${cinemaName}: ${timingTextForCinema}`);
                    enabledTimingFound = true;
                    break;
                }
            }

            if (enabledTimingFound) {
                break;
            }
        }
    }

    if (!enabledTimingFound) {
        console.log('No enabled timing found for any cinema.');
    }


    // Click on Proceed to Book
    await page.getByRole('button', {name:"Submit"}).click()
    console.log("Clicked on Proceed to Book")

  /*   //Verfiy the Adult Terms and Conditions is visible
    await expect.soft(page.locator('.adult-terms')).toBeVisible({timeout: 500})
    if(await page.locator('.adult-terms').isVisible()){
        console.log("Adult Terms and Conditions is visible")    
        await page.getByRole('button', { name: 'Accept' }).click()
    }else {
        console.log("Adult Terms and Conditions is not visible")
    } */

    
    //Verfiy the Terms and Conditions is visible
    await expect(page.getByRole('heading', { name: 'Terms & Conditions'})).toBeVisible({timeout: 2000})
    if(await page.getByRole('heading', { name: 'Terms & Conditions'}).isVisible()) {
        console.log("Terms and Conditions is visible")
        await page.getByRole('button', { name: 'Accept' }).click()
    }else {
        console.log("Terms and Conditions is not visible")
    }

    //Verify the landing page is loaded for Seat Selection and the SCREEN is visible
    await expect.soft(page.getByText('SCREEN', { exact: true })).toBeVisible()
    console.log("Seat selection-SCREEN is visible")

    //Select the Seats based on the Availability checking the Seats from A row to the Last row and from Left to Right
    const rowLocator = page.locator("tr.seats-row")
    const rowCount = await rowLocator.count()

    let seatNumber;
    let seatSelected = false

    // Loop in reverse so the last <tr> (Row A) is first
    for (let rowIndex = rowCount - 1; rowIndex >= 0; rowIndex--) {
    const row = rowLocator.nth(rowIndex)

    // Convert row index to alphabet (A, B, C...)
    const rowLetter = String.fromCharCode(65 + (rowCount - 1 - rowIndex))
    console.log(`Checking Row: ${rowLetter}`)

    // Get all columns in the row
    const colLocator = row.locator("td.seats-col")
    const colCount = await colLocator.count()

    for (let colIndex = 0; colIndex < colCount && !seatSelected; colIndex++) {
      const col = colLocator.nth(colIndex)

      // Find the seat span inside the column
      const seat = col.locator("span")
      const seatCount = await seat.count()

      if (seatCount > 0) {
        seatNumber = (await seat.textContent())?.trim()
        const seatId = await seat.getAttribute("id")
        const seatClass = await seat.getAttribute("class")

        if (seatClass?.includes("seat-current-pvr")) {
          console.log(`Row ${rowLetter}, Column ${colIndex + 1}, Seat ${seatNumber} is AVAILABLE`)
          await seat.click()
           seatSelected = true
        } else {
          console.log(`Row ${rowLetter}, Column ${colIndex + 1}, Seat ${seatNumber} is NOT available`)
        }
      }
      
    }
}

        //Verify the Movie and the Seat Number selected in the Booking Summary
        expect(page.getByRole('heading', {name: movieSelected})).toBeVisible
        expect(page.locator('div', {hasText: seatNumber})).toBeVisible

        //Check the Total Price of the ticket
        const totalAmount =await page.locator("//*[@class='grand-total']/following-sibling::*/*").innerText()
        console.log(`Grand Total of the Ticket: Rs.${totalAmount}`)

        //Click on Proceed
        await page.getByRole('button', {name: 'Proceed'}).screenshot()
        await page.getByRole('button', {name: 'Proceed'}).click()
        await page.context().close()


})