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
        nextBtnQuestion: "//button[@data-step-target='3']",
        firstName: "//*[@id='firstName']",
        lastName: "//*[@id='lastName']",
        email: "//*[@id='contactForm.email']",
        address: "//*[@id='address.addressLine']",
        suburb: "//div[@id='s2id_address.locationId']",
        suburbTxt: "//*[contains(@class,'input') and contains(@id,'gen2')]",
        suburbVal: "//*[@class='select2-results'  and @id='select2-results-2']",
        ques1: "//input[@id='answers0.answer2']",
        ques2: "//input[@id='answers1.answer']",
        giveNowBtn: "//button[@id='submitButton']",
        cardNameError: "//label[@id='paymentCardName-error']",
        cardNumberError: "//label[@id='paymentCardNumber-error']",
        cardExpiryError: "//label[@id='paymentCardExpiry-error']",
        alertDanger: "//p[@class='alert alert-danger']"
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
        await page.waitForSelector(this.Elements.form, { timeout: 50000 });
        await page.click(this.Elements.nextBtn);
    }

    async verifyContactMessage(table: DataTable) {
        const errorMessage = table.raw;
        for (let i = 0; i <= errorMessage.length; i++) {
            const expectText = table.raw()[i][0];
            const actualText = await page.textContent(this.Elements.messageFail);
            expect(expectText).toBe(actualText?.trim());
        }
    }

    async fillContact(table: DataTable) {
        const amountInfo = table.raw();
        await page.locator(this.Elements.firstName).fill(amountInfo[1][0]);
        await page.locator(this.Elements.lastName).fill(amountInfo[1][1]);
        await page.locator(this.Elements.email).fill(amountInfo[1][2]);
        await page.locator(this.Elements.address).fill(amountInfo[1][3]);
        await page.dblclick(this.Elements.suburb);
        const suburbInput = page.locator(this.Elements.suburbTxt);
        await suburbInput.type(amountInfo[1][4]);
        await page.waitForTimeout(35000);
        await suburbInput.press('Enter');
    }

    async clickNextBtnQuestion() {
        await page.waitForSelector(this.Elements.form, { timeout: 50000 });
        await page.click(this.Elements.nextBtnQuestion);
    }

    async clickotherButton() {
        await page.click(this.Elements.nextBtnQuestion);
    }
    async VerifyQuestionMessage(table: DataTable) {
        const errorMessage = table.raw;
        for (let i = 0; i <= errorMessage.length; i++) {
            const expectText = table.raw()[i][0];
            const actualText = await page.textContent(this.Elements.messageFail);
            expect(actualText).toBe(expectText.trim());
        }
    }

    async fillQuestions(table: DataTable) {
        await page.locator(this.Elements.ques1).check();
        await page.locator(this.Elements.ques2).fill(table.raw()[0][0])
    }

    async clickGiveNowBtn() {
        await page.waitForSelector(this.Elements.form, { timeout: 50000 });
        await page.click(this.Elements.giveNowBtn);
    }

    async VerifyPaymentMessage(table: DataTable) {
        const errorMessage = table.raw();
        const nameExpect = await page.textContent(this.Elements.cardNameError);
        const numberExpect = await page.textContent(this.Elements.cardNumberError);
        const ExpiryExpect = await page.textContent(this.Elements.cardExpiryError);
        const alert = await page.textContent(this.Elements.alertDanger);
        expect(nameExpect).toBe(errorMessage[0][0]);
        expect(numberExpect).toBe(errorMessage[0][1]);
        expect(ExpiryExpect).toBe(errorMessage[0][2]);
        expect(alert).toBe(errorMessage[0][3])
    }
}
