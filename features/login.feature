# @XrayTestKey=XSP-58
# Feature: Launch the application

# @XrayTestKey=XSP-58
# @smoke
# Scenario: Verifying the fields which are present in the Home page

# Given Visit the home page

# @regression   
# Scenario Outline: Scenario Outline name
# Given Visit the home page
# When I enter Valid <Username> and <Password>
# Then Launch The application
# When select the item and add to the Cart
# Then Verify the item details

# Examples:
#     | Username | Password |   
#     |TEST_USER | ABC123 |
#     | standard_user  | secret_sauce | 
