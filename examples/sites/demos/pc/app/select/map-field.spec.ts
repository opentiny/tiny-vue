import { expect, test } from '@playwright/test'

test('配置式配置映射字段', async ({ page }) => {
  await page.goto('select#map-field')
  const wrap = page.locator('#map-field')
  const select = wrap.locator('.tiny-select').nth(0)
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const option = dropdown.locator('.tiny-option')
  const suffix = select.locator('.tiny-input__suffix')
  const tag = select.locator('.tiny-tag')

  await expect(tag).toHaveCount(2)
  await expect(tag.first()).toHaveText('黄金糕')
  await expect(tag.nth(1)).toHaveText('双皮奶')
  await suffix.click()
  await page.waitForTimeout(500)
  await expect(dropdown).toBeVisible()
  await expect(option.filter({ hasText: '黄金糕' })).toHaveClass(/selected/)
  await expect(option.filter({ hasText: '双皮奶' })).toHaveClass(/selected/)
})

test('嵌套表格配置映射字段', async ({ page }) => {
  await page.goto('select#map-field')
  const wrap = page.locator('#map-field')
  const select = wrap.locator('.tiny-select').nth(1)
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const suffix = select.locator('.tiny-input__suffix')
  const tag = select.locator('.tiny-tag')

  await expect(tag).toHaveCount(2)
  await suffix.click()
  await page.waitForTimeout(500)

  const tr = dropdown.locator('.tiny-grid__body-wrapper .tiny-grid-body__row')
  const currentTr = dropdown.locator('.tiny-grid__body-wrapper .row__selected')

  await expect(tr).toHaveCount(5)
  await expect(currentTr).toHaveCount(2)
  await dropdown.getByRole('row', { name: '华南区 广东省 珠海市' }).getByRole('cell').first().click()
  await expect(tag).toHaveCount(3)
  await expect(currentTr).toHaveCount(3)
  await dropdown.getByRole('row', { name: '华南区 广东省 珠海市' }).getByRole('cell').first().click()
  await expect(tag).toHaveCount(2)
  await expect(currentTr).toHaveCount(2)
  await dropdown.getByRole('row', { name: '区域 省份 城市' }).getByRole('cell').first().click()
  await expect(tag).toHaveCount(5)
  await expect(currentTr).toHaveCount(5)
  let all = await dropdown
    .getByRole('row', { name: '区域 省份 城市' })
    .locator('.tiny-grid-checkbox__icon .tiny-svg')
    .nth(1)
  await expect(all).toHaveClass(/icon-checked-sur/)
  await dropdown.getByRole('row', { name: '区域 省份 城市' }).getByRole('cell').first().click()
  await page.waitForTimeout(500)
  await expect(all).toBeHidden()
  await expect(tag).toHaveCount(0)
  await expect(currentTr).toHaveCount(0)
})
