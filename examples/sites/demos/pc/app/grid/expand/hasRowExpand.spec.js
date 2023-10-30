import { test, expect } from '@playwright/test'

test('检查当前行是否展开', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-nested-grid#expand-hasRowExpand')
  await page.getByRole('row', { name: '1 GFD科技YX公司 华东区 800' }).locator('i').click()
  await page.locator('div').filter({ hasText: '当前展开行：1' }).nth(1).click()

  await expect(page.locator('div:nth-child(2) > svg')).toBeVisible()
})
