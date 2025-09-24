import { expect, test } from '@playwright/test'

test('线性渐变', async ({ page }) => {
  await page.goto('color-select-panel#linear-gradient')
  await page.locator('#linear-gradient').getByRole('button', { name: 'Show Color select panel' }).click()
  expect(await page.locator('.tiny-color-select-panel__linear-gradient__thumb').count()).toBe(2)
  await page.locator('.tiny-color-select-panel__linear-gradient__thumb').first().click()
  await page.locator('.tiny-color-select-panel__linear-gradient').click()
  await page.locator('.tiny-color-select-panel__linear-gradient > div:nth-child(2)').click()
})
