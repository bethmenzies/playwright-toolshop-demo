import { expect, type Locator, type Page } from '@playwright/test';

export class ItemPage {
  readonly page: Page;
  readonly addToCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = page.locator('[data-test="add-to-cart"]');
  }

  async addToCart() {
    await this.addToCartButton.click();
  }
}