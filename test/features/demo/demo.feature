Feature: Demo feature

    @demo
    Scenario Outline: Run first demo features
    Given Google page is opened
    When Search with <SearchItem>
    Then Click on the first search results
    Then URL should match <ExpectedURL>
   
    Examples:
    | Test ID | SearchItem |ExpectedURL |
    |DEMO_TC001  | https://webdriver.io/  | https://webdriver.io/ |