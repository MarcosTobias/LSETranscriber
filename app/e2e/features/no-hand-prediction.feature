Feature: Making a prediction with no hand on the image


    Scenario: The user is on the main page
        Given A prediction
        When The user clicks on start recording
        And Waits two seconds with no hand present on his screen
        Then The prediction adds a blank