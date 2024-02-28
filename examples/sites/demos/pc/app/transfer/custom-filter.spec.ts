import { test, expect } from '@playwright/test'

test('测试自定义过滤方法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('transfer#custom-filter')

  const preview = page.locator('.pc-demo-container')
  const transferPanels = preview.locator('div.tiny-transfer-panel')
  const leftPanel = transferPanels.first()
  const input = preview.getByPlaceholder('请输入城市拼音').first().locator('input')
  const items = leftPanel.locator('div.tiny-transfer-panel__list > label')

  await input.click()
  await input.fill('xi')
  await expect(items).toHaveCount(1)
  // 判断删除搜索关键字后是否正常显示列表
  await input.click()
  await input.fill('')
  await expect(items).toHaveCount(5)
})
