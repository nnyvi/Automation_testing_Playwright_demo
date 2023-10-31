import { Given, When, Then} from "@cucumber/cucumber";
import { expect } from "playwright/test";
import { page } from "../hooks/hooks";

Given('User accesses on the Google homepage', async() => {
    await expect(page.locator("//img[@alt='Google']")).toBeVisible();
});
When('User fills search information', async() => {
    const input = await page.locator("//*[@class='gLFyf']");
    await input.click();
    await input.fill("Apple");
});
When('User click "Xem trang đầu tiên tìm được" button', async() => {
    const button = await page.getByRole('button', {name: "Xem trang đầu tiên tìm được"});
    await button.click();
});

Then('User accesses on the first searched page', async() => {
    await page.waitForSelector("//body[contains(@class, 'page-home')]");
    await expect(page).toHaveURL("https://www.apple.com/vn/");
});
