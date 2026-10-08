import { expect } from '@playwright/test'
import { createBdd } from 'playwright-bdd'
import { LandingPage } from '../pages/landing-page'

const { Given, When, Then } = createBdd()

When('I click on first item', async ({ page }) => {
  const landingPage = new LandingPage(page)
  await landingPage.clickFirstItem()
})

When('I click on cart', async ({ page }) => {
  const landingPage = new LandingPage(page)
  await landingPage.clickCart()
})