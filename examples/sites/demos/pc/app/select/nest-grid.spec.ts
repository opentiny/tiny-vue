import { test, expect } from '@playwright/test'

test('grid-filterable', async ({ page }) => {
  await page.goto('http://localhost:7130/pc/select/nest-checkbox-grid-clearable')
  const input = page.locator('#preview .tiny-input__inner')

  await input.click()
  await page.waitForTimeout(500)
  const tr = page.locator('.tiny-select-dropdown .tiny-grid__body-wrapper .tiny-grid-body__row')
  await expect(tr).toHaveCount(5)
  await input.fill('深圳')
  await input.press('Enter')
  await page.waitForTimeout(500)
  await expect(tr).toHaveCount(2)
  await page.getByRole('row', { name: '华南区 广东省 深圳1' }).getByRole('cell').first().click()
  await expect(input).toHaveValue('深圳1')
  await input.click()
  await page.waitForTimeout(500)
  await expect(tr.filter({ hasText: '深圳1' })).toHaveClass(/row__current/)
})

test('grid-clearable', async ({ page }) => {
  await page.goto('http://localhost:7130/pc/select/nest-checkbox-grid-clearable')
  const input = page.locator('#preview .tiny-input__inner')
  const suffix = page.locator('#preview .tiny-input__suffix')

  await input.click()
  await page.waitForTimeout(500)
  const tr = page.locator('.tiny-select-dropdown .tiny-grid__body-wrapper .tiny-grid-body__row')
  await expect(tr).toHaveCount(5)
  await input.fill('深圳')
  await input.press('Enter')
  await page.waitForTimeout(500)
  await expect(tr).toHaveCount(2)
  await page.getByRole('row', { name: '华南区 广东省 深圳1' }).getByRole('cell').first().click()
  await expect(input).toHaveValue('深圳1')
  await input.hover()
  await suffix.click()
  await expect(input).toHaveValue('')
})

// 嵌套表格单选
test('radio-grid', async ({ page }) => {
  await page.goto('http://localhost:7130/pc/select/nest-radio-grid')
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

// 嵌套表格多选
test('grid-multiple', async ({ page }) => {
  await page.goto('http://localhost:7130/pc/select/nest-checkbox-grid')
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

