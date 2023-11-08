import { test, expect } from '@playwright/test'

test('内容超出时的提示信息', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('checkbox#content-overflow')
  const preview = page.locator('#preview')
  const label = preview.locator('.tiny-checkbox__label > div').first()
  await expect(label).toHaveClass(/content-overflow/)
  await label.hover()
  await expect(preview.locator('.tiny-tooltip').filter({ hasText: '备选项1 提示文字 提示文字' })).toBeVisible()
})
