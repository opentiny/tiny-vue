import { test, expect } from '@playwright/test'

test('表格列的配置信息', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-data-source#tiny-first-menu-columns')

  // 判断columns 设置表格列的配置信息成功
  await expect(page.getByRole('cell', { name: '名称' })).toHaveText('名称')
  await expect(page.getByText('所属区域').first()).toHaveText('所属区域')
  await expect(page.getByText('地址').first()).toHaveText('地址')
  await expect(page.getByRole('cell', { name: '公司简介' })).toHaveText('公司简介')
})
