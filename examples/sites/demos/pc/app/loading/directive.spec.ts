import { test, expect } from '@playwright/test'

test('修饰符', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('loading#directive')

  await expect(page.getByText('v-loadingText')).not.toBeVisible()
  await page.getByRole('button', { name: 'change loading' }).click()
  await expect(page.getByText('v-loadingText')).toBeVisible()

  await page.getByRole('button', { name: 'change loading' }).click()
  await expect(page.getByText('v-loadingText')).not.toBeVisible()
})
