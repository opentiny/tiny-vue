import { test, expect } from '@playwright/test'

test('聚焦事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('numeric#focus-event')

  const numeric = page.getByRole('spinbutton')
  await numeric.focus()
  await expect(page.getByText('focus 事件', { exact: true })).toBeVisible()
})
