import { test, expect } from '@playwright/test'

test('判断行标签', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('layout#tag')

  const preview = page.locator('.pc-demo-container')
  const col = preview.locator('.tiny-layout .tiny-row')
  expect((await col.innerHTML()).slice(1, 4)).toBe('div')
})
