import { test, expect } from '@playwright/test'

test('rgb 时应该为 rgb(xx,xx,xx)', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('color-select-panel#format')
  await expect(page.locator('#format')).toContainText('颜色值：rgb(102,204,255)')
})

test('hex', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('color-select-panel#format')
  await page.getByRole('button', { name: 'Toggle' }).click()
  await page.getByRole('textbox', { name: '请选择' }).click()
  await page.getByRole('list').getByText('hex').click()
  await page.getByRole('button', { name: '选择' }).click()
  await expect(page.locator('#format')).toContainText('颜色值：#66CCFF')
})

test('hsl 时应该为 hsl(xxx,xxx,xxx)', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('color-select-panel#format')
  await page.getByRole('button', { name: 'Toggle' }).click()
  await page
    .locator('div')
    .filter({ hasText: /^rgbhexhslhsv取消选择$/ })
    .getByRole('img')
    .click()
  await page.getByRole('textbox', { name: '请选择' }).click()
  await page.getByRole('textbox', { name: '请选择' }).click()
  await page.getByRole('list').getByText('hsl').click()
})

test('hsv 时候应该为 hsv(xx,xx,xx)', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('color-select-panel#format')
  await page.getByRole('button', { name: 'Toggle' }).click()
  await page.getByRole('textbox', { name: '请选择' }).click()
  await page.getByRole('list').getByText('hsv').click()
  await page.getByRole('button', { name: '选择' }).click()
  await expect(page.locator('#format')).toContainText('颜色值：hsv(199.99999999999997, 60%, 100%)')
})
