Feature: Landing Cause

    Scenario: Verify the validation messages errors step Amount
        Given I click on Donation Now button
        Then I should validate error messages in landing cause page step Amount
            | Please fill out this field. |

    Scenario: Verify the validation messages errors step Amount more
        Given I select Amount to donate
        When I click on Next button
        Then I should validate many error messages in landing cause page 
            | Please fill out this field.     |
            | Please fill out this field.     |
            | Please fill out this field.     |
            | Please fill out this field.     |
            | Must select at least one option |
    
    Scenario: Verify the validation messages errors step Contact
        Given I select Amount to donate 2
        When I fill information on step Amount
            | Firstname | Lastname | Email          | Adress | Suburb |
            | test      | test     | test@gmail.com | test   | ubu   |
        And I click on Next button on step Amount
        And I click on Next button on step Contact
        Then I should validate error messages in landing cause page step Contact
            | Please fill out this field. |
            | Please fill out this field. |