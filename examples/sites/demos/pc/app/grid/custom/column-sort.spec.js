import { test, expect } from '@playwright/test'

test('个性化排序测试', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-customized#custom-column-sort')
  await page.locator('.tiny-grid-custom__setting-btn').click()
  await page.getByRole('row', { name: '员工数 显示 未排序 未冻结' }).getByTitle('未排序').getByRole('img').click()
  await page.getByRole('button', { name: '确定' }).click()
  await page.waitForTimeout(200)
  const sortBtn = await page.getByRole('cell', { name: '员工数' }).getByRole('img')

  await expect(sortBtn).toHaveClass(/tiny-grid-sort__btn/)
})
