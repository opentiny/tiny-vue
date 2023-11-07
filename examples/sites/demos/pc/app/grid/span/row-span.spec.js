import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-span#span-row-span-row-span')
  const row = page
    .getByRole('row', { name: '2 华南区 广东省 深圳 WWW科技YX公司 1234567890' })
    .getByRole('cell', { name: '广东省' })

  await expect(row).toHaveAttribute('rowspan', '2')
})
