Feature: Landing Cause

    Scenario: Verify the validation messages errors step Amount
        Given I click on Donation Now button
        Then I should validate error messages in landing cause page
            | Please fill out this field. |