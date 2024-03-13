import { test, expect } from '@playwright/test'

test('基本使用,无数据场景', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#basic-usage')

  const wrap = page.locator('#basic-usage')
  const treeMenu = wrap.locator('.tiny-tree-menu')

  await expect(treeMenu.locator('.tiny-input__inner')).toBeVisible()
})
