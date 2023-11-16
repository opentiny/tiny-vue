import { test, expect } from '@playwright/test';

test('连接线', async ({ page }) => {
  await page.goto('tree#guide-line');

  const tree = page.locator('#preview .tiny-tree')
  const nodes = tree.locator('.tiny-tree-node')
  await expect(nodes.first()).toHaveClass(/show-line/)
});