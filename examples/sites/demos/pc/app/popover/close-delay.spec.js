import { test, expect } from '@playwright/test'

test('延迟隐藏', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popover#close-delay')

  const button = page.getByRole('button', { name: '提示' })
  const pop = page.getByRole('tooltip', { name: /这是一段内容/ })

  await button.hover()
  await expect(pop).toBeVisible()

  await page.mouse.move(0, 0)
  await page.waitForTimeout(3100)
  await expect(pop).toBeHidden()
})
