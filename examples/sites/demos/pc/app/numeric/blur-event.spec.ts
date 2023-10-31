import { test, expect } from '@playwright/test'

test('失焦事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('numeric#blur-event')

  const numeric = page.getByRole('spinbutton')
  await numeric.focus()
  await numeric.blur()
  await expect(page.getByText('失焦事件', { exact: true })).toBeVisible()
})
