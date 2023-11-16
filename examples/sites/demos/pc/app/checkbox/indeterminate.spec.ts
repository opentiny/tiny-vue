import { test, expect } from '@playwright/test'

test('禁用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('checkbox#indeterminate')
  const preview = page.locator('#preview')
  await preview.locator('.tiny-switch').click()
  const indeterminate = preview.locator('label').filter({ hasText: '全选' }).locator('span').first()
  await expect(indeterminate).toHaveClass(/is-disabled/)
  await expect(page.locator('label').filter({ hasText: '北京' }).locator('span').first()).toHaveClass(/is-disabled/)
  await expect(page.locator('label').filter({ hasText: '广州' }).locator('span').first()).toHaveClass(/is-disabled/)
})

test('全选、半选', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('checkbox#indeterminate')
  const preview = page.locator('#preview')
  const indeterminate = preview.locator('label').filter({ hasText: '全选' }).locator('span').first()
  await expect(indeterminate).toHaveClass(/is-indeterminate/)
  await page.locator('label').filter({ hasText: '广州' }).locator('span').nth(1).click()
  await page.locator('label').filter({ hasText: '深圳' }).locator('span').nth(1).click()
  await expect(indeterminate).toHaveClass(/is-indeterminate/)
  await page.locator('label').filter({ hasText: '上海' }).locator('span').nth(1).click()
  await expect(indeterminate).toHaveClass(/is-checked/)
})
