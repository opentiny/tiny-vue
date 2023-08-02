import { test, expect } from '@playwright/test'

test('自定义序号规则', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/grid-serial-column/tiny-first-menu-custom-serial-column')

  await expect(page.getByRole('cell', { name: '9' }).getByText('9')).toHaveText('9')
  await expect(page.getByText('11')).toHaveText('11')
})
