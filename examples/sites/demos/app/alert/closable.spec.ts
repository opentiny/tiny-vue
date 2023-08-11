import { test, expect } from '@playwright/test'

test('测试 Alert 不可关闭', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/alert/closable')

  // 关闭按钮不存在
  const noClosable = page.locator('.tiny-alert').last()
  await expect(noClosable.locator('.tiny-alert__close')).toHaveCount(0)
})
