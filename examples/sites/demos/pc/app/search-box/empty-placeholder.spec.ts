import { test, expect } from '@playwright/test'

test('没有筛选项时的占位文本', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('search-box#empty-placeholder')

  await page.getByRole('textbox', { name: '默认自动识别，识别不出按照关键字搜索' }).isVisible
})
