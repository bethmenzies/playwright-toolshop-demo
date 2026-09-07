import { type Locator, type Page } from '@playwright/test'

export class LandingPage {
  readonly page: Page
  readonly item: Locator
  readonly cart: Locator
  readonly itemName: Locator

  constructor(page: Page) {
    this.page = page
    this.item = page.locator('.card:not(.skeleton)')
    this.cart = page.locator('[data-test="nav-cart"]')
    this.itemName = page.locator('[data-test="product-name"]')
  }

  async goto() {
    await this.page.goto('/')
  }

  async clickFirstItem() {
    await this.item.first().click()
  }

  async clickCart() {
    await this.cart.click()
  }
}