import { test, expect } from '@playwright/test'

test('配置式标签', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('tag#content')

  const tag = page.locator('.all-demos-container').getByText('配置式标签')

  await expect(tag).toHaveCount(1)
})
