Feature: User Journeys

  Scenario: Add first item to cart
    Given I go to "landing" page
    When I click on first item
    Then I am on "item" page
    When I click on add to cart
    And I click on cart
    Then I am on "cart" page
    And first item is in cart
    And first item quantity is 1