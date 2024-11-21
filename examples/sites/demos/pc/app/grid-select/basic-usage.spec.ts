import { expect, test } from '@playwright/test'

test('测试下拉表格单选', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-select#basic-usage')

  const wrap = page.locator('#basic-usage')
  const select = wrap.locator('.tiny-grid-select').nth(0)
  const input = select.locator('.tiny-input__inner')
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const suffixSvg = select.locator('.tiny-base-select__caret')
  const row = dropdown.getByRole('row')

  await expect(suffixSvg).toHaveCount(1)
  await expect(suffixSvg).toBeVisible()

  await input.click()
  await expect(dropdown).toBeVisible()
  await expect(row).toHaveCount(6)

  await row.nth(1).getByRole('cell').first().click()
  await expect(input).toHaveValue('广州市')
  await input.click()
  await expect(row.filter({ hasText: '广州市' })).toHaveClass(/tiny-grid-body__row row__radio/)
})
