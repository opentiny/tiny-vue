import { test, expect } from '@playwright/test'

test('remove-tag', async ({ page }) => {
  await page.goto('select#envts-remove')
  const model = page.locator('.tiny-modal')
  const select = page.locator('#preview .tiny-select')
  const tags = page.locator('#preview .tiny-select .tiny-tag')

  await select.click()
  await page.getByRole('listitem').filter({ hasText: '黄金糕' }).click()
  await expect(tags.filter({ hasText: '黄金糕' })).toHaveCount(1)
  await tags.filter({ hasText: '黄金糕' }).locator('.tiny-svg').click()
  await page.waitForTimeout(500)
  await expect(model.filter({ hasText: 'removeTag事件' })).toHaveCount(1)
})

test('visible-change', async ({ page }) => {
  await page.goto('select#envts-remove')
  const model = page.locator('.tiny-modal')
  const input = page.locator('#preview .tiny-input__inner')
  const select = page.locator('#preview .tiny-select')

  await select.click()
  await page.waitForTimeout(500)
  await expect(model.filter({ hasText: 'visibleChange事件' })).toHaveCount(1)
  await input.blur()
  await page.waitForTimeout(500)
  await expect(model.filter({ hasText: 'visibleChange事件' })).toHaveCount(1)
})
