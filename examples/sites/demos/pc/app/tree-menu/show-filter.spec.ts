import { test, expect } from '@playwright/test'

test('不可搜索不显示 title', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
 
})