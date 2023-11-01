import { Given, When, Then, DataTable } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '../hooks/hooks';
import { LandingCausePage } from '../pages/LandingCausePage';

let landingCausePage : LandingCausePage;

//Verify the validation messages errors step Amount
Given('I click on Donation Now button', function () {
    landingCausePage = new LandingCausePage();
    landingCausePage.clickDonateBtn();
});

Then('I should validate error messages in landing cause page', async function (table : DataTable) {
    expect(await landingCausePage.verifyMessage(table));
});
