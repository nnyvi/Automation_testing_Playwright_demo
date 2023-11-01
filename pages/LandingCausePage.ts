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
        suburb: "//label[@for='s2id_autogen1']"
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
        await page.waitForSelector(this.Elements.form, { timeout: 40000 });
        await page.click(this.Elements.nextBtn);
    }

    async verifyMultiMessage(table: DataTable) {
        const errorMessage = table.raw;
        for (let i = 0; i <= errorMessage.length; i++) {
            const expectText = table.raw()[0][i];
            const actualText = await page.textContent(this.Elements.messageFail);
            expect(expectText).toBe(actualText?.trim());
        }
    }
}
