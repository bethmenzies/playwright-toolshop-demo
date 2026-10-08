import { expect } from '@playwright/test'
import { createBdd } from 'playwright-bdd'
import { ItemPage } from '../pages/item-page'

const { Given, When, Then } = createBdd()

When('I click on add to cart', async ({ page }) => {
  const itemPage = new ItemPage(page)
  await itemPage.addToCart()
})