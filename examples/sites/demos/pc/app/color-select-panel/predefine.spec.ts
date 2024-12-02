import { test, expect } from '@playwright/test'

test('预定义颜色', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('color-select-panel#predefine')

  await page.getByRole('button', { name: 'Toggle Predefine color' }).click()
  await page.getByRole('button', { name: 'Show Color select panel' }).click()
  await page.getByRole('button', { name: '预定义颜色' }).click()
  expect(page.locator('.tiny-color-select-panel__predefine__color-block')).toHaveCount(8)
  await page.getByRole('button', { name: 'Append predefine color' }).click()
  await page.getByRole('button', { name: 'Show Color select panel' }).click()
  await page.getByRole('button', { name: '预定义颜色' }).click()
  expect(page.locator('.tiny-color-select-panel__predefine__color-block')).toHaveCount(9)
  await page.getByRole('button', { name: 'Pop predefine color' }).click()
  await page.getByRole('button', { name: 'Show Color select panel' }).click()
  await page.getByRole('button', { name: '预定义颜色' }).click()
  expect(page.locator('.tiny-color-select-panel__predefine__color-block')).toHaveCount(8)
  await page.getByRole('button', { name: 'Toggle Predefine color' }).click()
  await page.getByRole('button', { name: 'Show Color select panel' }).click()
})
