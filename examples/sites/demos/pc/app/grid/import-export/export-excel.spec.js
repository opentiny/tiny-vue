import { test, expect } from '@playwright/test'

test('表格导出功能测试', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-import-export#tiny-first-menu-export-excel')
  const downloadPromise = page.waitForEvent('download')
  await page.getByRole('button', { name: '导出数据' }).click()
  const download = await downloadPromise
  // 检查文件是否被下载并含有名称table.csv
  await expect(download._suggestedFilename).toBe('table.csv')
  await page.getByRole('button', { name: '清空数据' }).click()

  await expect(page.getByText('暂无数据')).toBeVisible()
})
