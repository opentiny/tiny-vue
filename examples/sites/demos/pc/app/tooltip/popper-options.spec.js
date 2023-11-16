import { test, expect } from '@playwright/test'

test('测试自定义popper', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tooltip#popper-options')

  const button = page.getByRole('button', { name: 'popper-options配置' })
  const tooltip = page.getByRole('tooltip', { name: 'popper-options配置', includeHidden: true })

  await button.hover()
  await expect(tooltip).toBeVisible()

  await page.waitForTimeout(300)

  await page.mouse.move(0, 0)
  await expect(tooltip).toBeHidden()
})
