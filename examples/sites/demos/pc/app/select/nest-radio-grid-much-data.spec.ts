import { expect, test } from '@playwright/test'

test('下拉表格大数据', async ({ page }) => {
  await page.goto('select#nest-radio-grid-much-data')

  const wrap = page.locator('#nest-radio-grid-much-data')
  const select = wrap.locator('.tiny-select')
  const input = select.locator('.tiny-input__inner')
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const suffixSvg = select.locator('.tiny-input__suffix .tiny-select__caret')
  const row = dropdown.getByRole('row')

  await expect(suffixSvg).toHaveCount(1)
  await expect(suffixSvg).toBeVisible()
  await expect(dropdown).toBeHidden()

  await input.click()
  await expect(dropdown).toBeVisible()
  await expect(dropdown.locator('.tiny-grid__body tbody')).not.toBeEmpty()
  await row.nth(1).getByRole('cell').first().click()
  await expect(input).toHaveValue('广州市')

  await input.click()
  await page.waitForTimeout(200)
  await expect(row.nth(1)).toHaveClass(/row__current/)
  await expect(row).toHaveCount(8)
  await expect(page.getByRole('row', { name: '华南区12 广东省 广州市' })).toBeHidden()
  await row.nth(7).scrollIntoViewIfNeeded()
  await expect(row).toHaveCount(8)
  await row.nth(7).scrollIntoViewIfNeeded()
  await expect(row).toHaveCount(8)
  await page.getByRole('row', { name: '华南区12 广东省 广州市' }).getByRole('cell').first().click()
})
