Feature: User Retrive Quotation feature

    User should be able to successfully retrieve quotation

    Background:
        Given user navigates to demo application
        And user provides required details in login page
        Then user should be able to login into application successfully
    
    Scenario: user retrieve quote
        Given user retreive quote after successful login
        Then user verify quote retrieval