import { test, expect } from '@playwright/test'

test('单元格样式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-custom-style#custom-style-cell-style')
  await expect(page.getByRole('cell', { name: '2016-07-08 12:36:22' })).toHaveCSS(
    'background-color',
    'rgb(255, 102, 0)'
  )
  await expect(page.getByRole('cell', { name: 'TGB科技YX公司' })).toHaveCSS('background-color', 'rgb(255, 102, 0)')
  await expect(page.getByRole('cell', { name: '深圳市福德宝网络技术YX公司' })).toHaveCSS(
    'background-color',
    'rgb(255, 102, 0)'
  )
})
