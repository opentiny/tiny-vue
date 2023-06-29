import { test, expect } from '@playwright/test';

test('unit', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/numeric/calculate-according-to-num-of-goods')

  const numeric = page.locator('#preview .tiny-numeric')
  const unit = numeric.locator('.tiny-numeric__unit')
  await expect(unit).toHaveText('斤')
});