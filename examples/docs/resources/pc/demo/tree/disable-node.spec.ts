import { test, expect } from '@playwright/test';

test('树节点禁用状态', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/tree/disable-node');

  const checkboxDisabled = page.locator('//*[@id="preview"]/div[2]/div[2]/div/div[1]/div/div[2]/div/div/div[2]/div[1]/div/div[1]/label')
  const parentNodeCheckbox = page.locator('div').filter({ hasText: /^一级 2$/ }).locator('span').nth(1)
  const childNodeCheckbox = page.getByRole('treeitem', { name: '二级 2-1' }).locator('span').nth(1)
  const parentNodeCheckbox2 = page.locator('div').filter({ hasText: /^二级 1-1$/ }).locator('span').nth(1)

  // 禁用节点复选框是否不能选中
  await expect(checkboxDisabled).toHaveClass(/is-disabled/)
  await expect(checkboxDisabled).not.toHaveClass(/is-checked/)

  // 选中父节点, 子节点中除禁用的都可以选中
  await parentNodeCheckbox.click()
  await expect(parentNodeCheckbox).toHaveClass(/is-indeterminate/)
  await expect(childNodeCheckbox).toHaveClass(/is-checked/)

  // 子节点都禁用的情况下, 父节点不可选中
  await parentNodeCheckbox2.click()
  expect(parentNodeCheckbox2).not.toHaveClass(/is-checked|is-indeterminate/)

  // 非禁用节点可点击选中
  await page.getByRole('treeitem', { name: '二级 3-1' }).locator('span').nth(2).click();
  await page.locator('div').filter({ hasText: /^一级 3$/ }).getByRole('checkbox').click();
});