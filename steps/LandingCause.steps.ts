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
Given('I select Amount to donate 2', function () {
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
Given('I select Amount to donate 3', function () {
    landingCausePage = new LandingCausePage();
    landingCausePage.selectAmount();
});

When('I fill information on step Contact 3', async function (table: DataTable) {
    await landingCausePage.fillContact(table);
});

When('I click on Next button on step Contact 3', function () {
    landingCausePage.clickNextBtn();
});

When('I select Question 1 value and fill Question 2', function (table: DataTable) {
    landingCausePage.fillQuestions(table);
});

When('I click on Next button on step Questions more', function () {
    landingCausePage.clickotherButton();
});

When('I click on GiveNow on step Payment', function () {
    landingCausePage.clickGiveNowBtn();
});

Then('I should validate error mesages in landing cause page step Payment', async function (table: DataTable) {
    expect(await landingCausePage.VerifyPaymentMessage(table));
});
