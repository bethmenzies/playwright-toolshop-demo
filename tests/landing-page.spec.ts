import { test, expect } from '@playwright/test'
import { LandingPage } from '../pages/landing-page'
import { ItemPage } from '../pages/item-page'
import { CartPage } from '../pages/cart-page'


test('add first item to cart', async ({ page }) => {
  const landingPage = new LandingPage(page)
  const itemPage = new ItemPage(page)
  const cartPage = new CartPage(page)
  await landingPage.goto()
  const productName = await landingPage.itemName.first().textContent()
  await landingPage.clickFirstItem()
  await itemPage.addToCart()
  await landingPage.clickCart()
  const cartItemName = await cartPage.itemName.textContent()
  expect(cartItemName?.trim()).toBe(productName?.trim())
  await expect(cartPage.itemQuantity).toHaveValue('1')
})
