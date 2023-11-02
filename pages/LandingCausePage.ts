import { expect } from "playwright/test";
import { page } from "../hooks/hooks";
import { DataTable } from "@cucumber/cucumber";

export class LandingCausePage {
    private Elements = {
        donateBtn: "//button[contains(text(), 'Donate Now')]",
        messageFail: "//ul[@class='list-unstyled']//li",
        amountRadio: "//input[contains(@id, 'Option0')]/parent::label",
        form: "//div[@class='donation-payment py-0']",
        nextBtn: "//button[@data-step-target='2']",
        firstName: "//*[@id='firstName']",
        lastName: "//*[@id='lastName']",
        email: "//*[@id='contactForm.email']",
        address: "//*[@id='address.addressLine']",
        suburb: "//div[@id='s2id_address.locationId']",
        suburbTxt: "//*[contains(@class,'input') and contains(@id,'gen2')]",
        suburbVal: "//*[contains(@aria-activedescendant,'23')]",
    }

    async clickDonateBtn() {
        await page.click(this.Elements.donateBtn);
    }

    async selectAmount() {
        await page.click(this.Elements.amountRadio);
    }

    async verifyMessage(table: DataTable) {
        const expectText = table.raw()[0][0];
        const actualText = await page.textContent(this.Elements.messageFail);
        expect(expectText).toBe(actualText?.trim());
    }

    async clickNextBtn() {
        await page.waitForSelector(this.Elements.form, { timeout: 70000 });
        await page.click(this.Elements.nextBtn);
    }

    async verifyMultiMessage(table: DataTable) {
        const errorMessage = table.raw;
        for (let i = 0; i <= errorMessage.length; i++) {
            const expectText = table.raw()[i][0];
            const actualText = await page.textContent(this.Elements.messageFail);
            expect(expectText).toBe(actualText?.trim());
        }
    }

    async fillAmount(table: DataTable) {
        // const amountInfo = table.raw();
        // for (let i = 0; i <= (amountInfo[0].length-1); i++){
        //     amountInfo[0][i] = amountInfo[1][i];

        // }
        const amountInfo = table.raw();
        await page.locator(this.Elements.firstName).fill(amountInfo[1][0]);
        await page.locator(this.Elements.lastName).fill(amountInfo[1][1]);
        await page.locator(this.Elements.email).fill(amountInfo[1][2]);
        await page.locator(this.Elements.address).fill(amountInfo[1][3]);
        await page.dblclick(this.Elements.suburb);
        await page.locator(this.Elements.suburbTxt).type(amountInfo[1][4]);
        await page.waitForSelector(this.Elements.suburbVal);
        await page.hover(this.Elements.suburbVal);
        await page.click(this.Elements.suburbVal);
    }

    async VerifyMessageContact(table: DataTable){
        const errorMessage = table.raw;
        for (let i = 0; i <= errorMessage.length; i++) {
            const expectText = table.raw()[i][0];
            const actualText = await page.textContent(this.Elements.messageFail);
            expect(expectText).toBe(actualText?.trim());
        }
    }
    
}
