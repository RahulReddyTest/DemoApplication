Feature: logout feature

    User should be able to successfully logout from the Application
 
    Scenario: user logout from application
        Given user navigates to demo application
        And user provides required details in login page
        Then user should be able to login into application successfully
        And user logout from the application
        Then user should be able to logout from application
