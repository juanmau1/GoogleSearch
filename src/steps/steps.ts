import { Given, When, Then } from '@wdio/cucumber-framework';

import searchPage from '../pageobjects/search.page.ts';
import resultPage from '../pageobjects/result.page.ts';

Given(/^I run a google search for the word (\w+)$/, async (text) => {
    await searchPage.open();
    await searchPage.searchFor(text);
    (await searchPage.googleSearchBtn).click();
});

When(/^Open the second result in new tab$/, async () => {
    await browser.waitUntil(
        async () => {
            return (await resultPage.results[1]).isDisplayed();
        },
        {timeout:5000,
        timeoutMsg:' Error - no results displayed ',
        interval:500}
    );
    // await resultPage.results[1].scrollIntoView();
    const urlSecondResult = await resultPage.results[1].$('a').getAttribute('href')
    await browser.newWindow(urlSecondResult, {windowFeatures:'',windowName:''});
    const h = await browser.getWindowHandles()    
    await browser.switchToWindow(await h[1])
});

Then(/^Check that text (.*) is written on the page title$/, async (text) => {
    const title = await browser.getTitle()
    await expect(title).toContain(text);
});

