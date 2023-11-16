import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('drop-times#basic-usage')

  const droptimes = page.getByPlaceholder('请选择')
  const option = page.getByRole('listitem').filter({ hasText: '01:00' })

  await droptimes.click()
  await droptimes.focus()
  await expect(option).toBeVisible()
  await option.click()
  await expect(droptimes).toHaveValue('01:00')
  await expect(option).not.toBeVisible()
})
