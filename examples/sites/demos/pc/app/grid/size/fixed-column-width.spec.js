import { test, expect } from '@playwright/test'

test('列属性设置宽度', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-size#size-fixed-column-width')
  await expect(page.getByRole('cell', { name: '名称' }).first()).toHaveCSS('width', '150px')
  await expect(page.getByRole('cell', { name: '所属区域' })).toHaveCSS('width', '80px')
})
