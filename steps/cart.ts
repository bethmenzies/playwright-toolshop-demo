import { expect } from '@playwright/test'
import { createBdd } from 'playwright-bdd'
import { CartPage } from '../pages/cart-page'

const { Given, When, Then } = createBdd()

Then('first item is in cart', async ({ page }) => {
  const cartPage = new CartPage(page)
  await cartPage.itemName.textContent()
})


Then('first item quantity is 1', async ({ page }) => {
  const cartPage = new CartPage(page)
  await expect(cartPage.itemQuantity).toHaveValue('1')
})