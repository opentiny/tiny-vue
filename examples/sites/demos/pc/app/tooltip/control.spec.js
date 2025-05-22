import { test, expect } from '@playwright/test'

test('测试手动控制 tooltip', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tooltip#control')

  const preview = page.locator('.pc-demo-container')
  const visibleSwitch = preview.locator('.tiny-switch').nth(0)
  const manualSwitch = preview.locator('.tiny-switch').nth(1)
  const disableSwitch = preview.locator('.tiny-switch').nth(2)

  const content1 = preview.locator('.tiny-tooltip:not(.tiny-tooltip__popper)').nth(0) // 智能识别  超长
  const content2 = preview.locator('.tiny-tooltip:not(.tiny-tooltip__popper)').nth(1) // 智能识别  不超长
  const content3 = preview.locator('.tiny-tooltip:not(.tiny-tooltip__popper)').nth(2) // 手动控制
  const content4 = preview.locator('.tiny-tooltip:not(.tiny-tooltip__popper)').nth(3) // 禁用模式

  const pop1 = page.getByText('智能提示的提示内容').nth(1)
  const pop2 = page.getByText('手动控制模式的提示内容')
  const pop3 = page.getByText('禁用的提示内容')

  // 测试 visible
  await content2.dispatchEvent('mouseenter')
  await expect(pop1).toBeVisible()
  await page.waitForTimeout(20)

  // await visibleSwitch.click()
  // await page.waitForTimeout(20)
  // await content2.dispatchEvent('mouseleave')
  // await page.waitForTimeout(20)
  // await expect(pop1).toBeHidden()

  await page.waitForTimeout(20)

  // 测试 manual
  await expect(pop2).toBeHidden()
  await manualSwitch.click()
  await expect(pop2).toBeVisible()

  await page.waitForTimeout(20)

  // 测试禁用
  await content4.hover()
  await expect(pop3).toBeVisible()
  await disableSwitch.click()
  await expect(pop3).toBeHidden()
})
