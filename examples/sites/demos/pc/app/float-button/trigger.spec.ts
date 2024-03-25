import { test, expect } from '@playwright/test'

test('测试按钮菜单模式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('float-button#trigger')
  const firstButton = page.locator('.tiny-float-button').first()
  const secondButton = page.locator('.tiny-float-button').nth(1)
  const thirdButton = page.locator('.tiny-float-button').nth(2)
  await firstButton.click()
  await page.waitForTimeout(1000)
  expect(firstButton.locator('.tiny-float-button--open')).not.toBeNull()
  await secondButton.hover()
  await page.waitForTimeout(1000)
  expect(secondButton.locator('.tiny-float-button--open')).not.toBeNull()
  expect(thirdButton.locator('.tiny-float-button--open')).not.toBeNull()
})
