import { test, expect } from '@playwright/test';

test('测试数据源是否正常显示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/tree/data-source');
  await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div/div[1]/div')).toHaveText('一级 1')
  await page.getByRole('treeitem', { name: '一级 1' }).click();
  await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div/div[1]/div/div[2]/div/div/div[1]')).toHaveText('二级 1-1')
  await page.getByRole('treeitem', { name: '二级 1-1' }).locator('div').click();
  await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div/div[1]/div/div[2]/div/div/div[2]/div[1]/div')).toHaveText('三级 1-1-1')
  await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div/div[3]/div')).toHaveText('一级 3')
});