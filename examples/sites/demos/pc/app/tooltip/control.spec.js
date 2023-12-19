import { test, expect } from '@playwright/test'

test('测试手动控制tooltip', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tooltip#control')

  const preview = page.locator('.pc-demo-container')
  const visibleSwitch = preview.locator('.tiny-switch').nth(0)
  const manualSwitch = preview.locator('.tiny-switch').nth(1)
  const disableSwitch = preview.locator('.tiny-switch').nth(2)

  const pop1 = page.getByText('智能提示的提示内容')
  const pop2 = page.getByText('手动控制模式的提示内容')
  const pop3 = page.getByText('禁用的提示内容')

  // 测试visible
  await preview.getByText('内容不超长').hover()
  await expect(pop1).toBeVisible()
  await page.waitForTimeout(20)

  await visibleSwitch.click()
  await preview.getByText('内容不超长').hover()
  await expect(pop1).toBeHidden()

  await page.waitForTimeout(20)

  // 测试manual
  await expect(pop2).toBeHidden()
  await manualSwitch.click()
  await expect(pop2).toBeVisible()

  await page.waitForTimeout(20)

  // 测试禁用
  await preview.getByText('我的内容很长很长').nth(2).hover()
  await expect(pop3).toBeVisible()
  await disableSwitch.click()
  await expect(pop3).toBeHidden()
})
