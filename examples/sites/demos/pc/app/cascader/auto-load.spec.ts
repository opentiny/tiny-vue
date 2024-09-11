import { test, expect } from '@playwright/test'

test('动态加载 lazyload', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('cascader#auto-load')
  await page.getByRole('textbox', { name: '请选择' }).click()
  const svg = page.locator('.tiny-cascader-node__postfix')
  await expect(svg).toBeVisible()
  await page.getByRole('menuitem', { name: '选项1' }).click()
  const loadingSvg = page.getByRole('menuitem', { name: '选项1' })
  await expect(loadingSvg).toBeVisible()
})
