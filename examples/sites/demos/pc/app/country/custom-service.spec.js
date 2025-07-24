import { test, expect } from '@playwright/test'

test('自定义服务', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('country#custom-service')

  const select = page.locator('.tiny-select')
  const item = page.getByText('France')
  // 点击选中
  await select.click()
  await item.click()
  await expect(select.locator('input')).toHaveValue(/France/)
  await page.waitForTimeout(100)
})
