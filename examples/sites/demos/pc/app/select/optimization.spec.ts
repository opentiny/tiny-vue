import { test, expect } from '@playwright/test'

test('单选虚拟滚动', async ({ page }) => {
  await page.goto('select#optimization')

  const wrap = page.locator('#optimization')
  const select = wrap.locator('.tiny-select').nth(0)
  const input = select.locator('.tiny-input__inner')
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const option = dropdown.locator('.tiny-option')

  await select.click()
  await expect((await option.all()).length).toEqual(10)
  await expect(option.filter({ hasText: '黄金糕17' })).toBeHidden()
  await option.nth(9).scrollIntoViewIfNeeded()
  await expect(option.filter({ hasText: '黄金糕17' })).toBeHidden()
  await option.nth(9).scrollIntoViewIfNeeded()
  await option.filter({ hasText: '黄金糕17' }).click()
  await expect(input).toHaveValue('黄金糕17')
})

test('多选虚拟滚动', async ({ page }) => {
  await page.goto('select#optimization')
  const wrap = page.locator('#optimization')
  const select = wrap.locator('.tiny-select').nth(1)
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const option = dropdown.locator('.tiny-option')
  const tag = page.locator('#preview .tiny-select .tiny-tag')

  await select.click()
  await expect((await option.all()).length).toEqual(10)
  await expect(option.filter({ hasText: '黄金糕17' })).toBeHidden()
  await expect(option.filter({ hasText: '黄金糕16' })).toBeHidden()
  await option.nth(9).scrollIntoViewIfNeeded()
  await page.waitForTimeout(500)
  await option.nth(9).scrollIntoViewIfNeeded()
  await expect(option.filter({ hasText: '黄金糕16' })).toBeVisible()
  await expect(option.filter({ hasText: '黄金糕17' })).toBeVisible()
  // TODO: 修改多选虚拟滚动后打开
  // await option.filter({ hasText: '黄金糕17' }).click()
  // await expect(tag.first()).toHaveText('黄金糕17')
  // await expect((await tag.all()).length).toEqual(1)
  // await option.filter({ hasText: '黄金糕16' }).click()
  // await expect((await tag.all()).length).toEqual(2)
  // await expect(tag.nth(1)).toHaveText('+ 1')
})
