import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('cascader#slot')

  // 自定义节点
  await page.getByRole('textbox', { name: '请选择' }).nth(0).click()
  await expect(page.getByText('指南', { exact: true })).toHaveAttribute('title', '指南')
  await page.waitForTimeout(100)

  // 无数据
  await page.getByRole('textbox', { name: '请选择' }).nth(1).click()
  const cascader = page.locator('.tiny-cascader-menu__no-data')
  await expect(cascader).toHaveText('no-data')
})
