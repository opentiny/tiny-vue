import { test, expect } from '@playwright/test'

test('通过 solt 插槽自定义文本内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('scroll-text#slots')
  await expect(page.getByText('通过插槽设置滚动的文本内容')).toBeVisible()
})
