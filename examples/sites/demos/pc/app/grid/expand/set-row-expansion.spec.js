import { test, expect } from '@playwright/test'

test('设置指定展开行', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-expand#expand-set-row-expansion')
  await page.getByRole('button', { name: '展开指定行' }).click()
  await expect(page.getByText('GFD科技YX公司')).toHaveCount(2)
  await page.getByRole('button', { name: '展开所有行' }).click()
  await expect(page.getByText('GFD科技YX公司')).toHaveCount(5)
  await page.getByRole('button', { name: '手动切换展开行' }).click()
  await expect(page.getByText('GFD科技YX公司')).toHaveCount(4)
})
