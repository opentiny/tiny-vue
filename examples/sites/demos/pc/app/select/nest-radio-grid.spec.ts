import { test, expect } from '@playwright/test'

test('radio-grid', async ({ page }) => {
  await page.goto('select#nest-radio-grid')
  const input = page.locator('#preview .tiny-input__inner')
  const suffixSvg = await page.locator('#preview .tiny-select__caret').first()

  await expect(suffixSvg).toHaveCount(1)
  await expect(suffixSvg).toBeVisible()

  await input.click()
  await page.getByRole('row', { name: '华南区 广东省 广州市' }).getByRole('cell').first().click()
  await page.waitForTimeout(1000)
  await expect(input).toHaveValue('广州市')
  await input.click()
  await page.getByRole('row', { name: '华南区 广东省 深圳市' }).getByRole('cell').first().click()
  await page.waitForTimeout(1000)
  await expect(input).toHaveValue('深圳市')
})
