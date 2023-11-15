import { test, expect } from '@playwright/test'

test('name', async ({ page }) => {
  await page.goto('http://localhost:7130/pc/select/name')

  const input = page.locator('#preview .tiny-input__inner')
  await expect(input).toHaveAttribute('name', 'inputName')
})

test('placeholder', async ({ page }) => {
  await page.goto('http://localhost:7130/pc/select/name')

  const input = page.locator('#preview .tiny-input__inner')
  await expect(input).toHaveAttribute('placeholder', '自定义 placeholder')
})

test('autocomplete', async ({ page }) => {
  await page.goto('http://localhost:7130/pc/select/name')

  const input = page.locator('#preview .tiny-input__inner')
  await expect(input).toHaveAttribute('autocomplete', 'off')
})

