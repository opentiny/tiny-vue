import { test, expect } from '@playwright/test'

test('测试 Alert 自定义关闭按钮文本', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/alert/close-text')

  const alert = page.locator('.tiny-alert')
  const closeText = alert.last().locator('.is-custom')

  // 关闭按钮不存在，关闭文字展示
  await expect(alert.locator('.tiny-alert__close')).toHaveCount(0)
  await expect(closeText).toHaveCount(1)
  await expect(closeText).toHaveText(/关闭/)

  // 关闭文字点击可关闭警告,页面只剩一个alert
  await closeText.click()
  await expect(alert).toHaveCount(1)
})
