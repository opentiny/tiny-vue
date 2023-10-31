import { test, expect } from '@playwright/test'

test('focus', async ({ page }) => {
  await page.goto('select#envts-change')
  const model = page.locator('.tiny-modal')
  const input = page.locator('#preview .tiny-input__inner')

  await input.click()
  await page.waitForTimeout(500)
  await expect(model.filter({ hasText: 'focus事件' })).toHaveCount(1)
})

test('change', async ({ page }) => {
  await page.goto('select#envts-change')
  const model = page.locator('.tiny-modal')
  const input = page.locator('#preview .tiny-input__inner')

  await input.click()
  await page.getByRole('listitem').filter({ hasText: '黄金糕' }).click()
  await expect(input).toHaveValue('黄金糕')
  await page.waitForTimeout(500)
  await expect(model.filter({ hasText: 'changes事件' })).toHaveCount(1)
})

test('clear', async ({ page }) => {
  await page.goto('select#envts-change')
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
  await page.goto('select#envts-change')
  const model = page.locator('.tiny-modal')
  const input = page.locator('#preview .tiny-input__inner')

  await input.click()
  await input.blur()
  await page.waitForTimeout(500)
  await expect(model.filter({ hasText: 'blur事件' })).toHaveCount(1)
})
