import { test, expect } from '@playwright/test'

test('no-data-text', async ({ page }) => {
  await page.goto('select#no-data-text')
  const input = page.locator('#preview .tiny-input__inner').first()

  await input.click()
  await page.waitForTimeout(1000)
  await expect(page.locator('body>.tiny-select-dropdown .tiny-select-dropdown__empty')).toHaveText('None')
})

test('show-empty-image', async ({ page }) => {
  await page.goto('select#no-data-text')
  const input = page.locator('#preview .tiny-input__inner').nth(1)

  await input.click()
  await page.waitForTimeout(1000)
  await expect(page.locator('body>.tiny-select-dropdown .tiny-select-dropdown__empty')).toHaveText('暂无数据')
  await expect(page.locator('.tiny-select-dropdown__empty-images')).toBeVisible()
})
