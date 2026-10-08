import { type Locator, type Page } from '@playwright/test'

export class RegistrationPage {
  readonly page: Page
  readonly registerButton: Locator

  // form
  readonly form: Locator
  readonly dob: Locator
  readonly phone: Locator
  readonly email: Locator
  readonly password: Locator

  // errors
  readonly firstNameError: Locator
  readonly lastNameError: Locator
  readonly dateOfBirthError: Locator
  readonly countryError: Locator
  readonly postcodeError: Locator
  readonly houseNumberError: Locator
  readonly streetError: Locator
  readonly cityError: Locator
  readonly stateError: Locator
  readonly phoneNumberError: Locator
  readonly emailError: Locator
  readonly passwordError: Locator

  constructor(page: Page) {
    this.page = page
    this.registerButton = page.locator('[data-test="register-submit"]')

    // form
    this.form = page.locator('[data-test="register-form"]')
    this.dob = page.locator('[data-test="dob"]')
    this.phone = page.locator('[data-test="phone"]')
    this.email = page.locator('[data-test="email"]')
    this.password = page.locator('[data-test="password"]')

    // errors
    this.firstNameError = page.locator('[data-test="first-name-error"]')
    this.lastNameError = page.locator('[data-test="last-name-error"]')
    this.dateOfBirthError = page.locator('[data-test="dob-error"]')
    this.countryError = page.locator('[data-test="country-error"]')
    this.postcodeError = page.locator('[data-test="postal_code-error"]')
    this.houseNumberError = page.locator('[data-test="house_number-error"]')
    this.streetError = page.locator('[data-test="street-error"]')
    this.cityError = page.locator('[data-test="city-error"]')
    this.stateError = page.locator('[data-test="state-error"]')
    this.phoneNumberError = page.locator('[data-test="phone-error"]')
    this.emailError = page.locator('[data-test="email-error"]')
    this.passwordError = page.locator('[data-test="password-error"]')
  }

  async goto() {
    await this.page.goto('/auth/register')
  }

  async clickRegister() {
    await this.registerButton.click()
  }
}