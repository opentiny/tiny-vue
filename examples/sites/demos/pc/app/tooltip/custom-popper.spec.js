import { test, expect } from '@playwright/test'

test('测试是否显示箭头', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tooltip#custom-popper')

  const preview = page.locator('.pc-demo-container')
  const button = preview.getByRole('button', { name: '鼠标悬浮在这里' })
  const tip = page.getByText('我是提示内容')
  const arrowSwitch = preview.locator('.tiny-switch').nth(0)
  const enterableSwitch = preview.locator('.tiny-switch').nth(1)

  const arrow = tip.locator('div.popper__arrow')

  // 测试小箭头
  await page.waitForTimeout(20)
  await button.hover()
  await page.waitForTimeout(20)
  await expect(arrow).toHaveCount(1)
  await page.waitForTimeout(20)
  await arrowSwitch.click()
  await page.waitForTimeout(20)
  await button.hover()
  await expect(arrow).toHaveCount(0)
  await page.waitForTimeout(20)

  // 测试可进入
  await tip.hover()
  await page.waitForTimeout(20)
  await expect(tip).toBeVisible()

  await enterableSwitch.click()
  await page.waitForTimeout(20)

  await button.hover()
  await tip.hover()
  await page.waitForTimeout(20)
  await expect(tip).toBeHidden()

  // 测试字体
  await expect(tip).toHaveCSS('font-size', '20px')
})
