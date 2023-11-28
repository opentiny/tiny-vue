import { expect, test } from '@playwright/test'

test('grid-multiple', async ({ page }) => {
  await page.goto('select#nest-checkbox-grid')
  const suffix = page.locator('#preview .tiny-input__suffix')
  const select = page.locator('#preview .tiny-select')
  const tag = select.locator('.tiny-tag')

  await expect(tag).toHaveCount(2)
  await suffix.click()
  await page.waitForTimeout(500)

  const tr = page.locator('.tiny-select-dropdown .tiny-grid__body-wrapper .tiny-grid-body__row')
  const currentTr = page.locator('.tiny-select-dropdown .tiny-grid__body-wrapper .row__selected')

  await expect(tr).toHaveCount(5)
  await expect(currentTr).toHaveCount(2)
  await page.getByRole('row', { name: '华南区 广东省 珠海市' }).getByRole('cell').first().click()
  await expect(tag).toHaveCount(3)
  await expect(currentTr).toHaveCount(3)
  await page.getByRole('row', { name: '华南区 广东省 珠海市' }).getByRole('cell').first().click()
  await expect(tag).toHaveCount(2)
  await expect(currentTr).toHaveCount(2)
  await page.getByRole('row', { name: '区域 省份 城市' }).getByRole('cell').first().click()
  await expect(tag).toHaveCount(5)
  await expect(currentTr).toHaveCount(5)
  let all = await page.getByRole('row', { name: '区域 省份 城市' }).locator('.tiny-grid-checkbox__icon .tiny-svg')
  await expect(all).toHaveClass(/icon-checked-sur/)
  await page.getByRole('row', { name: '区域 省份 城市' }).getByRole('cell').first().click()
  await page.waitForTimeout(500)
  await expect(all).toBeHidden()
  await expect(tag).toHaveCount(0)
  await expect(currentTr).toHaveCount(0)
})
