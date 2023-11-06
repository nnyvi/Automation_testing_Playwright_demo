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
        giveNowBtn: "//button[@style='visibility: visible;']",
        cardholderName: "//input[@id='paymentCardName']",
        cardNameError: "//label[@id='paymentCardName-error']",
        cardNumber: "//input[@id='paymentCardNumberMask']",
        cardNumberError: "//label[@id='paymentCardNumber-error']",
        cardExpiry: "//input[@id='paymentCardExpiryMask']",
        cardExpiryError: "//label[@id='paymentCardExpiry-error']",
        alertDanger: "//p[@class='alert alert-danger']",
        nextQuesBtn: "//button[@id='procedButtonId']",
        paymentSuccessMess: "//h2[@class='mt-0']",
        editBtn: "//a[@class='dark-grey-link edit-raw-amount edit-link']",
        updateAmountBtn: "//button[contains(@class, 'float-right w-100')]",
        edittingInput: "//input[@placeholder = 'Other Amount' and @value = '10']", 
        directDebitBtn: "//button[@class='btn-direct-debit btn btn-sm btn-payment-method-off']",
        accountName: "//input[@id='directDebitForm.accountName']",
        BSB: "//span[@id='select2-chosen-13']",
        BSBtxt: "//input[@id='s2id_autogen13_search']",
        accountNum: "//input[@id='directDebitForm.accountNumber']",
        debitGiveNowBtn: "//button[@id='ddSubmitButton']"
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
        await page.waitForSelector(this.Elements.form, { timeout: 20000 });
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
        await page.waitForTimeout(2000);
        await suburbInput.press('Enter');
    }

    async clickNextBtnQuestion() {
        await page.waitForSelector(this.Elements.form, { timeout: 10000 });
        await page.click(this.Elements.nextBtnQuestion);
    }

    async clickotherButton() {
        await page.locator(this.Elements.nextQuesBtn).scrollIntoViewIfNeeded();
        await page.click(this.Elements.nextQuesBtn);
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
        await page.waitForSelector(this.Elements.giveNowBtn, { timeout: 10000 });
        await page.click(this.Elements.giveNowBtn);
    }

    async VerifyPaymentMessage(table: DataTable) {
        //const errorMessage = table.raw();
        await page.waitForTimeout(20000);
        const elements = [
            this.Elements.cardNameError,
            this.Elements.cardNumberError,
            this.Elements.cardExpiryError
        ];

        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            const expectedValue = table.raw()[i][0];
            const iframe = await page.frameLocator('#mwIframe');
            // Find element in iframe and get text content
            const element1 = await iframe.locator(element);
            const actualValue = await element1.textContent();
            expect(actualValue).toBe(expectedValue);
        }
    }

    async fillCreditCard(table: DataTable) {
        //const creditCardValue = table.raw();
        const elements = [
            this.Elements.cardholderName,
            this.Elements.cardNumber,
            this.Elements.cardExpiry
        ];

        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            const creditValue = table.raw()[0][i];
            const iframe = await page.frameLocator('#mwIframe');
            const element1 = await iframe.locator(element);
            await page.waitForTimeout(5000);
            await element1.fill(creditValue);
        }
    }

    async VerifySuccessPayment(table: DataTable){
        const expectedValue = table.raw()[0][0];
        const actualValue = await page.textContent(this.Elements.paymentSuccessMess);
        expect(actualValue?.trim()).toBe(expectedValue.trim());
    }
    
    async EditDonationAmount (table: DataTable) {
        await page.click(this.Elements.editBtn);
        const input = await page.locator(this.Elements.edittingInput);
        await input.fill(table.raw()[0][0]);
        await page.click(this.Elements.updateAmountBtn);
    }

    async FillDirectDebit (table: DataTable) {
        const inputVal = table.raw()[0];
        await page.click(this.Elements.directDebitBtn);
        await page.locator(this.Elements.accountName).fill(inputVal[0]);
        await page.dblclick(this.Elements.BSB);
        const bsbtxt = page.locator(this.Elements.BSBtxt);
        await bsbtxt.type(inputVal[1]);
        await page.waitForTimeout(10000);
        await bsbtxt.press("Enter");
        await page.locator(this.Elements.accountNum).fill(inputVal[2]);
    }

    async clickGiveNowDebit() {
        await page.click(this.Elements.debitGiveNowBtn);
    }
}
