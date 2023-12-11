Feature: User Request Quotation feature

    User should be able to successfully request quotation after login

    Background:
        Given user navigates to demo application
        And user provides required details in login page
        Then user should be able to login into application successfully
    
    Scenario: user request quote after successful login
        Given user requests quote after successful login
        And user succesfully create a quote
        Then user store the quote number to output file