import { test, expect } from '@playwright/test'

test('视图模式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('crop#view-mode')

  await page.getByRole('button', { name: '切换模式' }).click()
  await page.getByRole('button', { name: '图片裁剪' }).click()

  // 待补充4个模式的校验
})
