Feature: Search Google

  Scenario Outline: As a user, I can perform a Google Search

  Given I run a google search for the word <search>
  When Open the second result in new tab 
  Then Check that text <search> is written on the page title

    Examples:
      | search    | 
      | Selenium  |
