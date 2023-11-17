import { test, expect } from '@playwright/test'

test('Props 选项', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('cascader-panel#cascader-panel-props')
  await page.getByRole('menuitem', { name: '指南' }).click()
  await page.getByRole('menuitem', { name: '安装', exact: true }).click()
  await page.getByRole('menuitem', { name: '项目登记' }).click()

  // 不可选中
  await expect(page.getByText('选中值：xiangmudengji')).not.toBeVisible()

  await page.getByRole('menuitem', { name: '环境准备' }).click()
  await expect(page.getByText('选中值：huanjingzhunbei')).toBeVisible()
})
