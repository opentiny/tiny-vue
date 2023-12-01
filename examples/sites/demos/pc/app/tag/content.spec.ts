import { test, expect } from '@playwright/test'

test('progress 正常显示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('tag#content')

  const tag = page.locator('#preview').getByText('配置式标签')

  await expect(tag).toHaveCount(1)
})
