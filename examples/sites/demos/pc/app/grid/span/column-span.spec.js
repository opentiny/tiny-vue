import { test, expect } from '@playwright/test'

test('列合并', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-span#span-column-span')
  const column = page
    .getByRole('row', { name: '1 华东区 福州 GFD科技YX公司 1234567890' })
    .getByRole('cell', { name: '华东区' })
  await expect(column).toHaveAttribute('colspan', '2')
})
