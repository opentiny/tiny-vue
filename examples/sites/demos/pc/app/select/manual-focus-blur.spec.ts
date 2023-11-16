import { test, expect } from '@playwright/test'

test('manual-focus-blur', async ({ page }) => {
  await page.goto('select#manual-focus-blur')
  await page.getByRole('button', { name: '单击按钮 Select 将获取焦点' }).click()
  await page.waitForTimeout(1000)
  const dropdown = page.locator('.tiny-select-dropdown')
  await expect(dropdown).toBeVisible()
  await page.getByRole('button', { name: '单击按钮 Select 将失去焦点' }).click()
  await page.waitForTimeout(1000)
  await expect(dropdown).toBeHidden()
})
