import { test, expect } from '@playwright/test'

test('水平缩进', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#indent')

  const childNode1 = page.locator('#preview .tiny-tree-node__content').filter({ hasText: /^二级 1-1$/ })
  await expect(childNode1).toHaveCSS('margin-left', '50px')
  const childNode2 = page.locator('#preview .tiny-tree-node__content').filter({ hasText: /^三级 1-1-1$/ })
  await expect(childNode2).toHaveCSS('margin-left', '50px')
})
