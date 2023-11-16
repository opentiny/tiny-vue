import { test, expect } from '@playwright/test'

test('set-input-value', async ({ page }) => {
  await page.goto('select#set-input-value')
  const tags = page.locator('#preview .tiny-select .tiny-tag')

  await page.getByRole('button', { name: '设置value值' }).click()
  await page.waitForTimeout(500)
  await expect((await tags.all()).length).toEqual(1)
  await expect(tags.first()).toHaveText(/龙须面/)
})
