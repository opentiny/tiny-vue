import { test, expect } from '@playwright/test'

test('测试自定义类名', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tooltip#popper-class')

  const button = page.getByRole('button', { name: '添加类名' })
  const tip = button.locator('div.tiny-tooltip')

  await button.hover()
  await page.waitForTimeout(500)
  await expect(tip).toHaveClass(/tippoper/)
})
