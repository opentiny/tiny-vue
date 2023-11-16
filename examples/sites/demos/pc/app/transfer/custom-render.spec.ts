import { test, expect } from '@playwright/test'

test('判断是否可以选中自定义数据项', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('transfer#custom-render-content')
  await page.locator('label').filter({ hasText: '2 - 备选项 2' }).locator('span').nth(1).click()
  await expect(page.locator('label').filter({ hasText: '2 - 备选项 2' }).locator('span').first()).toHaveClass(
    /is-checked/
  )
})
