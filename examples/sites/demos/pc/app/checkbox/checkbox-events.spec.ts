import { test, expect } from '@playwright/test'

test('事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('checkbox#checkbox-events')
  const preview = page.locator('#preview')
  const checkbox = preview.locator('.tiny-checkbox-group > label')
  await checkbox.nth(1).click()
  await expect(page.getByText('当前选择：["复选框1","复选框2"]')).toBeVisible()
  await checkbox.nth(0).click()
  await checkbox.nth(1).click()
  await expect(page.getByText('当前选择：[]')).toBeVisible()
})
