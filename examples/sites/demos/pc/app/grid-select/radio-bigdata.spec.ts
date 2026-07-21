import { expect, test } from '@playwright/test'

test('grid-select 大量数据', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-select#radio-bigdata')

  await page.waitForFunction(() => window.gridSelectRadioBigData === 800)

  const select = page.locator('#radio-bigdata .tiny-grid-select')
  const input = select.locator('.tiny-input__inner')

  await input.click()

  const dropdown = page.locator('body > .tiny-select-dropdown')
  const rows = dropdown.getByRole('row')

  await rows.nth(1).getByRole('cell').first().click()
  await expect(input).toHaveValue('广州市 0')
})
