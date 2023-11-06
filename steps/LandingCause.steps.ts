import { Given, When, Then, DataTable } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LandingCausePage } from '../pages/LandingCausePage';

let landingCausePage: LandingCausePage;

//Verify the validation messages errors step Amount
Given('I click on Donation Now button', function () {
    landingCausePage = new LandingCausePage();
    landingCausePage.clickDonateBtn();
});

Then('I should validate error messages in landing cause page step Amount', async function (table: DataTable) {
    expect(await landingCausePage.verifyMessage(table));
});

//Verify the validation messages errors step Contact
Given('I select Amount to donate', function () {
    landingCausePage = new LandingCausePage();
    landingCausePage.selectAmount();
});

When('I click on the Next button on step Contact', function () {
    landingCausePage.clickNextBtn();
});

Then('I should validate many error messages in landing cause page step Contact', async function (table: DataTable) {
    expect(await landingCausePage.verifyContactMessage(table));
});

//Verify the validation messages errors step Questions
Given('I select Amount to donate --second', function () {
    landingCausePage = new LandingCausePage();
    landingCausePage.selectAmount();
});

When('I fill information on step Contact', async function (table: DataTable) {
    await landingCausePage.fillContact(table);
});

When('I click on Next button on step Contact', function () {
    landingCausePage.clickNextBtn();
});

When('I click on Next button on step Questions', function () {
    landingCausePage.clickNextBtnQuestion();
});

Then('I should validate error messages in landing cause page step Questions', async function (table: DataTable) {
    expect(await landingCausePage.VerifyQuestionMessage(table));
})

// Verify the validation messages errors step Payment
Given('I select Amount to donate --third', function () {
    landingCausePage = new LandingCausePage();
    landingCausePage.selectAmount();
});

When('I fill information on step Contact --third', async function (table: DataTable) {
    await landingCausePage.fillContact(table);
});

When('I click on Next button on step Contact --third', function () {
    landingCausePage.clickNextBtn();
});

When('I select Question 1 value and fill Question 2 --third', function (table: DataTable) {
    landingCausePage.fillQuestions(table);
});

When('I click on Next button on step Questions more --third', function () {
    landingCausePage.clickotherButton();
});

When('I click on GiveNow button on step Payment --third', function () {
    landingCausePage.clickGiveNowBtn();
});

Then('I should validate error mesages in landing cause page step Payment', async function (table: DataTable) {
    expect(await landingCausePage.VerifyPaymentMessage(table));
});

//Verify the Thank you messages is displayed after payment is successful with Credit card payments
Given('I select Amount to donate --forth', function () {
    landingCausePage = new LandingCausePage();
    landingCausePage.selectAmount();
});

When('I fill information on step Contact --forth', async function (table: DataTable) {
    await landingCausePage.fillContact(table);
});

When('I click on Next button on step Contact --forth', function () {
    landingCausePage.clickNextBtn();
});

When('I select Question 1 value and fill Question 2 --forth', async function (table: DataTable) {
    await landingCausePage.fillQuestions(table);
});

When('I click on Next button on step Questions more --forth', function () {
    landingCausePage.clickotherButton();
});

When('I fill credit card information on step Payment', async function (table: DataTable) {
    await landingCausePage.fillCreditCard(table);
});

When('I click on GiveNow button on step Payment --forth', async function () {
    await landingCausePage.clickGiveNowBtn();
});

Then('I see the Thank you messages displayed', async function (table: DataTable) {
    expect ( await landingCausePage.VerifySuccessPayment(table));
});

//Verify the Thank you messages is displayed after edit total and payment is successful with Credit card payments
Given('I select Amount to donate --fifth', function () {
    landingCausePage = new LandingCausePage();
    landingCausePage.selectAmount();
});

When('I fill information on step Contact --fifth', async function (table: DataTable) {
    await landingCausePage.fillContact(table);
});

When('I click on Next button on step Contact --fifth', function () {
    landingCausePage.clickNextBtn();
});

When('I select Question 1 value and fill Question 2 --fifth', async function (table: DataTable) {
    await landingCausePage.fillQuestions(table);
});

When('I click on Next button on step Questions more --fifth', function () {
    landingCausePage.clickotherButton();
});

When('I edit donation Amount', async function (table: DataTable) {
    await landingCausePage.EditDonationAmount(table);
});

When('I fill credit card information on step Payment --fifth', async function (table: DataTable) {
    await landingCausePage.fillCreditCard(table);
});

When('I click on GiveNow button on step Payment --fifth', async function () {
    await landingCausePage.clickGiveNowBtn();
});

Then('I see the Thank you messages displayed --fifth', async function (table: DataTable) {
    expect ( await landingCausePage.VerifySuccessPayment(table));
});

//Verify that the user donation successfully when using Visa card
Given('I select Amount to donate --Visa card', function () {
    landingCausePage = new LandingCausePage();
    landingCausePage.selectAmount();
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

When('I fill credit card information on step Payment --Visa card', async function (table: DataTable) {
    await landingCausePage.fillCreditCard(table);
});

When('I click on GiveNow button on step Payment --Visa card', async function () {
    await landingCausePage.clickGiveNowBtn();
});

Then('I see the Thank you messages displayed --Visa card', async function (table: DataTable) {
    expect ( await landingCausePage.VerifySuccessPayment(table));
});

//Verify that the user donation successfully when using Master card
Given('I select Amount to donate --Master card', function () {
    landingCausePage = new LandingCausePage();
    landingCausePage.selectAmount();
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

When('I fill credit card information on step Payment --Master card', async function (table: DataTable) {
    await landingCausePage.fillCreditCard(table);
});

When('I click on GiveNow button on step Payment --Master card', async function () {
    await landingCausePage.clickGiveNowBtn();
});

Then('I see the Thank you messages displayed --Master card', async function (table: DataTable) {
    expect ( await landingCausePage.VerifySuccessPayment(table));
});

//Verify that the user donation successfully when using Amex card
Given('I select Amount to donate --Amex card', function () {
    landingCausePage = new LandingCausePage();
    landingCausePage.selectAmount();
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

When('I fill credit card information on step Payment --Amex card', async function (table: DataTable) {
    await landingCausePage.fillCreditCard(table);
});

When('I click on GiveNow button on step Payment --Amex card', async function () {
    await landingCausePage.clickGiveNowBtn();
});

Then('I see the Thank you messages displayed --Amex card', async function (table: DataTable) {
    expect ( await landingCausePage.VerifySuccessPayment(table));
});

//Verify the Thank you messages is displayed after payment is successful with Direct Debit payments
Given('I select Amount to donate --Direct Debit', function () {
    landingCausePage = new LandingCausePage();
    landingCausePage.selectAmount();
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
   await landingCausePage.FillDirectDebit(table);
});

When('I click on GiveNow button on step Payment --Direct Debit', function () {
    landingCausePage.clickGiveNowDebit();
});

Then('I see the Thank you messages displayed --Direct Debit', async function (table: DataTable) {
    expect (await landingCausePage.VerifySuccessPayment(table));
});