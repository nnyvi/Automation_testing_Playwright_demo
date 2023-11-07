import { expect } from "playwright/test";
import { page } from "../hooks/hooks";
import { DataTable } from "@cucumber/cucumber";
import { isAwaitKeyword } from "typescript";

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
        cardholderLabel: "//label[@id='paymentCardNameLabel']",
        cardNameError: "//label[@id='paymentCardName-error']",
        cardNumber: "//input[@id='paymentCardNumberMask']",
        cardNumberError: "//label[@id='paymentCardNumber-error']",
        cardExpiry: "//input[@id='paymentCardExpiryMask']",
        cardExpiryError: "//label[@id='paymentCardExpiry-error']",
        alertDanger: "//p[@class='alert alert-danger']",
        nextQuesBtn: "//button[@id='procedButtonId']",
        paymentSuccessMess: "//h2[@class='mt-0']",
        paymentErrorMess: "//h2[@class='text-danger mt-0']",
        editBtn: "//a[@class='dark-grey-link edit-raw-amount edit-link']",
        updateAmountBtn: "//button[contains(@class, 'float-right w-100')]",
        edittingInput: "//input[@placeholder = 'Other Amount' and @value = '10']",
        directDebitBtn: "//button[@class='btn-direct-debit btn btn-sm btn-payment-method-off']",
        accountName: "//input[@id='directDebitForm.accountName']",
        BSB: "//span[@id='select2-chosen-13']",
        BSBtxt: "//input[@id='s2id_autogen13_search']",
        accountNum: "//input[@id='directDebitForm.accountNumber']",
        debitGiveNowBtn: "//button[@id='ddSubmitButton']",
        quesIcon: "//i[@class='fas fa-question-circle']",
        tooltipTxt: "//*[@class='popover-body']",
        companyChk: "//label[@for='donateUsingOrganisationName']",
        companyInput: "//input[@id='organisationName']",
        removeBtn: "//*[text()='Remove']",
        removeFeeBtn: "//*[contains(text(),'Remove Fee')]",
        coverBtn: "//*[text()='Cover']",
        addFeeBtn: "//*[contains(text(),'Add Fee')]",
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

    async verifyQuestionMessage(table: DataTable) {
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
        await page.waitForSelector(this.Elements.giveNowBtn, { timeout: 20000 });
        await page.click(this.Elements.giveNowBtn);
    }

    async verifyPaymentMessage(table: DataTable) {
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

    async verifySuccessPayment(table: DataTable) {
        const expectedValue = table.raw()[0][0];
        const actualValue = await page.textContent(this.Elements.paymentSuccessMess);
        expect(actualValue?.trim()).toBe(expectedValue.trim());
    }

    async editDonationAmount(table: DataTable) {
        await page.click(this.Elements.editBtn);
        const input = await page.locator(this.Elements.edittingInput);
        await input.fill(table.raw()[0][0]);
        await page.click(this.Elements.updateAmountBtn);
    }

    async fillDirectDebit(table: DataTable) {
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

    async clickQuesIcon() {
        await page.hover(this.Elements.quesIcon);
    }
    
    async verifyTooltipTxt(table: DataTable){
        const expectedTooltip = table.raw()[0][0];
        const actualTooltip = await page.textContent(this.Elements.tooltipTxt);
        expect(actualTooltip?.trim()).toBe(expectedTooltip.trim());
    }

    async clickCompanyChk(table: DataTable){
        await page.check(this.Elements.companyChk);
        await page.locator(this.Elements.companyInput).fill(table.raw()[0][0]);
    }

    async removeFee(){
        await page.click(this.Elements.removeBtn);
        await page.click(this.Elements.removeFeeBtn);
    }

    async addFee(){
        await page.click(this.Elements.coverBtn);
        await page.click(this.Elements.addFeeBtn);
    }

    async fillCardholder(table: DataTable){
        const val = table.raw()[0][0];
        const iframe = await page.frameLocator('#mwIframe');
        const element = await iframe.locator(this.Elements.cardholderName);
        await element.fill(val);
        await element.press("Tab");
    }

    async verifyCardholderError(table: DataTable){
        const expectedValue = table.raw()[0][0];
        const ifream = await page.frameLocator('#mwIframe');
        const element = await ifream.locator(this.Elements.cardNameError);
        const actualValue = await element.textContent();
        expect (actualValue).toBe(expectedValue);
    }

    async verifyErrorMessage(table: DataTable){
        const expectedValue = table.raw()[0][0];
        const actualValue = await page.textContent(this.Elements.paymentErrorMess);
        expect(actualValue).toBe(expectedValue);
    }

    async fillDate(table: DataTable){
        const val = table.raw()[0][0];
        const iframe = await page.frameLocator('#mwIframe');
        const element = await iframe.locator(this.Elements.cardExpiry);
        await element.fill(val);
        await element.press("Tab");
    }

    async verifyExpiryError(table: DataTable){
        const expectedValue = table.raw()[0][0];
        const ifream = await page.frameLocator('#mwIframe');
        const element = await ifream.locator(this.Elements.cardExpiryError);
        const actualValue = await element.textContent();
        expect (actualValue).toBe(expectedValue);
    }

    async fillBSBblank(table: DataTable){
        await page.click(this.Elements.directDebitBtn);
        await page.locator(this.Elements.accountName).fill(table.raw()[0][0]);
        await page.locator(this.Elements.accountNum).fill(table.raw()[0][1]);
    }

    async verifyDebitError(table: DataTable){
        const errorMessage = table.raw()[0][0];
        const actualMessage = await page.textContent(this.Elements.messageFail);
        expect(actualMessage).toBe(errorMessage);
    }

    async fillAccountNum(table: DataTable){
        await page.click(this.Elements.directDebitBtn);
        await page.locator(this.Elements.accountNum).fill(table.raw()[0][0]);
    };
}
