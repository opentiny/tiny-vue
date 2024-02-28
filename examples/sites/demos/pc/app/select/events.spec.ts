import { test, expect } from '@playwright/test'

test('单选事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('select#events')
  const wrap = page.locator('#events')
  const select = wrap.locator('.tiny-select').first()
  const input = select.locator('.tiny-input__inner')
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const option = dropdown.locator('.tiny-option')
  const model = page.locator('.tiny-modal')

  await input.click()
  await page.waitForTimeout(500)
  await expect(model.filter({ hasText: '触发 focus 事件' })).toHaveCount(1)
  await expect(model.filter({ hasText: '触发 visible-change 事件' })).toHaveCount(1)

  await option.first().click()
  await expect(input).toHaveValue('黄金糕')
  await expect(model.filter({ hasText: '触发 change 事件' })).toHaveCount(1)
  await expect(model.filter({ hasText: '触发 visible-change 事件' })).toHaveCount(2)

  await page.waitForTimeout(500)
  await wrap.click()
  await expect(model.filter({ hasText: '触发 blur 事件' })).toHaveCount(1)

  await page.waitForTimeout(200)
  await input.hover()
  await select.locator('.tiny-select__close').click()
  await page.waitForTimeout(500)
  await expect(input).toHaveValue('')
  await expect(model.filter({ hasText: '触发 clear 事件' })).toHaveCount(1)
})

test('多选事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('select#events')
  const wrap = page.locator('#events')
  const select = wrap.locator('.tiny-select').nth(1)
  const tag = wrap.locator('.tiny-tag')
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const option = dropdown.locator('.tiny-option')
  const model = page.locator('.tiny-modal')

  await select.click()
  await expect(model.filter({ hasText: '触发 focus 事件' })).toHaveCount(1)
  await expect(model.filter({ hasText: '触发 visible-change 事件' })).toHaveCount(1)

  await option.nth(1).click()
  await expect(tag).toHaveCount(1)
  await expect(model.filter({ hasText: '触发 change 事件' })).toHaveCount(1)

  await option.nth(0).click()
  await expect(model.filter({ hasText: '触发 change 事件' })).toHaveCount(2)
  await expect(tag).toHaveCount(5)

  await page.waitForTimeout(500)
  await tag.first().locator('.tiny-tag__close').click()
  await expect(model.filter({ hasText: '触发 blur 事件' })).toHaveCount(1)
  await expect(model.filter({ hasText: '触发 change 事件' })).toHaveCount(1)
  await expect(model.filter({ hasText: '触发 remove-tag 事件' })).toHaveCount(1)
  await expect(tag).toHaveCount(4)

  await wrap.click()
  await expect(model.filter({ hasText: '触发 visible-change 事件' })).toHaveCount(1)

  await page.waitForTimeout(200)
  await select.hover()
  await select.locator('.tiny-select__close').click()

  await expect(tag).toHaveCount(0)
  await expect(model.filter({ hasText: '触发 change 事件' })).toHaveCount(1)
})
