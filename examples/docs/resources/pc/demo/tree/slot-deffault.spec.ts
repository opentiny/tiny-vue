import { test, expect } from '@playwright/test';

test('默认插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/tree/slot-deffault');

  const currentNodeContent = page.getByText('一级 1')
  await expect(currentNodeContent).toHaveClass('custom-label')
});