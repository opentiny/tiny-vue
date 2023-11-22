import { test, expect } from '@playwright/test'

test('添加内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popover#popover-content')

  let button = page.getByRole('button', { name: '提示' })
  let pop = page.getByRole('tooltip', { name: '这是一段内容' })

  await button.click()
  await expect(pop).toBeVisible()
})
