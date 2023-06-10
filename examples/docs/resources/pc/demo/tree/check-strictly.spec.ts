import { test, expect } from '@playwright/test';

test('父子节点互不关联', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/tree/check-strictly');

  const checkedClass = /is-checked/
  const parantNode1 = page.locator('//*[@id="preview"]/div[2]/div[2]/div/div[1]/div/div[2]/div/div/div[1]/label')
  const childNodes1 = [page.getByRole('treeitem', { name: '三级 1-1-1' }).locator('span').nth(1), page.getByRole('treeitem', { name: '三级 1-1-2' }).locator('span').nth(1)]
  const parantNode2 = page.locator('//*[@id="preview"]/div[2]/div[2]/div/div[2]/div/div[1]/label')
  const childNodes2 = [page.getByRole('treeitem', { name: '二级 2-1' }).locator('span').nth(1), page.getByRole('treeitem', { name: '二级 2-2' }).locator('span').nth(1)]
  const parantNode3 = page.locator('//*[@id="preview"]/div[2]/div[2]/div/div[3]/div/div[1]/label')
  const childNodes3 = [page.getByRole('treeitem', { name: '二级 3-1' }).locator('span').nth(1)]

  // 子节点选中不影响父节点
  await childNodes1[0].click();
  await childNodes1[1].click();
  await expect(parantNode1).not.toHaveClass(checkedClass)

  // 子节点取消选中, 不影响父节点
  await parantNode1.click();
  await childNodes1[0].click();
  await childNodes1[1].click();
  await expect(parantNode1).toHaveClass(checkedClass)

  // 父节点选中, 子节点不变
  await parantNode2.click();
  await expect(childNodes2[0]).not.toHaveClass(checkedClass);
  await expect(childNodes2[1]).not.toHaveClass(checkedClass);
  await childNodes3[0].click();
  await parantNode3.click();
  await expect(childNodes3[0]).toHaveClass(checkedClass)

  // 父节点取消选中, 子节点不变
  await childNodes1[0].click();
  await childNodes1[1].click();
  await parantNode1.click()
  await expect(childNodes1[0]).toHaveClass(checkedClass)
  await expect(childNodes1[1]).toHaveClass(checkedClass)
});