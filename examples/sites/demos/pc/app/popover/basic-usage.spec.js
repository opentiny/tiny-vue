import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popover#basic-usage')
  await page.getByRole('button', { name: '点击我提示' }).click()
  let title = page.getByRole('heading', { name: '标题' })

  await expect(title).toHaveText(/标题/)
})
