import { test, expect } from '@playwright/test'

test('自定义提示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-empty-data-tip#tiny-first-menu-empty-data-tip')

  // 判断通过设置插槽 v-slot:empty自定义提示内容成功
  await expect(await page.getByText('没有更多数据了！')).toHaveText('没有更多数据了！')
})
