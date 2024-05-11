import { expect, test } from '@playwright/test'

test('多选时取远端数据与当前已选数据的并集', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('select#multiple')
  const wrap = page.locator('#multiple')
  const select = wrap.locator('.tiny-select').nth(0)
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const option = dropdown.locator('.tiny-option')
  const tag = select.locator('.tiny-tag')

  await expect(tag).toHaveCount(2)
  await select.locator('.tiny-input__suffix').click()
  await option.filter({ hasText: '全部' }).click()
  await expect(tag).toHaveCount(7)
  await option.filter({ hasText: '全部' }).click()
  await expect(tag).toHaveCount(0)
  await option.filter({ hasText: '北京' }).click()
  await expect(tag).toHaveCount(1)
  await option.filter({ hasText: '上海' }).click()
  await expect(tag).toHaveCount(2)
  await tag.filter({ hasText: '上海' }).locator('.tiny-tag__close').click()
  await expect(tag).toHaveCount(1)
})

test('multiple-limit', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('select#multiple')
  const wrap = page.locator('#multiple')
  const select = wrap.locator('.tiny-select').nth(3)
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const option = dropdown.locator('.tiny-option')
  const tag = select.locator('.tiny-tag')

  await select.click()
  await option.nth(0).click()
  await option.nth(1).click()
  await expect(tag).toHaveCount(2)
  await expect(option.filter({ hasText: '全部' })).toHaveCount(0)

  const list = await option.all()
  list.forEach(async (item, index) => {
    if (index <= 1) {
      await expect(item).toHaveClass(/selected/)
    } else {
      await expect(item).toHaveClass(/is-disabled/)
    }
  })
})
