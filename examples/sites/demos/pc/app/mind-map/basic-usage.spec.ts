import { test, expect } from '@playwright/test'

test('基本使用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('mind-map#basic-usage')

  const root = page.locator('me-tpc').filter({ hasText: 'root' })
  expect(root).not.toBeNull()
  await expect(root).toHaveText('root')
})
test('追加节点', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('mind-map#basic-usage')

  await page.locator('me-tpc').click()
  await page.locator('.map-canvas').press('Tab')
  await page.locator('me-tpc').filter({ hasText: 'root' }).click()
  await page.locator('.map-canvas').press('Tab')
  await expect(page.locator('me-main me-wrapper')).toHaveCount(2)
})
test('修改节点', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('mind-map#basic-usage')
  await page.locator('me-tpc').dblclick()
  await page.locator('#input-box').fill('root-new')
  await page.locator('#input-box').press('Enter')
})
test('删除节点', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('mind-map#basic-usage')
  await page.locator('me-tpc').click()
  await page.locator('.map-canvas').press('Tab')
  await page.locator('me-tpc').filter({ hasText: 'root' }).click()
  await page.locator('.map-canvas').press('Tab')
  await page.locator('me-tpc').nth(2).press('Delete')
})
