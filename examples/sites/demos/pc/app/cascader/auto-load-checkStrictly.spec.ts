import { test, expect } from '@playwright/test'

test('动态加载且父子级不相关联 lazyload & checkStrictly', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('cascader#auto-load-checkStrictly')
  await page.locator('.tiny-cascader').click()
  const svg = page.locator('.tiny-cascader-node__postfix > path')
  await expect(svg).toBeVisible()
  await page.locator('li[role="menuitem"]').click()
  const loadingSvg = page.getByRole('menuitem', { name: '选项1' }).locator('svg')
  await expect(loadingSvg).toHaveClass(/tiny-cascader-node__postfix/)
  await page.waitForTimeout(100)
  await page.getByRole('menuitem', { name: '选项2' }).getByRole('radio').click()
  await page.getByRole('textbox', { name: '请选择' }).click()
  const light = page.getByRole('menuitem', { name: '选项2' }).getByRole('radio')
  await expect(light).toHaveClass('tiny-radio is-checked')
})
