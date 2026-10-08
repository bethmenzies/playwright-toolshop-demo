import { expect } from '@playwright/test'
import { createBdd } from 'playwright-bdd'
import { RegistrationPage } from '../pages/registration-page'

const { Given, When, Then } = createBdd()

When('I click on register', async ({ page }) => {
  const registrationPage = new RegistrationPage(page)
  await registrationPage.clickRegister()
})

Then('I see {string} error', async ({ page }, errorField) => {
  const registrationPage = new RegistrationPage(page)
  switch(errorField) {
    case 'first name': {
      expect(await registrationPage.firstNameError.isVisible()).toBe(true)
      break
    }
    case 'last name': {
      expect(await registrationPage.lastNameError.isVisible()).toBe(true)
      break
    }
    case 'date of birth': {
      expect(await registrationPage.dateOfBirthError.isVisible()).toBe(true)
      break
    }
    case 'country': {
      expect(await registrationPage.countryError.isVisible()).toBe(true)
      break
    }
    case 'postcode': {
      expect(await registrationPage.postcodeError.isVisible()).toBe(true)
      break
    }
    case 'house number': {
      expect(await registrationPage.houseNumberError.isVisible()).toBe(true)
      break
    }
    case 'street': {
      expect(await registrationPage.streetError.isVisible()).toBe(true)
      break
    }
    case 'city': {
      expect(await registrationPage.cityError.isVisible()).toBe(true)
      break
    }
    case 'state': {
      expect(await registrationPage.stateError.isVisible()).toBe(true)
      break
    }
    case 'phone number': {
      expect(await registrationPage.phoneNumberError.isVisible()).toBe(true)
      break
    }
    case 'email': {
      expect(await registrationPage.emailError.isVisible()).toBe(true)
      break
    }
    case 'password': {
      expect(await registrationPage.passwordError.isVisible()).toBe(true)
      break
    }
  }
})

When('I type {string} in {string}', async ({ page }, value, field) => {
  const registrationPage = new RegistrationPage(page)
  switch(field) {
    case 'first name': {
      await registrationPage.firstName.fill(value)
      break
    }
    case 'last name': {
      await registrationPage.lastName.fill(value)
      break
    }
    case 'date of birth': {
      await registrationPage.dateOfBirth.fill(value)
      break
    }
    case 'country': {
      await registrationPage.country.fill(value)
      break
    }
    case 'postcode': {
      await registrationPage.postcode.fill(value)
      break
    }
    case 'house number': {
      await registrationPage.houseNumber.fill(value)
      break
    }
    case 'street': {
      await registrationPage.street.fill(value)
      break
    }
    case 'city': {
      await registrationPage.city.fill(value)
      break
    }
    case 'state': {
      await registrationPage.state.fill(value)
      break
    }
    case 'phone number': {
      await registrationPage.phoneNumber.fill(value)
      break
    }
    case 'email': {
      await registrationPage.email.fill(value)
      break
    }
    case 'password': {
      await registrationPage.password.fill(value)
      break
    }
  }
})

When('I click on form', async ({ page }) => {
  const registrationPage = new RegistrationPage(page)
  await registrationPage.form.click()
})

Then('there is no {string} error', async ({ page }, field) => {
  const registrationPage = new RegistrationPage(page)
  switch(field) {
    case 'first name': {
      expect(await registrationPage.firstNameError.isVisible()).toBe(false)
      break
    }
    case 'last name': {
      expect(await registrationPage.lastNameError.isVisible()).toBe(false)
      break
    }
    case 'date of birth': {
      expect(await registrationPage.dateOfBirthError.isVisible()).toBe(false)
      break
    }
    case 'country': {
      expect(await registrationPage.countryError.isVisible()).toBe(false)
      break
    }
    case 'postcode': {
      expect(await registrationPage.postcodeError.isVisible()).toBe(false)
      break
    }
    case 'house number': {
      expect(await registrationPage.houseNumberError.isVisible()).toBe(false)
      break
    }
    case 'street': {
      expect(await registrationPage.streetError.isVisible()).toBe(false)
      break
    }
    case 'city': {
      expect(await registrationPage.cityError.isVisible()).toBe(false)
      break
    }
    case 'state': {
      expect(await registrationPage.stateError.isVisible()).toBe(false)
      break
    }
    case 'phone number': {
      expect(await registrationPage.phoneNumberError.isVisible()).toBe(false)
      break
    }
    case 'email': {
      expect(await registrationPage.emailError.isVisible()).toBe(false)
      break
    }
    case 'password': {
      expect(await registrationPage.passwordError.isVisible()).toBe(false)
      break
    }
  }
})