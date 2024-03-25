import { test, expect } from '@playwright/test'

test('单选虚拟滚动', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('select#optimization')

  const wrap = page.locator('#optimization')
  const select = wrap.locator('.tiny-select').nth(0)
  const input = select.locator('.tiny-input__inner')
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const option = dropdown.locator('.tiny-option')

  await select.click()
  await expect((await option.all()).length).toBeLessThan(20) // 新虚拟滚动，预加载行数不一样了
  await expect(option.filter({ hasText: '黄金糕17' })).toBeHidden()
  await option.nth(9).scrollIntoViewIfNeeded()
  await page.waitForTimeout(1000)
  await expect(option.filter({ hasText: '黄金糕17' })).toBeVisible() // 现在预加载的行比较多，所以17行已经可以看到了
})

test('多选虚拟滚动', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('select#optimization')
  const wrap = page.locator('#optimization')
  const select = wrap.locator('.tiny-select').nth(1)
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const option = dropdown.locator('.tiny-option')
  const tag = select.locator('.tiny-tag')

  await select.click()
  await expect((await option.all()).length).toBeLessThan(20) // 新虚拟滚动，预加载行数不一样了
  await expect(option.filter({ hasText: '黄金糕17' })).toBeHidden()
  await expect(option.filter({ hasText: '黄金糕16' })).toBeHidden()
  await page.waitForTimeout(500)
  await option.nth(9).scrollIntoViewIfNeeded()
  await page.waitForTimeout(1000)
  await option.nth(9).scrollIntoViewIfNeeded()
  await expect(option.filter({ hasText: '黄金糕16' })).toBeVisible()
  await expect(option.filter({ hasText: '黄金糕17' })).toBeVisible()
  await option.filter({ hasText: '黄金糕17' }).click()
  await expect(tag.first()).toHaveText('黄金糕17')
  await expect((await tag.all()).length).toEqual(1)
  await option.filter({ hasText: '黄金糕16' }).click()
  await expect((await tag.all()).length).toEqual(2)
  await expect(tag.nth(1)).toHaveText('+ 1')
})
