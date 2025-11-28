import { test, expect } from '@playwright/test'

test('圆角', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tag#round')

  const tags = page.locator('.all-demos-container').locator('.tiny-tag')
  const count = await tags.count()

  // 动态创建与元素数量相同的期望数组
  await expect(tags).toHaveClass(Array(count).fill(/tiny-tag--round/))
})
