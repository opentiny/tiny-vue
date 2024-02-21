import { test, expect } from '@playwright/test'

test('表格默认插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-slot#slot-default-slot')
  const cell = await page.getByRole('cell', { name: 'GFD科技YX公司' }).getByText('GFD科技YX公司')

  await expect(cell).toHaveCSS('color', 'rgb(255, 192, 203)')
})
