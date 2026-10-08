import { expect } from '@playwright/test'
import { createBdd } from 'playwright-bdd'

const { Given, When, Then } = createBdd()

Given('I go to {string} page', async ({ page }, pageName) => {
  switch(pageName) {
    case 'landing': {
      await page.goto('/')
      break
    }
    case 'registration': {
      await page.goto('/auth/register')
      break
    }
    default: {
      throw new Error(`Unknown page name: ${pageName}`)
    }
  }
})

Then('I am on {string} page', async ({ page }, pageName) => {
  switch(pageName) {
    case 'landing': {
      await expect(page).toHaveURL(new RegExp(`/`))
      break
    }
    case 'item': {
      await expect(page).toHaveURL(new RegExp(`/product/*`))
      break
    }
    case 'cart': {
      await expect(page).toHaveURL(new RegExp('/checkout'))
      break
    }
    default: {
      throw new Error(`Unknown page name: ${pageName}`)
    }
  }
})