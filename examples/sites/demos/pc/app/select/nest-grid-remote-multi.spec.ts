import { expect, test } from '@playwright/test'

test('下拉表格远程搜索基础用法', async ({ page }) => {
  await page.goto('select#nest-grid-remote-multi')
  const wrap = page.locator('#nest-grid-remote-multi')
  const select = wrap.locator('.tiny-select').nth(0)
  const input = select.locator('.tiny-select__input')
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const suffixSvg = select.locator('.tiny-input__suffix .tiny-select__caret').first()

  // 下拉按钮不显示
  await expect(suffixSvg).toBeHidden()
  await expect(dropdown).toBeHidden()

  await input.fill(' ')
  await input.press('Enter')
  await page.waitForTimeout(1000)
  await expect(dropdown).toBeVisible()
  await expect(dropdown.locator('.tiny-grid__body tbody')).toBeEmpty()
  await input.fill('')
  await input.press('Enter')
  await page.waitForTimeout(1000)
  await expect(dropdown.locator('.tiny-grid__body tbody')).not.toBeEmpty()
  await page.getByRole('row', { name: '华南区0 广东省0 广州市0' }).getByRole('cell').first().click()
  const tags = page.locator('.tiny-select .tiny-tag')
  await expect((await tags.all()).length).toEqual(1)
  await expect(tags.first()).toContainText(/广州市0/)
  await page.getByRole('row', { name: '华南区1 广东省1 广州市1' }).getByRole('cell').first().click()
  await expect((await tags.all()).length).toEqual(2)
  await expect(tags.first()).toContainText(/广州市0/)
  await expect(tags.nth(1)).toContainText(/广州市1/)
})

test('下拉表格远程搜索 + 自动搜索 + 显示按钮', async ({ page }) => {
  await page.goto('select#nest-grid-remote-multi')

  const wrap = page.locator('#nest-grid-remote-multi')
  const select = wrap.locator('.tiny-select').nth(1)
  const input = select.locator('.tiny-select__input')
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const suffixSvg = select.locator('.tiny-input__suffix .tiny-select__caret').first()
  const tag = select.locator('.tiny-tag')

  await expect(suffixSvg).toBeVisible()
  await expect(dropdown).toBeHidden()
  await select.click()
  await expect(dropdown).toBeVisible()
  await expect(dropdown.locator('.tiny-grid__body tbody')).not.toBeEmpty()

  await dropdown.getByRole('row', { name: '华南区0 广东省0 广州市0' }).getByRole('cell').first().click()

  await expect((await tag.all()).length).toEqual(1)
  await expect(tag.first()).toContainText(/广州市0/)

  await dropdown.getByRole('row', { name: '华南区1 广东省1 广州市1' }).getByRole('cell').first().click()
  await expect((await tag.all()).length).toEqual(2)
  await expect(tag.first()).toContainText(/广州市0/)
  await expect(tag.nth(1)).toContainText(/广州市1/)
  await tag.nth(0).locator('.tiny-svg').click()
  await tag.nth(0).locator('.tiny-svg').click()
  await expect((await tag.all()).length).toEqual(0)
  await input.fill(' ')
  await input.press('Enter')
  await expect(dropdown).toBeVisible()
  await expect(dropdown.locator('.tiny-grid__body tbody')).toBeEmpty()
})
