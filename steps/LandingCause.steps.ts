import { Given, When, Then, DataTable } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LandingCausePage } from '../pages/LandingCausePage';

let landingCausePage: LandingCausePage;

//Verify the validation messages errors step Amount
Given('I click on "Donation Now" button', function () {
    landingCausePage = new LandingCausePage();
    landingCausePage.clickDonateBtn();
});

Then('I should validate error messages in landing cause page step Amount', async function (table: DataTable) {
    expect(await landingCausePage.verifyMessage(table));
});

//Verify the validation messages errors step Contact
Given('I select Amount to donate --Contact', function () {
    landingCausePage = new LandingCausePage();
    landingCausePage.chooseAmount(10);
});

When('I click on the "Next" button at the Contact form --Contact', function () {
    landingCausePage.clickNextBtn();
});

Then('I should validate many error messages in landing cause page step Contact', async function (table: DataTable) {
    expect(await landingCausePage.verifyContactMessage(table));
});

//Verify the validation messages errors step Questions
Given('I select Amount to donate --Questions', function () {
    landingCausePage = new LandingCausePage();
    landingCausePage.chooseAmount(10);
});

When('I fill in the information in the Contact form --Questions', async function (table: DataTable) {
    await landingCausePage.fillContact(table);
});

When('I click on the "Next" button at the Contact form --Questions', function () {
    landingCausePage.clickNextBtn();
});

When('I click on the "Next" button at the Questions form --Questions', function () {
    landingCausePage.clickNextBtnQuestion();
});

Then('I should validate error messages in landing cause page step Questions', async function (table: DataTable) {
    expect(await landingCausePage.verifyQuestionMessage(table));
})

// Verify the validation messages errors step Payment
Given('I select Amount to donate --Payment', function () {
    landingCausePage = new LandingCausePage();
    landingCausePage.chooseAmount(10);
});

When('I fill in the information in the Contact form --Payment', async function (table: DataTable) {
    await landingCausePage.fillContact(table);
});

When('I click on the "Next" button at the Contact form --Payment', function () {
    landingCausePage.clickNextBtn();
});

When('I select Question 1 value and fill Question 2 --Payment', function (table: DataTable) {
    landingCausePage.fillQuestions(table);
});

When('I click on the "Next" button at the Questions form --Payment', function () {
    landingCausePage.clickotherButton();
});

When('I click on the "GiveNow" button at the Payment form --Payment', function () {
    landingCausePage.clickGiveNowBtn();
});

Then('I should validate error messages in landing cause page step Payment', async function (table: DataTable) {
    expect(await landingCausePage.verifyPaymentMessage(table));
});

//Verify the Thank you messages is displayed after payment is successful with Credit card payments
Given('I select Amount to donate --Credit card', function () {
    landingCausePage = new LandingCausePage();
    landingCausePage.chooseAmount(10);
});

When('I fill in the information in the Contact form --Credit card', async function (table: DataTable) {
    await landingCausePage.fillContact(table);
});

When('I click on the "Next" button at the Contact form --Credit card', function () {
    landingCausePage.clickNextBtn();
});

When('I select Question 1 value and fill Question 2 --Credit card', async function (table: DataTable) {
    await landingCausePage.fillQuestions(table);
});

When('I click on the "Next" button at the Questions form --Credit card', function () {
    landingCausePage.clickotherButton();
});

When('I fill credit card information at the Payment form --Credit card', async function (table: DataTable) {
    await landingCausePage.makePayment('Credit', table);
});

When('I click on the "GiveNow" button at the Payment form --Credit card', async function () {
    await landingCausePage.clickGiveNowBtn();
});

Then('I should see the Thank you messages displayed --Credit card', async function (table: DataTable) {
    expect(await landingCausePage.verifySuccessPayment(table));
});

//Verify the Thank you messages is displayed after edit total and payment is successful with Credit card payments
Given('I select Amount to donate --edit Credit', function () {
    landingCausePage = new LandingCausePage();
    landingCausePage.chooseAmount(10);
});

When('I fill in the information in the Contact form --edit Credit', async function (table: DataTable) {
    await landingCausePage.fillContact(table);
});

When('I click on the "Next" button at the Contact form --edit Credit', function () {
    landingCausePage.clickNextBtn();
});

When('I select Question 1 value and fill Question 2 --edit Credit', async function (table: DataTable) {
    await landingCausePage.fillQuestions(table);
});

When('I click on the "Next" button at the Questions form --edit Credit', function () {
    landingCausePage.clickotherButton();
});

When('I edit donation Amount', async function (table: DataTable) {
    await landingCausePage.editDonationAmount(table);
});

When('I fill credit card information at the Payment form --edit Credit', async function (table: DataTable) {
    await landingCausePage.makePayment('Credit', table);
});

When('I click on the "GiveNow" button at the Payment form --edit Credit', async function () {
    await landingCausePage.clickGiveNowBtn();
});

Then('I should see the Thank you messages displayed --edit Credit', async function (table: DataTable) {
    expect(await landingCausePage.verifySuccessPayment(table));
});

//Verify that the user donation successfully when using Visa card
Given('I select Amount to donate --Visa card', function () {
    landingCausePage = new LandingCausePage();
    landingCausePage.chooseAmount(10);
});

When('I fill information on step Contact --Visa card', async function (table: DataTable) {
    await landingCausePage.fillContact(table);
});

When('I click on Next button on step Contact --Visa card', function () {
    landingCausePage.clickNextBtn();
});

When('I select Question 1 value and fill Question 2 --Visa card', async function (table: DataTable) {
    await landingCausePage.fillQuestions(table);
});

When('I click on Next button on step Questions more --Visa card', function () {
    landingCausePage.clickotherButton();
});

When('I fill Visa card information on step Payment --Visa card', async function (table: DataTable) {
    await landingCausePage.makePayment('Credit', table);
});

When('I click on GiveNow button on step Payment --Visa card', async function () {
    await landingCausePage.clickGiveNowBtn();
});

Then('I should see the Thank you messages displayed --Visa card', async function (table: DataTable) {
    expect(await landingCausePage.verifySuccessPayment(table));
});

//Verify that the user donation successfully when using Master card
Given('I select Amount to donate --Master card', function () {
    landingCausePage = new LandingCausePage();
    landingCausePage.chooseAmount(10);
});

When('I fill information on step Contact --Master card', async function (table: DataTable) {
    await landingCausePage.fillContact(table);
});

When('I click on Next button on step Contact --Master card', function () {
    landingCausePage.clickNextBtn();
});

When('I select Question 1 value and fill Question 2 --Master card', async function (table: DataTable) {
    await landingCausePage.fillQuestions(table);
});

When('I click on Next button on step Questions more --Master card', function () {
    landingCausePage.clickotherButton();
});

When('I fill Master card information on step Payment --Master card', async function (table: DataTable) {
    await landingCausePage.makePayment('Credit', table);
});

When('I click on GiveNow button on step Payment --Master card', async function () {
    await landingCausePage.clickGiveNowBtn();
});

Then('I should see the Thank you messages displayed --Master card', async function (table: DataTable) {
    expect(await landingCausePage.verifySuccessPayment(table));
});

//Verify that the user donation successfully when using Amex card
Given('I select Amount to donate --Amex card', function () {
    landingCausePage = new LandingCausePage();
    landingCausePage.chooseAmount(10);
});

When('I fill information on step Contact --Amex card', async function (table: DataTable) {
    await landingCausePage.fillContact(table);
});

When('I click on Next button on step Contact --Amex card', function () {
    landingCausePage.clickNextBtn();
});

When('I select Question 1 value and fill Question 2 --Amex card', async function (table: DataTable) {
    await landingCausePage.fillQuestions(table);
});

When('I click on Next button on step Questions more --Amex card', function () {
    landingCausePage.clickotherButton();
});

When('I fill Amex card information on step Payment --Amex card', async function (table: DataTable) {
    await landingCausePage.makePayment('Credit', table);
});

When('I click on GiveNow button on step Payment --Amex card', async function () {
    await landingCausePage.clickGiveNowBtn();
});

Then('I should see the Thank you messages displayed --Amex card', async function (table: DataTable) {
    expect(await landingCausePage.verifySuccessPayment(table));
});

//Verify the Thank you messages is displayed after payment is successful with Direct Debit payments
Given('I select Amount to donate --Direct Debit', function () {
    landingCausePage = new LandingCausePage();
    landingCausePage.chooseAmount(10);
});

When('I fill information on step Contact --Direct Debit', async function (table: DataTable) {
    await landingCausePage.fillContact(table);
});

When('I click on Next button on step Contact --Direct Debit', function () {
    landingCausePage.clickNextBtn();
});

When('I select Question 1 value and fill Question 2 --Direct Debit', async function (table: DataTable) {
    await landingCausePage.fillQuestions(table);
});

When('I click on Next button on step Questions more --Direct Debit', function () {
    landingCausePage.clickotherButton();
});

When('I fill Direct Debit information on step Payment --Direct Debit', async function (table: DataTable) {
    await landingCausePage.makePayment('Debit', table);
});

When('I click on GiveNow button on step Payment --Direct Debit', function () {
    landingCausePage.clickGiveNowDebit();
});

Then('I should see the Thank you messages displayed --Direct Debit', async function (table: DataTable) {
    expect(await landingCausePage.verifySuccessPayment(table));
});

//Verify that the tooltip is displayed
Given('I select Amount to donate --tooltip', function () {
    landingCausePage = new LandingCausePage();
    landingCausePage.chooseAmount(10);
});

When('I fill information on step Contact --tooltip', async function (table: DataTable) {
    await landingCausePage.fillContact(table);
});

When('I click on Next button on step Contact --tooltip', function () {
    landingCausePage.clickNextBtn();
});

When('I select Question 1 value and fill Question 2 --tooltip', async function (table: DataTable) {
    await landingCausePage.fillQuestions(table);
});

When('I click on Next button on step Questions more --tooltip', function () {
    landingCausePage.clickotherButton();
});

When('I hover over the Question circle icon --tooltip', function () {
    landingCausePage.hoverQuesIcon();
});

Then('I should see the tooltip displayed --tooltip', async function (table: DataTable) {
    expect(await landingCausePage.verifyTooltipTxt(table));
})

//Verify that the donation is successful when ON the checkbox "Is this a company donation?"
Given('I select Amount to donate --company', function () {
    landingCausePage = new LandingCausePage();
    landingCausePage.chooseAmount(10);
});

When('I fill information on step Contact --company', async function (table: DataTable) {
    await landingCausePage.fillContact(table);
});

When('I click on "Is this a company donation?" checkbox --company', async function (table: DataTable) {
    await landingCausePage.clickCompanyChk(table);
});

When('I click on Next button on step Contact --company', function () {
    landingCausePage.clickNextBtn();
});

When('I select Question 1 value and fill Question 2 --company', async function (table: DataTable) {
    await landingCausePage.fillQuestions(table);
});

When('I click on Next button on step Questions more --company', function () {
    landingCausePage.clickotherButton();
});

When('I fill credit card information on step Payment --company', async function (table: DataTable) {
    await landingCausePage.makePayment('Credit', table);
});

When('I click on GiveNow button on step Payment --company', async function () {
    await landingCausePage.clickGiveNowBtn();
});

Then('I should see the Thank you messages displayed --company', async function (table: DataTable) {
    expect(await landingCausePage.verifySuccessPayment(table));
});

//Verify the Thank you messages is displayed after remove fee and payment is successful with Credit card payments
Given('I select Amount to donate --remove fee', function () {
    landingCausePage = new LandingCausePage();
    landingCausePage.chooseAmount(10);
});

When('I fill information on step Contact --remove fee', async function (table: DataTable) {
    await landingCausePage.fillContact(table);
});

When('I click on Next button on step Contact --remove fee', function () {
    landingCausePage.clickNextBtn();
});

When('I select Question 1 value and fill Question 2 --remove fee', async function (table: DataTable) {
    await landingCausePage.fillQuestions(table);
});

When('I click on Next button on step Questions more --remove fee', function () {
    landingCausePage.clickotherButton();
});

When('I remove fee', function () {
    landingCausePage.removeFee();
});

When('I fill credit card information on step Payment --remove fee', async function (table: DataTable) {
    await landingCausePage.makePayment('Credit', table);
});

When('I click on GiveNow button on step Payment --remove fee', async function () {
    await landingCausePage.clickGiveNowBtn();
});

Then('I should see the Thank you messages displayed --remove fee', async function (table: DataTable) {
    expect(await landingCausePage.verifySuccessPayment(table));
});

//Verify the Thank you messages is displayed after remove fee and payment is successful with Credit card payments
Given('I select Amount to donate --add fee', function () {
    landingCausePage = new LandingCausePage();
    landingCausePage.chooseAmount(10);
});

When('I fill information on step Contact --add fee', async function (table: DataTable) {
    await landingCausePage.fillContact(table);
    await landingCausePage.clickNextBtn();
});

When('I select Question 1 value and fill Question 2 --add fee', async function (table: DataTable) {
    await landingCausePage.fillQuestions(table);
    await landingCausePage.clickotherButton();
});

When('I remove fee --add fee', function () {
    landingCausePage.removeFee();
});

When('I add fee', function () {
    landingCausePage.addFee();
});

When('I fill credit card information on step Payment --add fee', async function (table: DataTable) {
    await landingCausePage.makePayment('Credit', table);
});

When('I click on GiveNow button on step Payment --add fee', async function () {
    await landingCausePage.clickGiveNowBtn();
});

Then('I should see the Thank you messages displayed --add fee', async function (table: DataTable) {
    expect(await landingCausePage.verifySuccessPayment(table));
});

//Verify that the donation unsuccessfully when entering less than 3 characters in the Cardholder name field
Given('I select Amount to donate --Cardholder', function () {
    landingCausePage = new LandingCausePage();
    landingCausePage.chooseAmount(10);
});

When('I fill in the information in the Contact form --Cardholder', async function (table: DataTable) {
    await landingCausePage.fillContact(table);
});

When('I click on the "Next" button at the Contact form --Cardholder', function () {
    landingCausePage.clickNextBtn();
});

When('I select Question 1 value and fill Question 2 --Cardholder', async function (table: DataTable) {
    await landingCausePage.fillQuestions(table);
});

When('I click on the "Next" button at the Questions form --Cardholder', function () {
    landingCausePage.clickotherButton();
});

When('I fill less than 3 characters in the Cardholder name field at the Payment form --Cardholder', async function (table: DataTable) {
    await landingCausePage.fillCardholder(table);
});

Then('I should see the error message displayed --Cardholder', async function (table: DataTable) {
    expect(await landingCausePage.verifyCreditCardError(table));
});

//Verify that the donation unsuccessfully when entering an invalid card number in the Card Number field
Given('I select Amount to donate --invalid card', function () {
    landingCausePage = new LandingCausePage();
    landingCausePage.chooseAmount(10);
});

When('I fill in the information in the Contact form --invalid card', async function (table: DataTable) {
    await landingCausePage.fillContact(table);
});

When('I click on the "Next" button at the Contact form --invalid card', function () {
    landingCausePage.clickNextBtn();
});

When('I select Question 1 value and fill Question 2 --invalid card', async function (table: DataTable) {
    await landingCausePage.fillQuestions(table);
});

When('I click on the "Next" button at the Questions form --invalid card', function () {
    landingCausePage.clickotherButton();
});

When('I fill invalid card information at the Payment form --invalid card', async function (table: DataTable) {
    await landingCausePage.makePayment('Credit', table);
});

When('I click on the "GiveNow" button at the Payment form --invalid card', async function () {
    await landingCausePage.clickGiveNowBtn();
});

Then('I should see the unsuccess donation message displayed --invalid card', async function (table: DataTable) {
    expect(await landingCausePage.verifyErrorMessage(table));
});

//Verify that the donation unsuccessfully when entering date invalid in the MMYY field
Given('I select Amount to donate --date invalid', function () {
    landingCausePage = new LandingCausePage();
    landingCausePage.chooseAmount(10);
});

When('I fill in the information in the Contact form --date invalid', async function (table: DataTable) {
    await landingCausePage.fillContact(table);
});

When('I click on the "Next" button at the Contact form --date invalid', function () {
    landingCausePage.clickNextBtn();
});

When('I select Question 1 value and fill Question 2 --date invalid', async function (table: DataTable) {
    await landingCausePage.fillQuestions(table);
});

When('I click on the "Next" button at the Questions form --date invalid', function () {
    landingCausePage.clickotherButton();
});

When('I fill invalid date in the Cardholder name field at the Payment form --date invalid', async function (table: DataTable) {
    await landingCausePage.fillDate(table);
});

Then('I should see the error message displayed --date invalid', async function (table: DataTable) {
    expect(await landingCausePage.verifyCreditCardError(table));
});

//Verify that the donation unsuccessfully when the input card expired
Given('I select Amount to donate --expired card', function () {
    landingCausePage = new LandingCausePage();
    landingCausePage.chooseAmount(10);
});

When('I fill in the information in the Contact form --expired card', async function (table: DataTable) {
    await landingCausePage.fillContact(table);
});

When('I click on the "Next" button at the Contact form --expired card', function () {
    landingCausePage.clickNextBtn();
});

When('I select Question 1 value and fill Question 2 --expired card', async function (table: DataTable) {
    await landingCausePage.fillQuestions(table);
});

When('I click on the "Next" button at the Questions form --expired card', function () {
    landingCausePage.clickotherButton();
});

When('I fill expired card information at the Payment form --expired card', async function (table: DataTable) {
    await landingCausePage.makePayment('Credit', table);
});

When('I click on the "GiveNow" button at the Payment form --expired card', async function () {
    await landingCausePage.clickGiveNowBtn();
});

Then('I should see the unsuccess donation message displayed --expired card', async function (table: DataTable) {
    expect(await landingCausePage.verifyErrorMessage(table));
});

//Verify that the donation unsuccessfully when entering short data in "CVV" field incorrect
Given('I select type of donation, amount to donate --short CVV', async function () {
    landingCausePage = new LandingCausePage();
    await landingCausePage.chooseFrequency('One-off');
    await landingCausePage.chooseAmount(10);
});

When('I click on the "Donate Now" button at the Amount form --short CVV', async function () {
    await landingCausePage.clickDonateBtn();
});

When('I fill in the information and click on the "Next" button in the Contact form --short CVV', async function (table: DataTable) {
    await landingCausePage.fillContact(table);
    await landingCausePage.clickNextBtn();
});

When('I select and fill question and click on the "Next" button in the Question form --short CVV', async function (table: DataTable) {
    await landingCausePage.fillQuestions(table);
    await landingCausePage.clickotherButton();
});

When('I enter short data in "CVV" field --short CVV', async function (table: DataTable) {
    await landingCausePage.fillCVV(table);
});

Then('I should see the error message displaying --short CVV', async function (table: DataTable) {
    expect (await landingCausePage.verifyCreditCardError(table));
});

//Verify that the donation unsuccessfully when entering long data in "CVV" field incorrect
Given('I select type of donation, amount to donate --long CVV', async function () {
    landingCausePage = new LandingCausePage();
    await landingCausePage.chooseFrequency('One-off');
    await landingCausePage.chooseAmount(10);
});

When('I click on the "Donate Now" button at the Amount form --long CVV', async function () {
    await landingCausePage.clickDonateBtn();
});

When('I fill in the information and click on the "Next" button in the Contact form --long CVV', async function (table: DataTable) {
    await landingCausePage.fillContact(table);
    await landingCausePage.clickNextBtn();
});

When('I select and fill question and click on the "Next" button in the Question form --long CVV', async function (table: DataTable) {
    await landingCausePage.fillQuestions(table);
    await landingCausePage.clickotherButton();
});

When('I enter long data in "CVV" field --long CVV', async function (table: DataTable) {
    await landingCausePage.fillCVV(table);
});

Then('I should see the error message displaying --long CVV', async function (table: DataTable) {
    expect (await landingCausePage.verifyCreditCardError(table));
});

//Verify that the donation unsuccessfully when the "BSB" field is blank
Given('I select Amount to donate --BSB blank', function () {
    landingCausePage = new LandingCausePage();
    landingCausePage.chooseAmount(10);
});

When('I fill in the information in the Contact form and click Next button --BSB blank', async function (table: DataTable) {
    await landingCausePage.fillContact(table);
    await landingCausePage.clickNextBtn();
});

When('I select Question 1 value and fill Question 2 and click Next button --BSB blank', async function (table: DataTable) {
    await landingCausePage.fillQuestions(table);
    await landingCausePage.clickotherButton();
});

When('I fill in "Account Name" and "Account Number" field and click GiveNow button --BSB blank', async function (table: DataTable) {
    await landingCausePage.fillBSBblank(table);
    await landingCausePage.clickGiveNowDebit();
});

Then('I should see the error message displayed --BSB blank', async function (table: DataTable) {
    expect(await landingCausePage.verifyDebitError(table));
});

//Verify that the donation unsuccessfully when entering less than 3 characters in the "Account Number" field
Given('I select Amount to donate --Account Number', function () {
    landingCausePage = new LandingCausePage();
    landingCausePage.chooseAmount(10);
});

When('I fill in the information in the Contact form and click Next button --Account Number', async function (table: DataTable) {
    await landingCausePage.fillContact(table);
    await landingCausePage.clickNextBtn();
});

When('I select Question 1 value and fill Question 2 and click Next button --Account Number', async function (table: DataTable) {
    await landingCausePage.fillQuestions(table);
    await landingCausePage.clickotherButton();
});

When('I enter less than 3 characters in the "Account Number" field --Account Number', async function (table: DataTable) {
    await landingCausePage.fillAccountNum(table);
});

Then('I should see the error message displayed --Account Number', async function (table: DataTable) {
    expect(await landingCausePage.verifyDebitError(table));
});

//Verify that the "From Australia" form is displayed when the "Enter a foreign address" hyperlink is clicked
Given('I select Amount to donate --From Australia', function() {
    landingCausePage = new LandingCausePage();
    landingCausePage.chooseAmount(10);
});

When('I click on the "Enter a foreign address" hyperlink --From Australia', function() {
    landingCausePage.clickAUhyperlink();
});

Then('I should see the "From Australia" form displayed --From Australia', async function() {
    expect (await landingCausePage.verifyfromAUform());
})

//Verify that the "Not From Australia" form is displayed
Given('I select Amount to donate --Not From Australia', function() {
    landingCausePage = new LandingCausePage();
    landingCausePage.chooseAmount(10);
});

Then('I should see the "Not From Australia" form displayed --Not From Australia', async function() {
    expect (await landingCausePage.verifyNotfromAUform());
})

//Verify that the user can choose an end date is a future date
Given('I click on "Would you like this donation to be ongoing?" checkbox --future', async function() {
    landingCausePage = new LandingCausePage();
    await landingCausePage.clickOngoingChk();
});

When('I choose an end date in the future', async function() {
    await landingCausePage.chooseDate('future');
});

Then('I should not see the red error validation message displayed under End date field --future', async function() {
    expect (await landingCausePage.verifyValidDate());
});

//Verify that the user can't choose an end date is a today
Given('I click on "Would you like this donation to be ongoing?" checkbox --today', async function() {
    landingCausePage = new LandingCausePage();
    await landingCausePage.clickOngoingChk();
});

When('I choose an end date today', async function() {
    await landingCausePage.chooseDate('current');
});

Then('I should see the red error validation message displayed under End date field --today', async function(table: DataTable) {
    expect(await landingCausePage.verifyInvalidDate(table));
});

//Verify that the user can't choose an end date is a date in the past
Given('I click on "Would you like this donation to be ongoing?" checkbox --past', async function() {
    landingCausePage = new LandingCausePage();
    await landingCausePage.clickOngoingChk();
});

When('I choose an end date in the past', async function() {
    await landingCausePage.chooseDate('past');
});

Then('I should see the red error validation message displayed under End date field --past', async function (table: DataTable) {
    await landingCausePage.verifyInvalidDate(table);
});

//Verify that shows red validate message when when enter wrong dd/mm/yyyy format
Given('I click on "Would you like this donation to be ongoing?" checkbox --wrong format', async function() {
    landingCausePage = new LandingCausePage();
    await landingCausePage.clickOngoingChk();
});

When('I fill the date in wrong format', async function() {
    await landingCausePage.chooseDate('wrong format');
});

Then('I should see the red error validation message displayed under End date field --wrong format', async function (table: DataTable) {
    await landingCausePage.verifyInvalidDate(table);
});

//Verify that the donation unsuccessfully when one of the 3 cards is incorrectly entered (Visa, MasterCard, Amex)
Given('I select Amount to donate --incorrect card', function() {
    landingCausePage = new LandingCausePage();
    landingCausePage.chooseAmount(10);
});

When('I fill in the information in the Contact form and click on the Next button --incorrect card', async function(table: DataTable) {
    await landingCausePage.fillContact(table);
    await landingCausePage.clickNextBtn();
});

When('I select Question 1 value and fill Question 2 and click on the Next button --incorrect card', async function(table: DataTable) {
    await landingCausePage.fillQuestions(table);
    await landingCausePage.clickotherButton();
});

When('I fill incorrectly entered card information at the Payment form and click on the GiveNow button --incorrect card', async function(table: DataTable) {
    await landingCausePage.makePayment('Credit', table);
    await landingCausePage.clickGiveNowBtn();
});

Then('I should see the red error message displayed under CardNumber field --incorrect card', async function(table: DataTable) {
    expect (await landingCausePage.verifyCreditCardError(table));
});

//Verify that the user donation unsuccessfully
Given('I select Amount to donate --unsuccessfully', function() {
    landingCausePage = new LandingCausePage();
    landingCausePage.chooseAmount(10);
});

When('I fill in the information in the Contact form and click on the Next button --unsuccessfully', async function(table: DataTable) {
    await landingCausePage.fillContact(table);
    await landingCausePage.clickNextBtn();
});

When('I select Question 1 value and fill Question 2 and click on the Next button --unsuccessfully', async function (table: DataTable) {
    await landingCausePage.fillQuestions(table);
    await landingCausePage.clickotherButton();  
});

When('I fill incorrectly entered card information at the Payment form and click on GiveNow buton --unsuccessfully', async function (table: DataTable) {
    await landingCausePage.makePayment('Credit', table);
    await landingCausePage.clickGiveNowBtn();
});

Then('I should see the unsuccess payment message displayed --unsuccessfully', async function (table: DataTable) {
    await landingCausePage.verifyErrorMessage(table);
})

