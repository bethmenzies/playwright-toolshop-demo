import { createBdd } from 'playwright-bdd'
import { ItemPage } from '../pages/item-page'

const { When } = createBdd()

When('I click on add to cart', async ({ page }) => {
  const itemPage = new ItemPage(page)
  await itemPage.addToCart()
})