import { test, expect } from '@playwright/test'

test('自定义序号列的起始值', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-serial-column#serial-column-start-index')

  await expect(page.getByText('201')).toHaveText('201')
})
