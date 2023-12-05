import { test, expect } from '@playwright/test'

test('测试手动控制tooltip', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tooltip#control')

  const preview = page.locator('.pc-demo-container')
  const visibleSwitch = preview.locator('.tiny-switch').nth(0)
  const manualSwitch = preview.locator('.tiny-switch').nth(1)
  const disableSwitch = preview.locator('.tiny-switch').nth(2)

  const pop1 = page.getByText('智能提示的提示内容')

  await preview.getByText('内容不超长').hover()
  await expect(pop1).toBeVisible()
  await page.waitForTimeout(50)

  await visibleSwitch.click()
  await preview.getByText('内容不超长').hover()
  await expect(pop1).toBeHidden()
})
