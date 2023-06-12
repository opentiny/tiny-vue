import { test, expect } from '@playwright/test'

test('测试 Alert 表单提交结果反馈', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/alert/feedback-of-result')

  // size为large时可通过description和插槽渲染反馈界面
  const alert = page.locator('.tiny-alert--large').first()
  const description = alert.locator('.tiny-alert__description')
  const opration = alert.locator('.tiny-alert__opration')

  await expect(description).toBeVisible()
  await expect(opration).toBeVisible()
})
