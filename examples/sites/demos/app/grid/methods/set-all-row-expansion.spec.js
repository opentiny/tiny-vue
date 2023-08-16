import { test, expect } from '@playwright/test'

test('设置展开所有行测试', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/grid-nested-grid/methods-set-all-row-expansion')
  await page.getByRole('button', { name: 'setAllRowExpansion' }).click()

  await expect(
    page.locator('//*[@id="preview"]/div[2]/div[2]/div/div/div/div[3]/table/tbody/tr[1]/td[3]/div/span')
  ).toHaveClass(/expand__active/)
})
