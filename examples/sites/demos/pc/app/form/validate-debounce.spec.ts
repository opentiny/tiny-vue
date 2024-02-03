import { test, expect } from '@playwright/test'

test('校验防抖处理', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('form#validate-debounce')

  const demo = page.locator('#validate-debounce')
  const input = demo.locator('input').nth(1)

  await input.fill('11')
  await input.fill('1111')
  await expect(page.locator('.tiny-modal').getByText('校验失败')).toHaveCount(1)
})
