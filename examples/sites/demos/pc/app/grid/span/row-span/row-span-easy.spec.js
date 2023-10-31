import { test, expect } from '@playwright/test'

test('行合并基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-span#span-row-span-row-span-easy')
  const row = page
    .getByRole('row', { name: '2 华南区 广东省 深圳 WWW科技YX公司 1234567890' })
    .getByRole('cell', { name: '华南区' })
  await expect(row).toHaveAttribute('rowspan', '2')
})
