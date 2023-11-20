import { test, expect } from '@playwright/test'

test('加载远端数据', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-custom#custom-ordercolumn-remote')
  await expect(page.getByRole('cell', { name: '所属区域' })).not.toBeVisible()
})
