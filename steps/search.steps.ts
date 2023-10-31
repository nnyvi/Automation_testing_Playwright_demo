import { Given, When, Then } from '@cucumber/cucumber';
import { SearchPage } from '../pages/searchPage';
import { expect } from '@playwright/test';
import { page } from '../hooks/hooks';

let searchPage: SearchPage;

//search for a product
Given('User is on the Google homepage "1"', async () => {
    searchPage = new SearchPage();
});
When('User fills "Apple" in the search input', async () => {
    searchPage.fill_txtInput('Apple');
});
When('User clicks on "Tìm trên Google" button "1"', async () => {
    searchPage.press_searchBtn();
});
Then('The "Apple" are displayed', async () => {
    await expect(page.locator("//*[contains(@class, 'CCgQ5')]")).toBeVisible();
});

//search for a link
Given('User is on the Google homepage "2"', async () => {
    searchPage = new SearchPage();
});
When('User fills "link" in the search input', async () => {
    searchPage.fill_txtInput("https://bard.google.com/");
});
When('User clicks on "Tìm trên Google" button "2"', async () => {
    searchPage.press_searchBtn();
});
Then('The "link" are displayed', async () => {
    await expect(page.locator("//div[@class='tF2Cxc']//h3[@class='LC20lb MBeuO DKV0Md']")).toBeVisible();
});

//search for a location
Given('User is on the Google homepage "3"', async () => {
    searchPage = new SearchPage();
});
When('User fills "TMA Bình Định" in the search input', async () => {
    searchPage.fill_txtInput("TMA Bình Định");
});
When('User clicks on "Tìm trên Google" button "3"', async () => {
    searchPage.press_searchBtn();
});
Then('The "TMA info" are displayed', async () => {
    await expect(page.locator("//img[@id ='lu_map']")).toBeVisible();
});

//search for image with path
Given('User is on the Google homepage 4', async () => {
    searchPage =  new SearchPage();
});
When('User clicks on the "Tìm kiếm bằng hình ảnh" button 4', async () => {
    searchPage.press_ImgIcon();
});
When('User adds "image path" into search input', async () => {
    searchPage.press_uploadBtn();
});
Then('The searched results are displayed 4', async() =>{
    await page.waitForSelector("//body[@id='yDmH0d']");
    const expectPath = await page.locator("//img[@src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQv1FVZodKhWbJ58fG1o2cPkyaLN4_Mh51mg2RpGALhqv7IC984']");
    await expect(expectPath).toBeVisible();
});
//search by image with image link
Given('User is on the Google homepage 5', async() => {
    searchPage =  new SearchPage();
});
When('User clicks on the "Tìm kiếm bằng hình ảnh" button 5', async() => {
    searchPage.press_ImgIcon();
});
When('User adds "image link" into search input', async() => {
    searchPage.fill_imgInput("https://i.pinimg.com/736x/cc/52/3f/cc523f7dc794dfed54aac0973348e541.jpg");
});
Then('The searched results are displayed 5', async() => {
    const expectLink = await page.locator("//img[@src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS180KDJeNSEHfAReDb562WClIvmFiX-_FTjIVlQDiNdzncnU3_']");
    await expect(expectLink).toBeVisible();
});
//check if accessing on the first searched page 
Given('User accesses on the Google homepage', async() => {
    searchPage =  new SearchPage();
});
When('User fills search information', async() => {
    searchPage.fill_txtInput('Apple');
});
When('User click "Xem trang đầu tiên tìm được" button', async() => {
    searchPage.press_firstPageBtn();
});
Then('User accesses on the first searched page', async() => {
    const expectLogo = await page.locator("//a[@href='/vn/']");
    await expect(expectLogo).toBeVisible();
});


