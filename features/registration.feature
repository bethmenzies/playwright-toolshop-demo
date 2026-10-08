Feature: Registration

  Scenario: Empty registration form produces errors
    Given I go to "registration" page
    When I click on register
    Then I see "first name" error
    And I see "last name" error
    And I see "date of birth" error
    And I see "country" error
    And I see "postcode" error
    And I see "house number" error
    And I see "street" error
    And I see "city" error
    And I see "state" error
    And I see "phone number" error
    And I see "email" error
    And I see "password" error

  Scenario: Date of birth errors
    Given I go to "registration" page
    When I click on register
    Then I see "date of birth" error
    When I type "dob" in "date of birth"
    And I click on form
    Then I see "date of birth" error
    When I type "01-01-2000" in "date of birth"
    And I click on form
    Then I see "date of birth" error
    When I type "20000101" in "date of birth"
    And I click on form
    Then I see "date of birth" error
    When I type "2000/01/01" in "date of birth"
    And I click on form
    Then I see "date of birth" error
    When I type "2000-01-01" in "date of birth"
    And I click on form
    Then there is no "date of birth" error

  Scenario: Phone number errors
    Given I go to "registration" page
    When I click on register
    Then I see "phone number" error
    When I type "phone" in "phone number"
    And I click on form
    Then I see "phone number" error
    When I type "1234567890" in "phone number"
    And I click on form
    Then there is no "phone number" error

  Scenario: Email errors
    Given I go to "registration" page
    When I click on register
    Then I see "email" error
    When I type "email" in "email"
    And I click on form
    Then I see "email" error
    When I type "test@example.com" in "email"
    And I click on form
    Then there is no "email" error

  Scenario:
    Given I go to "registration" page
    When I click on register
    Then I see "password" error
    When I type "pass" in "password"
    And I click on form
    Then I see "password" error
    When I type "Password123!" in "password"
    And I click on form
    Then there is no "password" error