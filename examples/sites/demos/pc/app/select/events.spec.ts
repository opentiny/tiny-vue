import { test, expect } from '@playwright/test'

test('focus', async ({ page }) => {
  await page.goto('http://localhost:7130/pc/select/envts-change')
  const model = page.locator('.tiny-modal')
  const input = page.locator('#preview .tiny-input__inner')

  await input.click()
  await page.waitForTimeout(500)
  await expect(model.filter({ hasText: 'focus事件' })).toHaveCount(1)
})

test('change', async ({ page }) => {
  await page.goto('http://localhost:7130/pc/select/envts-change')
  const model = page.locator('.tiny-modal')
  const input = page.locator('#preview .tiny-input__inner')

  await input.click()
  await page.getByRole('listitem').filter({ hasText: '黄金糕' }).click()
  await expect(input).toHaveValue('黄金糕')
  await page.waitForTimeout(500)
  await expect(model.filter({ hasText: 'changes事件' })).toHaveCount(1)
})

test('clear', async ({ page }) => {
  await page.goto('http://localhost:7130/pc/select/envts-change')
  const model = page.locator('.tiny-modal')
  const input = page.locator('#preview .tiny-input__inner')

  await input.click()
  await page.getByRole('listitem').filter({ hasText: '黄金糕' }).click()
  await expect(input).toHaveValue('黄金糕')
  input.hover()
  await page.locator('#preview .tiny-input .tiny-input__suffix').click()
  await page.waitForTimeout(500)
  await expect(model.filter({ hasText: 'clear事件' })).toHaveCount(1)
})

test('blur', async ({ page }) => {
  await page.goto('http://localhost:7130/pc/select/envts-change')
  const model = page.locator('.tiny-modal')
  const input = page.locator('#preview .tiny-input__inner')

  await input.click()
  await input.blur()
  await page.waitForTimeout(500)
  await expect(model.filter({ hasText: 'blur事件' })).toHaveCount(1)
})

test('remove-tag', async ({ page }) => {
  await page.goto('http://localhost:7130/pc/select/envts-remove')
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
  await page.goto('http://localhost:7130/pc/select/envts-remove')
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
