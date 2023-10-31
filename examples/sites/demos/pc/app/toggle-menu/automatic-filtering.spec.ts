import { test, expect } from '@playwright/test'

test('自动过滤', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('toggle-menu#automatic-filtering')
  const preview = page.locator('#preview')
  await preview.getByTitle('更新日志').click()
  await preview.getByTitle('开发指南').click()
  await preview.getByTitle('表单组件').click()
  await preview.getByTitle('数据组件').click()
  await preview.getByTitle('其他组件').click()
  await page.getByPlaceholder('请输入过滤值').click()
  await page.getByPlaceholder('请输入过滤值').fill('组件')
  // 未点击搜索图标，将不会进行搜索
  await expect(preview.locator('.tiny-tree .tiny-tree-node:visible')).toHaveCount(14)
  // 点击搜索按钮
  await page.locator('.tiny-toggle-menu__filter-search > .tiny-svg').click()
  // 搜索结果应该为5
  await expect(preview.locator('.tiny-tree .tiny-tree-node:visible')).toHaveCount(5)
})
