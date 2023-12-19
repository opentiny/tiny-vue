import { test, expect } from '@playwright/test'

test('测试自定义popper', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tooltip#popper-options')

  const button = page.getByRole('button', { name: '鼠标悬浮到这里' })
  const tooltip = page.getByRole('tooltip', { name: '提示内容', includeHidden: true })

  await button.hover()
  await expect(tooltip).toBeVisible()

  await page.mouse.move(0, 0)
  await expect(tooltip).toHaveCount(0)
})
