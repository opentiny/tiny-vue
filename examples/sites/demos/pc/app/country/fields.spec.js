import { test, expect } from '@playwright/test'

test('自定义数据字段', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('country#fields')

  const select = page.locator('.tiny-select')
  const item = page.getByRole('listitem').filter({ hasText: '中国' })

  await select.click()
  await item.click()
  await expect(select.locator('input')).toHaveValue(/中国/)
})
