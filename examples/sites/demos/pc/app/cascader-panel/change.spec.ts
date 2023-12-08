import { test, expect } from '@playwright/test'

test('选中节点变化', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('cascader-panel#change')
  await page.getByRole('menuitem', { name: '指南' }).click()

  await expect(page.getByText('节点展开：zhinan')).toBeVisible()

  await page.getByRole('menuitem', { name: '安装' }).click()
  await page.getByRole('menuitem', { name: '项目登记' }).click()

  await expect(page.getByText('change 事件，当前选中的值为:项目登记；传入的值为:zhinan,anzhuang,xiangmudengji')).toBeVisible()

  // 清除节点
  await expect(page.getByRole('menuitem', { name: '项目登记' })).toHaveClass('tiny-cascader-node is-active')
  await page.getByRole('button', { name: '清除选中节点' }).click()
  await expect(page.getByRole('menuitem', { name: '项目登记' })).not.toHaveClass('tiny-cascader-node is-active')

})
