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
    #     Given I select Amount to donate --second
    #     When I fill information on step Contact
    #         | Firstname | Lastname | Email          | Adress | Suburb |
    #         | test      | test     | test@gmail.com | test   | ubu   |
    #     And I click on Next button on step Contact
    #     And I click on Next button on step Questions
    #     Then I should validate error messages in landing cause page step Questions
    #         | Please fill out this field. |
    #         | Please fill out this field. |

    # Scenario: Verify the validation messages errors step Payment
    #     Given I select Amount to donate --third
    #     When I fill information on step Contact --third
    #         | Firstname | Lastname | Email          | Adress | Suburb |
    #         | test      | test     | test@gmail.com | test   | ubu   |
    #     And I click on Next button on step Contact --third
    #     And I select Question 1 value and fill Question 2 --third
    #         | test |
    #     And I click on Next button on step Questions more --third
    #     And I click on GiveNow button on step Payment --third
    #     Then I should validate error mesages in landing cause page step Payment
    #         | Please fill in this field. |
    #         | Please fill in this field. |
    #         | Please fill in this field. |

    # Scenario: Verify the Thank you messages is displayed after payment is successful with Credit card payments
    #     Given I select Amount to donate --forth
    #     When I fill information on step Contact --forth
    #         | Firstname | Lastname | Email          | Adress | Suburb |
    #         | test      | test     | test@gmail.com | test   | ubu   |
    #     And I click on Next button on step Contact --forth
    #     And I select Question 1 value and fill Question 2 --forth
    #         | test |
    #     And I click on Next button on step Questions more --forth
    #     And I fill credit card information on step Payment
    #         | Westpac, St. George & Bank of Melbourne | 4564710000000004 | 02/29 |
    #     And I click on GiveNow button on step Payment --forth
    #     Then I see the Thank you messages displayed
    #         | Thanks for donating |

    # Scenario: Verify the Thank you messages is displayed after edit total and payment is successful with Credit card payments
    #     Given I select Amount to donate --fifth
    #     When I fill information on step Contact --fifth
    #         | Firstname | Lastname | Email          | Adress | Suburb |
    #         | test      | test     | test@gmail.com | test   | ubu   |
    #     And I click on Next button on step Contact --fifth
    #     And I select Question 1 value and fill Question 2 --fifth
    #         | test |
    #     And I click on Next button on step Questions more --fifth
    #     And I edit donation Amount 
    #         | 15 |
    #     And I fill credit card information on step Payment --fifth
    #         | Westpac, St. George & Bank of Melbourne | 4564710000000004 | 02/29 |
    #     And I click on GiveNow button on step Payment --fifth
    #     Then I see the Thank you messages displayed --fifth
    #         | Thanks for donating |

    # Scenario: Verify that the user donation successfully when using Visa card
    #     Given I select Amount to donate --Visa card
    #     When I fill information on step Contact --Visa card
    #         | Firstname | Lastname | Email          | Adress | Suburb |
    #         | test      | test     | test@gmail.com | test   | ubu   |
    #     And I click on Next button on step Contact --Visa card
    #     And I select Question 1 value and fill Question 2 --Visa card
    #         | test |
    #     And I click on Next button on step Questions more --Visa card
    #     And I fill credit card information on step Payment --Visa card
    #         | Westpac, St. George & Bank of Melbourne | 4564710000000004 | 02/29 |
    #     And I click on GiveNow button on step Payment --Visa card
    #     Then I see the Thank you messages displayed --Visa card
    #         | Thanks for donating |

    # Scenario: Verify that the user donation successfully when using Master card
    #     Given I select Amount to donate --Master card
    #     When I fill information on step Contact --Master card
    #         | Firstname | Lastname | Email          | Adress | Suburb |
    #         | test      | test     | test@gmail.com | test   | ubu   |
    #     And I click on Next button on step Contact --Master card
    #     And I select Question 1 value and fill Question 2 --Master card
    #         | test |
    #     And I click on Next button on step Questions more --Master card
    #     And I fill credit card information on step Payment --Master card
    #         | Westpac, St. George & Bank of Melbourne | 5163200000000008 | 08/30 |
    #     And I click on GiveNow button on step Payment --Master card
    #     Then I see the Thank you messages displayed --Master card
    #         | Thanks for donating |

    # Scenario: Verify that the user donation successfully when using Amex card
    #     Given I select Amount to donate --Amex card
    #     When I fill information on step Contact --Amex card
    #         | Firstname | Lastname | Email          | Adress | Suburb |
    #         | test      | test     | test@gmail.com | test   | ubu   |
    #     And I click on Next button on step Contact --Amex card
    #     And I select Question 1 value and fill Question 2 --Amex card
    #         | test |
    #     And I click on Next button on step Questions more --Amex card
    #     And I fill credit card information on step Payment --Amex card
    #         | Westpac, St. George & Bank of Melbourne | 376000000000006 | 06/30 |
    #     And I click on GiveNow button on step Payment --Amex card
    #     Then I see the Thank you messages displayed --Amex card
    #         | Thanks for donating |

    Scenario: Verify the Thank you messages is displayed after payment is successful with Direct Debit payments
        Given I select Amount to donate --Direct Debit
        When I fill information on step Contact --Direct Debit
            | Firstname | Lastname | Email          | Adress | Suburb |
            | test      | test     | test@gmail.com | test   | ubu   |
        And I click on Next button on step Contact --Direct Debit
        And I select Question 1 value and fill Question 2 --Direct Debit
            | test |
        And I click on Next button on step Questions more --Direct Debit
        And I fill Direct Debit information on step Payment --Direct Debit
            | Merchant Warrior | 847 | 397351 |
        And I click on GiveNow button on step Payment --Direct Debit
        Then I see the Thank you messages displayed --Direct Debit
            | Thanks for donating |