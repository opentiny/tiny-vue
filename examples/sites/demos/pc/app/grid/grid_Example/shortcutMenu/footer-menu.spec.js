import { test, expect } from '@playwright/test'

test('Grid-右键菜单-表尾菜单', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-context-menu#grid_Example-shortcutMenu-footer-menu')
  await page.locator('.tiny-grid-footer__row > td:nth-child(3)').click({
    button: 'right'
  })
  await expect(page.locator('a').filter({ hasText: '清空数据' })).toBeVisible()
})
