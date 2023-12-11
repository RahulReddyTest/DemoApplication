Feature: edit profile feature

    Used should be able to edit the profile
 
    Background:
        Given user navigates to demo application
        And user provides required details in login page
        Then user should be able to login into application successfully
    
    Scenario: edit rofile
        Given user navigates to edit profile screen
        And user edits the profile
        Then profile should be updated successfully
