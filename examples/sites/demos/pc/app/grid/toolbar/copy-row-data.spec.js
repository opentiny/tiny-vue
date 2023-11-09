import { test, expect } from '@playwright/test'

test('设置工具栏尺寸大小', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-toolbar#tiny-first-menu-copy-row-data')
  await expect(page.getByRole('button', { name: '复制' })).toHaveClass(/size__medium/)
})
