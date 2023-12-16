import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('scroll-text#basic-usage')
  await expect(page.getByText('设置 text 自定义滚动的文本内容')).toBeVisible()
})
