import { Given, When, Then, DataTable } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LandingCausePage } from '../pages/LandingCausePage';

let landingCausePage: LandingCausePage;

//Verify the validation messages errors step Amount
Given('I click on Donation Now button', function () {
    landingCausePage = new LandingCausePage();
    landingCausePage.clickDonateBtn();
});

Then('I should validate error messages in landing cause page', async function (table: DataTable) {
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
