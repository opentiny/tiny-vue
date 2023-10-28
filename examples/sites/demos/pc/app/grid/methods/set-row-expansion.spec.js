import { test, expect } from '@playwright/test'

test('设置指定展开行', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-nested-grid#methods-set-row-expansion')
  await page.getByRole('button', { name: 'setRowExpansion' }).click()

  await expect(
    page.locator('//*[@id="preview"]/div[2]/div[2]/div/div/div/div[3]/table/tbody/tr[3]/td[3]/div/span')
  ).toHaveClass(/expand__active/)
})
