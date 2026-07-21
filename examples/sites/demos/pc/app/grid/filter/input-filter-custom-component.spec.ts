import { test, expect } from '@playwright/test'

test('自定义输入组件 - 范围筛选', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-filter#filter-input-custom-component')

  // 点击员工数列筛选图标
  await page.getByRole('cell', { name: '员工数' }).getByRole('img').first().click()

  // 等待筛选面板打开并填写范围：最小值 300，最大值 600
  const filterPanel = page.locator('.tiny-grid__filter-wrapper.filter__active')
  await filterPanel.waitFor({ state: 'visible' })
  await filterPanel.getByPlaceholder('最小值').nth(1).fill('300')
  await filterPanel.getByPlaceholder('最大值').nth(1).fill('600')

  await filterPanel.getByRole('button', { name: '确定' }).click()

  // 应显示员工数在 300-600 之间的行：500(WWW)、350(TGB)，使用 :visible 只统计可见行
  await expect(page.locator('.tiny-grid-body__row:visible')).toHaveCount(2)
})
