import { test, expect } from '@playwright/test'

test('常见问题--表格列头与单元格错位测试', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/grid-faq/faq-unbalanced')
  const firstThDom = page.getByRole('cell', { name: 'test1', exact: true })
  const firstTdDom = page.locator('td:nth-child(3)').first()
  const { x } = await firstThDom.boundingBox()
  const { x: x1 } = await firstTdDom.boundingBox()

  await expect(x).not.toEqual(x1)
})
