Feature: The user can navigate between the different views

    Scenario: The user can go to the about page from the main page
        Given The user is on the main page
        When The user clicks on About
        Then The user is shown the about page
    
    Scenario: The user can go to the help page from the about page
        Given The user is on the about page
        When The user clicks on Help
        Then The user is shown the help page
    
    Scenario: The user can go to the main page from the help page
        Given The user is on the help page
        When The user clicks on LSETranscriber
        Then The user is shown the main page