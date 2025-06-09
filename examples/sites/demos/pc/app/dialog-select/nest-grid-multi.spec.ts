import { test, expect } from '@playwright/test'

test('dialogSelect 表格多选', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dialog-select#nest-grid-multi')
  const demo = page.locator('#nest-grid-multi')

  await demo.getByRole('button', { name: '打开窗口' }).click()
  await expect(page.locator('body')).not.toHaveClass(/dialog-box__scroll-lock/)
  await page
    .locator('div')
    .filter({ hasText: /^GFD 科技有限公司福州WSX 科技有限公司黄冈暂无数据$/ })
    .getByRole('img')
    .nth(1)
    .click()
  await expect(page.getByText('删除成功')).toBeVisible()
  await page.getByText('清空').click()
  await expect(page.getByText('清空成功')).toBeVisible()
})
