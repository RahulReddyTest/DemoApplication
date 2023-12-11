Feature: Demo Application login feature

    User should be able to successfully login into the Application
@focus 
    Scenario: user login into application
        Given user navigates to demo application
        And user provides required details in login page
        Then user should be able to login into application successfully

    Scenario: login failure
        Given user navigates to demo application
        And user provides invalid details in login page
        Then user should not be able to login to application