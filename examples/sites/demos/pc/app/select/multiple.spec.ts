import { expect, test } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('select#multiple')
  const wrap = page.locator('#multiple')
  const select = wrap.locator('.tiny-select')
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const option = dropdown.locator('.tiny-option')
  const tag = select.locator('.tiny-tag')

  await expect(tag).toHaveCount(2)
  await select.locator('.tiny-input__suffix').click()
  await option.filter({ hasText: '全部' }).click()
  await expect(tag).toHaveCount(7)
  await option.filter({ hasText: '全部' }).click()
  await expect(tag).toHaveCount(0)
  await option.filter({ hasText: '黄金糕' }).click()
  await expect(tag).toHaveCount(1)
  await option.filter({ hasText: '双皮奶' }).click()
  await expect(tag).toHaveCount(2)
  await tag.filter({ hasText: '双皮奶' }).locator('.tiny-tag__close').click()
  await expect(tag).toHaveCount(1)
})
