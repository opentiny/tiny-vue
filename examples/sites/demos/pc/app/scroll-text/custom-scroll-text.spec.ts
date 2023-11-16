import { test, expect } from '@playwright/test'

test('自定义文本内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('scroll-text#custom-scroll-text')
  await expect(page.getByText('设置 text 自定义滚动的文本内容')).toBeVisible()
})
