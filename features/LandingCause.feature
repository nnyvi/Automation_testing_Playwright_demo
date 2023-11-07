Feature: Landing Cause

    # Scenario: Verify the validation messages errors step Amount
    #     Given I click on "Donation Now" button
    #     Then I should validate error messages in landing cause page step Amount
    #         | Please fill out this field. |

    # Scenario: Verify the validation messages errors step Contact
    #     Given I select Amount to donate --Contact
    #     When I click on the "Next" button at the Contact form --Contact
    #     Then I should validate many error messages in landing cause page step Contact
    #         | Please fill out this field.     |
    #         | Please fill out this field.     |
    #         | Please fill out this field.     |
    #         | Please fill out this field.     |
    #         | Must select at least one option |
    
    # Scenario: Verify the validation messages errors step Questions
    #     Given I select Amount to donate --Questions
    #     When I fill in the information in the Contact form --Questions
    #         | Firstname | Lastname | Email          | Adress | Suburb |
    #         | test      | test     | test@gmail.com | test   | ubu    |
    #     And I click on the "Next" button at the Contact form --Questions
    #     And I click on the "Next" button at the Questions form --Questions
    #     Then I should validate error messages in landing cause page step Questions
    #         | Please fill out this field. |
    #         | Please fill out this field. |

    # Scenario: Verify the validation messages errors step Payment
    #     Given I select Amount to donate --Payment
    #     When I fill in the information in the Contact form --Payment
    #         | Firstname | Lastname | Email          | Adress | Suburb |
    #         | test      | test     | test@gmail.com | test   | ubu   |
    #     And I click on the "Next" button at the Contact form --Payment
    #     And I select Question 1 value and fill Question 2 --Payment
    #         | test |
    #     And I click on the "Next" button at the Questions form --Payment
    #     And I click on the "GiveNow" button at the Payment form --Payment
    #     Then I should validate error mesages in landing cause page step Payment
    #         | Please fill in this field. |
    #         | Please fill in this field. |
    #         | Please fill in this field. |

    # Scenario: Verify the Thank you messages is displayed after payment is successful with Credit card payments
    #     Given I select Amount to donate --Credit card
    #     When I fill in the information in the Contact form --Credit card
    #         | Firstname | Lastname | Email          | Adress | Suburb |
    #         | test      | test     | test@gmail.com | test   | ubu   |
    #     And I click on the "Next" button at the Contact form --Credit card
    #     And I select Question 1 value and fill Question 2 --Credit card
    #         | test |
    #     And I click on the "Next" button at the Questions form --Credit card
    #     And I fill credit card information at the Payment form --Credit card
    #         | Westpac, St. George & Bank of Melbourne | 4564710000000004 | 02/29 |
    #     And I click on the "GiveNow" button at the Payment form --Credit card
    #     Then I see the Thank you messages displayed --Credit card
    #         | Thanks for donating |

    # Scenario: Verify the Thank you messages is displayed after edit total and payment is successful with Credit card payments
    #     Given I select Amount to donate --edit Credit
    #     When I fill in the information in the Contact form --edit Credit
    #         | Firstname | Lastname | Email          | Adress | Suburb |
    #         | test      | test     | test@gmail.com | test   | ubu   |
    #     And I click on the "Next" button at the Contact form --edit Credit
    #     And I select Question 1 value and fill Question 2 --edit Credit
    #         | test |
    #     And I click on the "Next" button at the Questions form --edit Credit
    #     And I edit donation Amount 
    #         | 15 |
    #     And I fill credit card information at the Payment form --edit Credit
    #         | Westpac, St. George & Bank of Melbourne | 4564710000000004 | 02/29 |
    #     And I click on the "GiveNow" button at the Payment form --edit Credit
    #     Then I see the Thank you messages displayed --edit Credit
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

    # Scenario: Verify the Thank you messages is displayed after payment is successful with Direct Debit payments
    #     Given I select Amount to donate --Direct Debit
    #     When I fill information on step Contact --Direct Debit
    #         | Firstname | Lastname | Email          | Adress | Suburb |
    #         | test      | test     | test@gmail.com | test   | ubu   |
    #     And I click on Next button on step Contact --Direct Debit
    #     And I select Question 1 value and fill Question 2 --Direct Debit
    #         | test |
    #     And I click on Next button on step Questions more --Direct Debit
    #     And I fill Direct Debit information on step Payment --Direct Debit
    #         | Merchant Warrior | 847 | 397351 |
    #     And I click on GiveNow button on step Payment --Direct Debit
    #     Then I see the Thank you messages displayed --Direct Debit
    #         | Thanks for donating |

    # Scenario: Verify that the tooltip is displayed
    #     Given I select Amount to donate --tooltip
    #     When I fill information on step Contact --tooltip
    #         | Firstname | Lastname | Email          | Adress | Suburb |
    #         | test      | test     | test@gmail.com | test   | ubu   |
    #     And I click on Next button on step Contact --tooltip
    #     And I select Question 1 value and fill Question 2 --tooltip
    #         | test |
    #     And I click on Next button on step Questions more --tooltip
    #     And I hover over the Question circle icon --tooltip
    #     Then I see the tooltip displayed --tooltip
    #         | This is the fee we charge the organisation you're donating to so we can keep the lights on and pay for staff to manage the technology. Learn more. |

    # Scenario: Verify that the donation is successful when ON the checkbox "Is this a company donation?"
    #     Given I select Amount to donate --company
    #     When I fill information on step Contact --company
    #         | Firstname | Lastname | Email          | Adress | Suburb |
    #         | test      | test     | test@gmail.com | test   | ubu    |
    #     And I click on "Is this a company donation?" checkbox --company
    #         | test |
    #     And I click on Next button on step Contact --company
    #     And I select Question 1 value and fill Question 2 --company
    #         | test |
    #     And I click on Next button on step Questions more --company
    #     And I fill credit card information on step Payment --company
    #         | Westpac, St. George & Bank of Melbourne | 4564710000000004 | 02/29 |
    #     And I click on GiveNow button on step Payment --company
    #     Then I see the Thank you messages displayed --company
    #         | Thanks for donating |

    # Scenario: Verify the Thank you messages is displayed after remove fee and payment is successful with Credit card payments
    #     Given I select Amount to donate --remove fee
    #     When I fill information on step Contact --remove fee
    #         | Firstname | Lastname | Email          | Adress | Suburb |
    #         | test      | test     | test@gmail.com | test   | ubu   |
    #     And I click on Next button on step Contact --remove fee
    #     And I select Question 1 value and fill Question 2 --remove fee
    #         | test |
    #     And I click on Next button on step Questions more --remove fee
    #     And I remove fee
    #     And I fill credit card information on step Payment --remove fee
    #         | Westpac, St. George & Bank of Melbourne | 4564710000000004 | 02/29 |
    #     And I click on GiveNow button on step Payment --remove fee
    #     Then I see the Thank you messages displayed --remove fee
    #         | Thanks for donating |

    # Scenario: Verify that the user can add fee when click on the Add Fee button on the confirmation form
    #     Given I select Amount to donate --add fee
    #     When I fill information on step Contact --add fee
    #         | Firstname | Lastname | Email          | Adress | Suburb |
    #         | test      | test     | test@gmail.com | test   | ubu   |
    #     And I select Question 1 value and fill Question 2 --add fee
    #         | test |
    #     And I remove fee --add fee
    #     And I add fee
    #     And I fill credit card information on step Payment --add fee
    #         | Westpac, St. George & Bank of Melbourne | 4564710000000004 | 02/29 |
    #     And I click on GiveNow button on step Payment --add fee
    #     Then I see the Thank you messages displayed --add fee
    #         | Thanks for donating |

    # Scenario: Verify that the donation unsuccessfully when entering less than 3 characters in the Cardholder name field
    #     Given I select Amount to donate --Cardholder
    #     When I fill in the information in the Contact form --Cardholder
    #         | Firstname | Lastname | Email          | Adress | Suburb |
    #         | test      | test     | test@gmail.com | test   | ubu   |
    #     And I click on the "Next" button at the Contact form --Cardholder
    #     And I select Question 1 value and fill Question 2 --Cardholder
    #         | test |
    #     And I click on the "Next" button at the Questions form --Cardholder
    #     And I fill less than 3 characters in the Cardholder name field at the Payment form --Cardholder
    #         | We |
    #     Then I see the error message displayed --Cardholder
    #         | Please enter at least 3 characters. |
        
    # Scenario: Verify that the donation unsuccessfully when entering an invalid card number in the Card Number field
    #     Given I select Amount to donate --invalid card
    #     When I fill in the information in the Contact form --invalid card
    #         | Firstname | Lastname | Email          | Adress | Suburb |
    #         | test      | test     | test@gmail.com | test   | ubu   |
    #     And I click on the "Next" button at the Contact form --invalid card
    #     And I select Question 1 value and fill Question 2 --invalid card
    #         | test |
    #     And I click on the "Next" button at the Questions form --invalid card
    #     And I fill invalid card information at the Payment form --invalid card
    #         | Westpac, St. George & Bank of Melbourne | 4564720000000037 | 09/29 |
    #     And I click on the "GiveNow" button at the Payment form --invalid card
    #     Then I see the unsuccess donation message displayed --invalid card
    #         | Payment Error |

    # Scenario: Verify that the donation unsuccessfully when entering date invalid in the MMYY field
    #     Given I select Amount to donate --date invalid
    #     When I fill in the information in the Contact form --date invalid
    #         | Firstname | Lastname | Email          | Adress | Suburb |
    #         | test      | test     | test@gmail.com | test   | ubu   |
    #     And I click on the "Next" button at the Contact form --date invalid
    #     And I select Question 1 value and fill Question 2 --date invalid
    #         | test |
    #     And I click on the "Next" button at the Questions form --date invalid
    #     And I fill invalid date in the Cardholder name field at the Payment form --date invalid
    #         | 301 |
    #     Then I see the error message displayed --date invalid
    #         | Date invalid. |

    # Scenario: Verify that the donation unsuccessfully when the input card expired
    #     Given I select Amount to donate --expired card
    #     When I fill in the information in the Contact form --expired card
    #         | Firstname | Lastname | Email          | Adress | Suburb |
    #         | test      | test     | test@gmail.com | test   | ubu   |
    #     And I click on the "Next" button at the Contact form --expired card
    #     And I select Question 1 value and fill Question 2 --expired card
    #         | test |
    #     And I click on the "Next" button at the Questions form --expired card
    #     And I fill expired card information at the Payment form --expired card
    #         | Westpac, St. George & Bank of Melbourne | 4564710000000012 | 02/25 |
    #     And I click on the "GiveNow" button at the Payment form --expired card
    #     Then I see the unsuccess donation message displayed --expired card
    #         | Payment Error |

    # Scenario: Verify that the donation unsuccessfully when entering short data in "CVV" field incorrect

    # Scenario: Verify that the donation unsuccessfully when the "BSB" field is blank
    #     Given I select Amount to donate --BSB blank
    #     When I fill in the information in the Contact form and click Next button --BSB blank
    #         | Firstname | Lastname | Email          | Adress | Suburb |
    #         | test      | test     | test@gmail.com | test   | ubu   |
    #     And I select Question 1 value and fill Question 2 and click Next button --BSB blank
    #         | test |
    #     And I fill in "Account Name" and "Account Number" field and click GiveNow button --BSB blank
    #         | Merchant Warrior | 397351 |
    #     Then I see the error message displayed --BSB blank
    #         | Must select at least one option |

    Scenario: Verify that the donation unsuccessfully when entering less than 3 characters in the "Account Number" field
        Given I select Amount to donate --Account Number
        When I fill in the information in the Contact form and click Next button --Account Number
            | Firstname | Lastname | Email          | Adress | Suburb |
            | test      | test     | test@gmail.com | test   | ubu   |
        And I select Question 1 value and fill Question 2 and click Next button --Account Number
            | test |
        And I enter less than 3 characters in the "Account Number" field --Account Number
            | 39 |
        Then I see the error message displayed --Account Number
            | Please lengthen this text to 4 characters or more (you are currently using 2 character). |