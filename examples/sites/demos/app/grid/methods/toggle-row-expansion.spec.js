import { test, expect } from '@playwright/test'

test('切换展开行测试', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/grid-nested-grid/methods-toggle-row-expansion')
  await page.getByRole('button', { name: 'toggleRowExpansion' }).click()
  const expandIcon = await page.locator(
    '//*[@id="preview"]/div[2]/div[2]/div/div/div/div[3]/table/tbody/tr[2]/td[3]/div/span'
  )

  await expect(expandIcon).toHaveClass(/expand__active/)
  await page.getByRole('button', { name: 'toggleRowExpansion' }).click()

  await expect(expandIcon).not.toHaveClass(/expand__active/)
})
