import { test, expect } from '@playwright/test'

test('过滤器模式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('checkbox#shape')

  const demo = page.locator('#shape')
  const checkboxGroup = demo.locator('.tiny-checkbox-group')
  const tooltip = page.locator('.tiny-tooltip[aria-hidden="false"]')

  await expect(demo.locator('.tiny-checkbox').first()).toHaveCSS('background-color', 'rgb(230, 230, 230)')
  await expect(checkboxGroup.locator('.tiny-checkbox').first()).toHaveCSS('background-color', 'rgb(230, 230, 230)')
  await expect(checkboxGroup.locator('.tiny-checkbox').nth(1)).toHaveCSS('background-color', 'rgb(230, 230, 230)')
  await checkboxGroup.locator('.tiny-checkbox').nth(1).hover()
  await page.waitForTimeout(50)
  await expect(tooltip).toHaveText('复选框2复选框2复选框2复选框2复选框2复选框2')
})
