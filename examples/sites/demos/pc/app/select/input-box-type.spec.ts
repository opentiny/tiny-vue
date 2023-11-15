import { test, expect } from '@playwright/test'

test('default', async ({ page }) => {
  await page.goto('select#input-box-type')
  const select = page.locator('#preview .tiny-select').first()

  await expect(select).toHaveClass(/tiny-select__underline/)
})

test('disable', async ({ page }) => {
  await page.goto('select#input-box-type')
  const select = page.locator('#preview .tiny-select').nth(1)
  const input = select.locator('.tiny-input__inner')

  await expect(select).toHaveClass(/tiny-select__underline/)
  const hasDisabled = await input.evaluate((input) => input.hasAttribute('disabled'))
  await expect(hasDisabled).toBe(true)
})

test('multiple', async ({ page }) => {
  await page.goto('select#input-box-type')
  const select = page.locator('#preview .tiny-select').nth(2)

  await expect(select).toHaveClass(/tiny-select__underline/)
  await expect(select).toHaveClass(/tiny-select__multiple/)
})
