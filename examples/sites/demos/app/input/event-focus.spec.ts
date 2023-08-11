import { test, expect } from '@playwright/test'

test('聚焦事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/input/event-focus')
  const input = page.locator('.demo-input > .tiny-input > .tiny-input-display-only > input')
  await input.focus()
  const box = page.getByText('focus').nth(4)
  await expect(box).toBeVisible()
})
