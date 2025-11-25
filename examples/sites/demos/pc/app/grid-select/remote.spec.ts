import { expect, test } from '@playwright/test'

test('grid-select 远程搜索', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-select#remote')

  const wrap = page.locator('#remote')
  const select = wrap.locator('.tiny-grid-select').first()
  const input = select.locator('.tiny-input__inner')
  const dropdown = page.locator('body > .tiny-select-dropdown')

  await input.click()
  await page.waitForTimeout(1000)
  await expect(dropdown).toBeVisible()

  await input.fill('10')
  await input.press('Enter')
  await page.waitForTimeout(1000)

  // 选中城市10
  await page.getByRole('row', { name: '区域10 省份10 城市' }).getByRole('cell').first().click()
  await expect(input).toHaveValue('省10-市10')
})
