Feature: Landing Cause

    # Scenario: Verify the validation messages errors step Amount
    #     Given I click on Donation Now button
    #     Then I should validate error messages in landing cause page step Amount
    #         | Please fill out this field. |

    # Scenario: Verify the validation messages errors step Contact
    #     Given I select Amount to donate
    #     When I click on the Next button on step Contact
    #     Then I should validate many error messages in landing cause page step Contact
    #         | Please fill out this field.     |
    #         | Please fill out this field.     |
    #         | Please fill out this field.     |
    #         | Please fill out this field.     |
    #         | Must select at least one option |
    
    # Scenario: Verify the validation messages errors step Questions
    #     Given I select Amount to donate 2
    #     When I fill information on step Contact
    #         | Firstname | Lastname | Email          | Adress | Suburb |
    #         | test      | test     | test@gmail.com | test   | ubu   |
    #     And I click on Next button on step Contact
    #     And I click on Next button on step Questions
    #     Then I should validate error messages in landing cause page step Questions
    #         | Please fill out this field. |
    #         | Please fill out this field. |

    Scenario: Verify the validation messages errors step Payment
        Given I select Amount to donate 3
        When I fill information on step Contact 3
            | Firstname | Lastname | Email          | Adress | Suburb |
            | test      | test     | test@gmail.com | test   | ubu   |
        And I click on Next button on step Contact 3
        And I select Question 1 value and fill Question 2
            | test |
        And I click on Next button on step Questions more
        And I click on GiveNow on step Payment
        Then I should validate error mesages in landing cause page step Payment
            | Please fill in this field.        |
            | Please fill in this field.        |
            | Please fill in this field.        |
            | Please correct the above error(s) |