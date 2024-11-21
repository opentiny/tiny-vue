import { test, expect } from '@playwright/test'

test('表单仅展示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('form#display-only')

  const demo = page.locator('#display-only')
  const switchBtn = demo.locator('.tiny-switch').first()
  const getItem = (index: number) => demo.locator('.tiny-form-item__content').nth(index)

  await switchBtn.click()
  await expect(getItem(10).locator('input')).toBeVisible()

  await switchBtn.click()
  await expect(demo.locator('.tiny-form-item').first().locator('input')).not.toBeVisible()
  await expect(getItem(1).locator('.tiny-radio__inner')).not.toBeVisible()
  await expect(getItem(1)).toHaveText('男')
  await expect(getItem(4).locator('input')).not.toBeVisible()
  await expect(getItem(4).locator('.tiny-input-display-only__content')).toHaveText('黄金糕')
  await expect(getItem(5).locator('.tiny-input-display-only__content')).toHaveText('黄金糕; 双皮奶')
})
