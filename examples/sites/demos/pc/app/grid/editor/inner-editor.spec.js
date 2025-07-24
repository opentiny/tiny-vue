import { test, expect } from '@playwright/test'

test('Grid-编辑器 - 内置编辑器', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  const demo = page.locator('#editor-inner-editor')
  await page.goto('grid-editor#grid_Example-gridEdit-inner-editor')
  await page.getByText('GFD 科技 YX 公司').first().click()
  const input = demo.locator('.tiny-grid-body__row input').first()

  // 内置编辑器
  await expect(input).toHaveClass(/tiny-grid-default-input/)
})
