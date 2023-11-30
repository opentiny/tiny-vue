import { test, expect } from '@playwright/test'

test('延迟隐藏', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popover#custom-popper')

  const button = page.getByRole('button', { name: '覆盖字体样式' })
  const pop = page.locator('.custom-popover-demo-cls')

  await button.hover()
  await expect(pop).toBeVisible()
})
