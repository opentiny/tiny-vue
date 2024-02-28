import { test, expect } from '@playwright/test'

test('自动撑宽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tabs#stretch-wh')

  const { width } = await page.getByRole('tab', { name: '表单组件，测试标签页宽度根据标题长度自动撑开' }).boundingBox()

  await expect(width).toBeGreaterThanOrEqual(360)
})
