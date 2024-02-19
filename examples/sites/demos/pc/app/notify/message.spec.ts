import { test, expect } from '@playwright/test'

test('自定义内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('notify#message')
  await page.getByRole('button', { name: '自定义内容' }).click()
  const content = await page.getByRole('paragraph').filter({ hasText: '自定义内容' })
  await expect(content).toBeVisible()
})
