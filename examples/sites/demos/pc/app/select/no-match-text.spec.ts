import { test, expect } from '@playwright/test'

test('no-match-text', async ({ page }) => {
  await page.goto('select#no-match-text')
  const input = page.locator('#preview .tiny-input__inner')
  await input.click()
  const listItems = page.locator('.tiny-select-dropdown__list').getByRole('listitem')
  await expect((await listItems.all()).length).toEqual(5)
  await expect(page.getByText('No Match')).toBeHidden()
  await input.fill('1')
  await input.press('Enter')
  await expect(page.getByText('No Match')).toBeVisible()
})
