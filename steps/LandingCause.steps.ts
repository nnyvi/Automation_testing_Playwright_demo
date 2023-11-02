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

//Verify the validation messages errors step Amount more
Given('I select Amount to donate', function () {
    landingCausePage = new LandingCausePage();
    landingCausePage.selectAmount();
});

When('I click on Next button', function () {
    landingCausePage.clickNextBtn();
});

Then('I should validate many error messages in landing cause page', async function (table: DataTable) {
    expect(await landingCausePage.verifyMessage(table));
});

//Verify the validation messages errors step Contact
Given('I select Amount to donate 2', function () {
    landingCausePage = new LandingCausePage();
    landingCausePage.selectAmount();
});

When('I fill information on step Amount', async function (table: DataTable) {
    await landingCausePage.fillAmount(table);
});

When('I click on Next button on step Amount', function () {
    landingCausePage.clickNextBtn();
});

When('I click on Next button on step Contact', function () {
    landingCausePage.clickNextBtn();
});

Then('I should validate error messages in landing cause page step Contact', async function (table: DataTable) {
    expect(await landingCausePage.verifyMessage(table));
})

