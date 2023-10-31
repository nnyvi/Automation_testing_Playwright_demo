import { Given, When, Then } from '@cucumber/cucumber';
import { SearchInfoPage } from '../pages/searchInfoPage';
import { expect } from '@playwright/test';
import { page } from '../hooks/hooks';

let searchInfoPage: SearchInfoPage;

//search for a product
Given('User is on the Google homepage "1"', async () => {
    searchInfoPage = new SearchInfoPage();

});
When('User fills "Apple" in the search input', async () => {
    searchInfoPage.fillInput('Apple');
});
When('User clicks on "Tìm trên Google" button "1"', async () => {
    searchInfoPage.pressButton();
});
Then('The "Apple" are displayed', async () => {
    await page.waitForSelector("//*[@class='main']");
    await expect(page.locator("//*[contains(@class, 'SPZz6b')]")).toBeVisible();
});

//search for a link
Given('User is on the Google homepage "2"', async () => {
    searchInfoPage = new SearchInfoPage();
});
When('User fills "link" in the search input', async () => {
    searchInfoPage.fillInput("https://bard.google.com/");
});
When('User clicks on "Tìm trên Google" button "2"', async () => {
    searchInfoPage.pressButton();
});
Then('The "link" are displayed', async () => {
    await page.waitForSelector("//*[@class='GyAeWb']");
    await expect(page.locator("//div[@class='tF2Cxc']//h3[@class='LC20lb MBeuO DKV0Md']")).toBeVisible();
});

//search for a location
Given('User is on the Google homepage "3"', async () => {
    searchInfoPage = new SearchInfoPage();
});
When('User fills "TMA Bình Định" in the search input', async () => {
    searchInfoPage.fillInput("TMA Bình Định");
});
When('User clicks on "Tìm trên Google" button "3"', async () => {
    searchInfoPage.pressButton();
});
Then('The "TMA info" are displayed', async () => {
    await page.waitForSelector("//*[@class='main']");
    await expect(page.locator("//img[@id ='lu_map']")).toBeVisible();
});

