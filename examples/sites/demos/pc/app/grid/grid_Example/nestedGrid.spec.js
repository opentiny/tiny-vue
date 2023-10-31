import { test, expect } from '@playwright/test'

test('嵌套表格场景测试', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-nested-grid#grid_Example-nestedGrid')
  await page.getByRole('row', { name: '1 800 2014-04-30 00:56:00 福州' }).locator('i').click()

  await expect(
    page.locator('//*[@id="preview"]/div[2]/div[2]/div/div[2]/div[3]/table/tbody/tr[1]/td[3]/div/span')
  ).toHaveClass(/expand__active/)
})
