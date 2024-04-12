import { test, expect } from '@playwright/test'

test('测试按钮类型', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('float-button#basic-usage')
  await expect(page.locator('.tiny-float-button').first()).toHaveClass(/tiny-float-button--default/)
  await expect(page.locator('.tiny-float-button').nth(1)).toHaveClass(
    /tiny-float-button tiny-float-button--primary is-only-icon is-square/
  )
  await expect(page.locator('.tiny-float-button').nth(2)).toHaveClass(
    /tiny-float-button tiny-float-button--info is-only-icon is-circle/
  )
  await expect(page.locator('.tiny-float-button').nth(3)).toHaveClass(
    /tiny-float-button tiny-float-button--warning is-only-icon is-circle/
  )
  await expect(page.locator('.tiny-float-button').nth(4)).toHaveClass(
    /tiny-float-button tiny-float-button--danger is-only-icon is-circle/
  )
})

test('测试是否是圆形按钮', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('float-button#basic-usage')
  await expect(page.locator('.tiny-float-button').first()).toHaveClass(/is-circle/)
  await expect(page.locator('.tiny-float-button').nth(2)).toHaveClass(/is-circle/)
  await expect(page.locator('.tiny-float-button').nth(3)).toHaveClass(/is-circle/)
  await expect(page.locator('.tiny-float-button').nth(4)).toHaveClass(/is-circle/)
})

test('测试是否是正方形按钮', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('float-button#basic-usage')
  await expect(page.locator('.tiny-float-button').nth(1)).toHaveClass(/is-square/)
})
