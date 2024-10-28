import type { Page } from '@playwright/test'
import { test, expect } from '@playwright/test'

const getIcon = (page: Page) => page.locator('#clearable').getByRole('img').nth(1)

test('宽度自适应', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#width-adapt')

  const wrap = page.locator('#width-adapt')
  const treeMenu = wrap.locator('.tiny-tree-menu')
  await expect(treeMenu).toHaveAttribute('style', 'width: 100%;')
})
