import { test, expect } from '@playwright/test'

test('状态对应的值', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('checkbox#text')

  const demo = page.locator('#text')

  await demo.locator('.tiny-checkbox__inner').click()
  await demo.getByRole('button', { name: '获取文本' }).click()
  await expect(page.locator('.tiny-modal').filter({ hasText: '当前状态对应的值为:真文本' })).toBeVisible()
  await demo.locator('.tiny-checkbox__inner').click()
  await demo.getByRole('button', { name: '获取文本' }).click()
  await expect(page.locator('.tiny-modal').filter({ hasText: '当前状态对应的值为:假文本' })).toBeVisible()
})
