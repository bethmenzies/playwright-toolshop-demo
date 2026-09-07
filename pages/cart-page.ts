import { expect, type Locator, type Page } from '@playwright/test'

export class CartPage {
  readonly page: Page
  readonly itemQuantity: Locator
  readonly itemName: Locator

  constructor(page: Page) {
    this.page = page
    this.itemName = page.locator('[data-test="product-title"]')
    this.itemQuantity = page.locator('[data-test="product-quantity"]')

  }
}