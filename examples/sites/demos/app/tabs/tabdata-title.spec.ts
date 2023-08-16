import { test, expect } from '@playwright/test'

test('循环创建标签页', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/tabs/tabdata-title')

  const first = page.getByRole('tab', { name: '表单组件' })
  const second = page.getByRole('tab', { name: '数据组件' })
  const content = page.getByRole('tabpanel')

  await expect(first).toBeVisible()
  await second.click()
  await expect(second).toHaveClass(/is-active/)
  await expect(content).toHaveText(/数据组件/)
})
