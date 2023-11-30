import { test, expect } from '@playwright/test'

test('事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('checkbox#checkbox-events')

  const demo = page.locator('#checkbox-events')
  const checkbox = demo.locator('.tiny-checkbox-group > label')

  await checkbox.nth(1).click()
  await expect(page.getByText('change 事件触发了，选中值为：复选框1,复选框2')).toBeVisible()
  await checkbox.nth(0).click()
  await expect(page.getByText('change 事件触发了，选中值为：复选框2')).toBeVisible()
})
