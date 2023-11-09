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
    #     Then I should see the Thank you messages displayed --Credit card
    #         | Thanks for donating |

    Scenario: Verify the Thank you messages is displayed after edit total and payment is successful with Credit card payments
        Given I select Amount to donate --edit Credit
        When I fill in the information in the Contact form --edit Credit
            | Firstname | Lastname | Email          | Adress | Suburb |
            | test      | test     | test@gmail.com | test   | ubu   |
        And I click on the "Next" button at the Contact form --edit Credit
        And I select Question 1 value and fill Question 2 --edit Credit
            | test |
        And I click on the "Next" button at the Questions form --edit Credit
        And I edit donation Amount 
            | 15 |
        And I fill credit card information at the Payment form --edit Credit
            | Westpac, St. George & Bank of Melbourne | 4564710000000004 | 02/29 |
        And I click on the "GiveNow" button at the Payment form --edit Credit
        Then I should see the Thank you messages displayed --edit Credit
            | Thanks for donating |

    # Scenario: Verify that the user donation successfully when using Visa card
    #     Given I select Amount to donate --Visa card
    #     When I fill information on step Contact --Visa card
    #         | Firstname | Lastname | Email          | Adress | Suburb |
    #         | test      | test     | test@gmail.com | test   | ubu   |
    #     And I click on Next button on step Contact --Visa card
    #     And I select Question 1 value and fill Question 2 --Visa card
    #         | test |
    #     And I click on Next button on step Questions more --Visa card
    #     And I fill Visa card information on step Payment --Visa card
    #         | Westpac, St. George & Bank of Melbourne | 4564710000000004 | 02/29 |
    #     And I click on GiveNow button on step Payment --Visa card
    #     Then I should see the Thank you messages displayed --Visa card
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
    #     And I fill Master card information on step Payment --Master card
    #         | Westpac, St. George & Bank of Melbourne | 5163200000000008 | 08/30 |
    #     And I click on GiveNow button on step Payment --Master card
    #     Then I should see the Thank you messages displayed --Master card
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
    #     And I fill Amex card information on step Payment --Amex card
    #         | Westpac, St. George & Bank of Melbourne | 376000000000006 | 06/30 |
    #     And I click on GiveNow button on step Payment --Amex card
    #     Then I should see the Thank you messages displayed --Amex card
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
    #     Then I should see the Thank you messages displayed --Direct Debit
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
    #     Then I should see the tooltip displayed --tooltip
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
    #     Then I should see the Thank you messages displayed --company
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
    #     Then I should see the Thank you messages displayed --remove fee
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
    #     Then I should see the Thank you messages displayed --add fee
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
    #     Then I should see the error message displayed --Cardholder
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
    #     Then I should see the unsuccess donation message displayed --invalid card
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
    #         | 2330 |
    #     Then I should see the error message displayed --date invalid
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
    #     Then I should see the unsuccess donation message displayed --expired card
    #         | Payment Error |

    # Scenario: Verify that the donation unsuccessfully when entering short data in "CVV" field incorrect
    #     Given I select type of donation, amount to donate --short CVV
    #     When I click on the "Donate Now" button at the Amount form --short CVV
    #     And I fill in the information and click on the "Next" button in the Contact form --short CVV
    #         | Firstname | Lastname | Email          | Adress | Suburb |
    #         | test      | test     | test@gmail.com | test   | ubu    |
    #     And I select and fill question and click on the "Next" button in the Question form --short CVV
    #         | test |
    #     And I enter short data in "CVV" field --short CVV
    #         | 1 |
    #     Then I should see the error message displaying --short CVV
    #         | Too short. |

    # Scenario: Verify that the donation unsuccessfully when entering long data in "CVV" field incorrect
    #     Given I select type of donation, amount to donate --long CVV
    #     When I click on the "Donate Now" button at the Amount form --long CVV
    #     And I fill in the information and click on the "Next" button in the Contact form --long CVV
    #         | Firstname | Lastname | Email          | Adress | Suburb |
    #         | test      | test     | test@gmail.com | test   | ubu    |
    #     And I select and fill question and click on the "Next" button in the Question form --long CVV
    #         | test |
    #     And I enter long data in "CVV" field --long CVV
    #         | 1234 |
    #     Then I should see the error message displaying --long CVV
    #         | Too long. |

    # Scenario: Verify that the donation unsuccessfully when the "BSB" field is blank
    #     Given I select Amount to donate --BSB blank
    #     When I fill in the information in the Contact form and click Next button --BSB blank
    #         | Firstname | Lastname | Email          | Adress | Suburb |
    #         | test      | test     | test@gmail.com | test   | ubu    |
    #     And I select Question 1 value and fill Question 2 and click Next button --BSB blank
    #         | test |
    #     And I fill in "Account Name" and "Account Number" field and click GiveNow button --BSB blank
    #         | Merchant Warrior | 397351 |
    #     Then I should see the error message displayed --BSB blank
    #         | Must select at least one option |

    # Scenario: Verify that the donation unsuccessfully when entering less than 3 characters in the "Account Number" field
    #     Given I select Amount to donate --Account Number
    #     When I fill in the information in the Contact form and click Next button --Account Number
    #         | Firstname | Lastname | Email          | Adress | Suburb |
    #         | test      | test     | test@gmail.com | test   | ubu   |
    #     And I select Question 1 value and fill Question 2 and click Next button --Account Number
    #         | test |
    #     And I enter less than 3 characters in the "Account Number" field --Account Number
    #         | 39 |
    #     Then I should see the error message displayed --Account Number
    #         | Please lengthen this text to 4 characters or more (you are currently using 2 character). |

    # Scenario: Verify that the "From Australia" form is displayed when the "Enter a foreign address" hyperlink is clicked
    #     Given I select Amount to donate --From Australia
    #     When I click on the "Enter a foreign address" hyperlink --From Australia
    #     Then I should see the "From Australia" form displayed --From Australia

    # Scenario: Verify that the "Not From Australia" form is displayed
    #     Given I select Amount to donate --Not From Australia
    #     Then I should see the "Not From Australia" form displayed --Not From Australia

    # Scenario: Verify that the user can choose an end date is a future date
    #     Given I click on "Would you like this donation to be ongoing?" checkbox --future
    #     When I choose an end date in the future
    #     And I should not see the red error validation message displayed under End date field--future

    # Scenario: Verify that the user can't choose an end date is a today
    #     Given I click on "Would you like this donation to be ongoing?" checkbox --today
    #     When I choose an end date today
    #     And I should see the red error validation message displayed under End date field --today
    #         | Please enter a future date. |

    # Scenario: Verify that the user can't choose an end date is a date in the past
    #     Given I click on "Would you like this donation to be ongoing?" checkbox --past
    #     When I choose an end date in the past
    #     And I should see the red error validation message displayed under End date field --past
    #         | Please enter a future date. |

    # Scenario: Verify that shows red validate message when when enter wrong dd/mm/yyyy format
    #     Given I click on "Would you like this donation to be ongoing?" checkbox --wrong format
    #     When I fill the date in wrong format
    #     And I should see the red error validation message displayed under End date field --wrong format
    #         | Please select a date by using the date picker or enter a date in 'dd-mm-yyyy' format |

    # Scenario: Verify that the user donation unsuccessfully
    #     Given I select Amount to donate --unsuccessfully
    #     When I fill in the information in the Contact form and click on the Next button --unsuccessfully
    #         | Firstname | Lastname | Email          | Adress | Suburb |
    #         | test      | test     | test@gmail.com | test   | ubu    |
    #     And I select Question 1 value and fill Question 2 and click on the Next button --unsuccessfully
    #         | test |
    #     And I fill incorrectly entered card information at the Payment form and click on GiveNow buton --unsuccessfully
    #         | Westpac, St. George & Bank of Melbourne | 4293189100000008 | 04/32 |
    #     Then I should see the unsuccess payment message displayed --unsuccessfully
    #         | Payment Error |

    # Scenario: Verify that the donation unsuccessfully when one of the 3 cards is incorrectly entered (Visa, MasterCard, Amex)
    #     Given I select Amount to donate --incorrect card
    #     When I fill in the information in the Contact form and click on the Next button --incorrect card
    #         | Firstname | Lastname | Email          | Adress | Suburb |
    #         | test      | test     | test@gmail.com | test   | ubu    |
    #     And I select Question 1 value and fill Question 2 and click on the Next button --incorrect card
    #         | test |
    #     And I fill incorrectly entered card information at the Payment form and click on the GiveNow button --incorrect card
    #         | Westpac, St. George & Bank of Melbourne | 36430000000007 | 0632 |
    #     Then I should see the red error message displayed under CardNumber field --incorrect card
    #         | Card type not accepted. |