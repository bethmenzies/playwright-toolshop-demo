import { test, expect } from '@playwright/test'
import { RegistrationPage } from '../pages/registration-page'


test('register with no details shows errors', async ({ page }) => {
  const registrationPage = new RegistrationPage(page)
  await registrationPage.goto()
  await registrationPage.clickRegister()

  expect(await registrationPage.firstNameError.isVisible()).toBe(true)
  expect(await registrationPage.lastNameError.isVisible()).toBe(true)
  expect(await registrationPage.dateOfBirthError.isVisible()).toBe(true)
  expect(await registrationPage.countryError.isVisible()).toBe(true)
  expect(await registrationPage.postcodeError.isVisible()).toBe(true)
  expect(await registrationPage.houseNumberError.isVisible()).toBe(true)
  expect(await registrationPage.streetError.isVisible()).toBe(true)
  expect(await registrationPage.cityError.isVisible()).toBe(true)
  expect(await registrationPage.stateError.isVisible()).toBe(true)
  expect(await registrationPage.phoneNumberError.isVisible()).toBe(true)
  expect(await registrationPage.emailError.isVisible()).toBe(true)
  expect(await registrationPage.passwordError.isVisible()).toBe(true)
})

test('date of birth shows error', async ({ page }) => {
  const registrationPage = new RegistrationPage(page)
  await registrationPage.goto()
  await registrationPage.clickRegister()

  expect(await registrationPage.dateOfBirthError.isVisible()).toBe(true)

  await registrationPage.dob.fill('dob')
  await registrationPage.form.click()
  expect(await registrationPage.dateOfBirthError.isVisible()).toBe(true)

  await registrationPage.dob.fill('01-01-2000')
  await registrationPage.form.click()
  expect(await registrationPage.dateOfBirthError.isVisible()).toBe(true)

  await registrationPage.dob.fill('20000101')
  await registrationPage.form.click()
  expect(await registrationPage.dateOfBirthError.isVisible()).toBe(true)

  await registrationPage.dob.fill('2000/01/01')
  await registrationPage.form.click()
  expect(await registrationPage.dateOfBirthError.isVisible()).toBe(true)

  await registrationPage.dob.fill('2000-01-01')
  await registrationPage.form.click()
  expect(await registrationPage.dateOfBirthError.isVisible()).toBe(false)
})

test('phone number shows error', async ({ page }) => {
  const registrationPage = new RegistrationPage(page)
  await registrationPage.goto()
  await registrationPage.clickRegister()

  expect(await registrationPage.phoneNumberError.isVisible()).toBe(true)

  await registrationPage.phone.fill('phone')
  await registrationPage.form.click()
  expect(await registrationPage.phoneNumberError.isVisible()).toBe(true)

  await registrationPage.phone.fill('1234567890')
  await registrationPage.form.click()
  expect(await registrationPage.phoneNumberError.isVisible()).toBe(false)
})

test('email shows error', async ({ page }) => {
  const registrationPage = new RegistrationPage(page)
  await registrationPage.goto()
  await registrationPage.clickRegister()

  expect(await registrationPage.emailError.isVisible()).toBe(true)

  await registrationPage.email.fill('email')
  await registrationPage.form.click()
  expect(await registrationPage.emailError.isVisible()).toBe(true)

  await registrationPage.email.fill('test@example.com')
  await registrationPage.form.click()
  expect(await registrationPage.emailError.isVisible()).toBe(false)
})

test('password shows error', async ({ page }) => {
  const registrationPage = new RegistrationPage(page)
  await registrationPage.goto()
  await registrationPage.clickRegister()

  expect(await registrationPage.passwordError.isVisible()).toBe(true)

  await registrationPage.password.fill('pass')
  await registrationPage.form.click()
  expect(await registrationPage.passwordError.isVisible()).toBe(true)

  await registrationPage.password.fill('Password123!')
  await registrationPage.form.click()
  expect(await registrationPage.passwordError.isVisible()).toBe(false)
})