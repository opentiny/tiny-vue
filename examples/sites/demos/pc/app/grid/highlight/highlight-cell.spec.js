import { test, expect } from '@playwright/test'

test('编辑时高亮单元格边框', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-highlight#highlight-highlight-cell')
  await page.getByText('GFD科技YX公司').first().click()
  await expect(page.locator('.row__current').first()).toBeVisible()
})
