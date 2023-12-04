import { test, expect } from '@playwright/test'

test('测试自定义popper', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tooltip#popper-options')

  const button = page.getByRole('button', { name: '鼠标悬浮到这里' })
  const tooltip = page.getByRole('tooltip', { name: '提示内容' })

  await button.hover()
  await expect(tooltip).toBeVisible()
})
