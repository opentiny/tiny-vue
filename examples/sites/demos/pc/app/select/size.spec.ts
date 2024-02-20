import { test, expect } from '@playwright/test'

test('默认尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('select#size')

  const wrap = page.locator('#size')
  const select = wrap.locator('.tiny-select').nth(0)
  const input = select.locator('.tiny-input')
  const tag = select.locator('.tiny-tag')

  await expect(input.locator('.tiny-input__inner')).toHaveCSS('height', '28px')
  await expect(tag.nth(0)).toHaveClass(/tiny-tag--light/)
})

test('medium 尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('select#size')

  const wrap = page.locator('#size')
  const select = wrap.locator('.tiny-select').nth(1)
  const input = select.locator('.tiny-input')
  const tag = select.locator('.tiny-tag')

  await expect(input).toHaveClass(/tiny-input-medium/)
  await expect(input.locator('.tiny-input__inner')).toHaveCSS('height', '40px')
  await expect(tag.nth(0)).toHaveClass(/tiny-tag--medium tiny-tag--light/)
})

test('small 尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('select#size')

  const wrap = page.locator('#size')
  const select = wrap.locator('.tiny-select').nth(2)
  const input = select.locator('.tiny-input')
  const tag = select.locator('.tiny-tag')

  await expect(input).toHaveClass(/tiny-input-small/)
  await expect(input.locator('.tiny-input__inner')).toHaveCSS('height', '32px')
  await expect(tag.nth(0)).toHaveClass(/tiny-tag--small tiny-tag--light/)
})

test('mini 尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('select#size')

  const wrap = page.locator('#size')
  const select = wrap.locator('.tiny-select').nth(3)
  const input = select.locator('.tiny-input')
  const tag = select.locator('.tiny-tag')

  await expect(input).toHaveClass(/tiny-input-mini/)
  await expect(input.locator('.tiny-input__inner')).toHaveCSS('height', '24px')
  await expect(tag.nth(0)).toHaveClass(/tiny-tag--mini tiny-tag--light/)
})
