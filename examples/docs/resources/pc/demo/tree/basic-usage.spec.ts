import { test, expect } from '@playwright/test';

test('tree组件基本使用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/tree/basic-usage');
  await page.getByRole('treeitem', { name: '一级 1' }).locator('div').click();
  await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div/div[1]/div')).toHaveClass(/is-current/);
  await page.getByText('二级 1-1').click();
  await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div/div[1]/div/div[2]/div/div')).toHaveClass(/is-current/);
  await page.getByRole('treeitem', { name: '三级 1-1-1' }).locator('div').click();
  await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div/div[1]/div/div[2]/div/div/div[2]/div/div')).toHaveClass(/is-current/);
  await page.getByRole('treeitem', { name: '一级 3' }).getByRole('img').click();
  await page.getByRole('treeitem', { name: '一级 1' }).locator('div').filter({ hasText: '一级 1' }).click();
  await expect(page.getByRole('treeitem', { name: '一级 1-1', includeHidden: true })).toBeHidden(0)
  await page.locator('.tiny-modal__box').first().click();
});