import { expect, Locator } from "playwright/test";
import { page } from "../hooks/hooks";
import { FileChooser } from '@playwright/test';

export class SearchPage {
    readonly txtInput: Locator;
    readonly searchBtn: Locator;
    readonly firstPageBtn: Locator;
    readonly ImgIcon: Locator;
    readonly uploadBtn: Locator;
    readonly imgInput: Locator;
    readonly searchImgBtn: Locator;
    readonly Apple: Locator;
    readonly Link: Locator;
    readonly Location: Locator;
    readonly expectLink: Locator;
    readonly expectPath: Locator;
    readonly expectFirst: Locator;
    
    constructor() {
        this.txtInput = page.locator("//*[@class='gLFyf']");
        this.searchBtn = page.getByRole('button', { name: "Tìm trên Google" });
        this.firstPageBtn = page.getByRole('button', { name: "Xem trang đầu tiên tìm được" });
        this.ImgIcon = page.locator("//*[@class='Gdd5U']");
        this.uploadBtn = page.locator("//span[@jsname='tAPGc']");
        this.imgInput = page.locator("//*[@class='cB9M7']");
        this.searchImgBtn = page.locator("//div[@class='Qwbd3']");
        this.Apple = page.locator("//*[contains(@class, 'CCgQ5')]");
        this.Link = page.locator("//div[@class='tF2Cxc']//h3[@class='LC20lb MBeuO DKV0Md']");
        this.Location = page.locator("//img[@id ='lu_map']");
        this.expectLink = page.locator("//img[@src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS180KDJeNSEHfAReDb562WClIvmFiX-_FTjIVlQDiNdzncnU3_']");
        this.expectPath = page.locator("//img[@src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQv1FVZodKhWbJ58fG1o2cPkyaLN4_Mh51mg2RpGALhqv7IC984']");
        this.expectFirst = page.locator("//a[@href='/vn/']");
    }
    async fill_txtInput(txt: string) {
        await this.txtInput.click();
        await this.txtInput.fill(txt);
    }
    async press_searchBtn() {
        await this.searchBtn.click();
        await page.waitForSelector("//*[@class='main']");
    }
    async press_firstPageBtn() {
        await this.firstPageBtn.click();
        await page.waitForTimeout(30000);
    }
    async press_ImgIcon() {
        await this.ImgIcon.click();
        await page.waitForSelector("//*[@class='KoWHpd']");
    }
    async press_uploadBtn() {
        await this.uploadBtn.click();
        const [fileChooserEvent] = await Promise.all([
            page.waitForEvent('filechooser').catch(() => null),
            page.waitForLoadState('networkidle'), 
        ]);
        if (page.isClosed()) {
            return (`Error closed`);
        } else if (fileChooserEvent !== null) {
            const fileChooser = fileChooserEvent as FileChooser;
            // Use fileChooser as normal
            await fileChooser.setFiles('C:\Users\intern.nnyvi\Playwright_BDD_demo\img\test.jpg');
        } else {
            // return notice when not receiving filechooser
            return (`Error: No file chooser found`);
        }
    }
    async fill_imgInput(link: string) {
        await this.imgInput.click();
        await this.imgInput.fill(link);
        await this.searchImgBtn.click();
        await page.waitForSelector("//body[@id='yDmH0d']");
    }
}
