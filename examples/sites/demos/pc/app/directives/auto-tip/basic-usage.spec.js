import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('directives-auto-tip#auto-tip-basic-usage')

  await page.getByText('超出省略隐藏，鼠标移入是会有ToolTip提示').hover()
  await expect(page.getByRole('tooltip', { name: '超出省略隐藏，鼠标移入是会有ToolTip提示' })).toBeVisible()
})
