import { test, expect } from '@playwright/test'

test('测试选块角标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('button-group#sup')
  const demo = page.locator('#sup')
  const buttonGroup = demo.locator('.tiny-button-group').first()
  const item = buttonGroup.locator('.tiny-group-item > li')
  const getSup = (parent: any) => parent.locator('.tiny-group-item__sup')

  // 测试自定义背景和字体颜色
  const sup1 = getSup(item.first())
  await expect(sup1).toBeVisible()
  await expect(sup1).toHaveCSS('position', 'absolute')
  await expect(sup1).toHaveCSS('background-color', 'rgb(82, 196, 26)')

  // 测试图标角标
  const sup2 = getSup(item.nth(1))
  await expect(sup2.locator('svg')).toBeVisible()
  await expect(sup2).toHaveClass(/tiny-group-item__sup-icon/)

  // 测试文字角标
  const sup3 = getSup(item.nth(2))
  await expect(sup3).toHaveText('8折')
  await expect(sup3).toHaveClass(/tiny-group-item__sup-text/)

  // 测试自定义角标
  const sup4 = getSup(item.nth(3))
  await expect(sup4.locator('svg')).toBeVisible()
  await expect(sup4).toHaveText('8折')
  await expect(sup4).toHaveClass(/sup-slot/)
})
