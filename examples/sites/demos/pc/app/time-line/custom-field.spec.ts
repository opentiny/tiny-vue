import { test, expect } from '@playwright/test'

test('自定义数据映射规则', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())

  await page.goto('time-line#different-data')

  const timeline = page.locator('#preview .tiny-steps')
  const nodes = timeline.locator('.timeline')

  await expect(nodes.first().locator('.date-time .date')).toHaveText('2018-04-15')
  await expect(nodes.first().locator('.date-time .time')).toHaveText('00:00')
  await expect(nodes.first().locator('.name')).toHaveText('提交审批')
  await expect(nodes.nth(1).locator('.date-time .date')).toHaveText('2018-04-13')
  await expect(nodes.nth(2).locator('.name')).toHaveText('创建成功')
})
