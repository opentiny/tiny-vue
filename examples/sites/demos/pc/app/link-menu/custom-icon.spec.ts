import { test, expect } from '@playwright/test'

test.describe('以下2个测试将覆盖2个demo: 自定义折叠展开图标、菜单内容超长时省略显示', () => {
  test('自定义折叠展开图标', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('link-menu#custom-icon')
    const preview = page.locator('#preview')
    // 点击图标弹出对话框
    await preview.getByRole('button').click()
    const linkMenuList = preview.locator('.tiny-tree.tiny-link-menu__overflow > div')
    const filterIcon = preview.locator('.tiny-link-menu__filert .tiny-input__icon')
    // 默认搜索图标的path数量为1
    await expect(filterIcon.locator('path')).toHaveCount(3)
    // 默认展开图标的path数量为1
    await expect(linkMenuList.nth(1).locator('.tree-node-icon .tiny-tree-node__expand-icon path')).toHaveCount(2)
  })

  test('菜单内容超长时省略显示', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('link-menu#custom-icon1')
    const preview = page.locator('#preview')
    // 点击图标弹出对话框
    await preview.getByRole('button').click()
    const linkMenuList = preview.locator('.tiny-tree.tiny-link-menu__overflow > div')
    const firstOption = linkMenuList.first()
    await expect(firstOption.locator('.tree-node-name')).toHaveCSS('overflow', 'hidden')
    await expect(firstOption.locator('.tree-node-name')).toHaveCSS('text-overflow', 'ellipsis')
    await expect(firstOption.locator('.tree-node-name')).toHaveCSS('white-space', 'nowrap')
  })
})
