import { expect, test } from '@playwright/test'

test('动态编辑标签', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('tag#create')

  const preview = page.locator('#preview')
  const add = page.getByRole('button', { name: '+ New Tag' })
  const input = preview.getByRole('textbox')
  const newTag = preview.getByText('新标签')
  const close = page.locator('span').filter({ hasText: '新标签' }).locator('svg')

  await add.click()
  await input.fill('新标签')
  await input.press('Enter')
  await expect(newTag, 'Creation failed').toBeVisible()
  await close.click()
  await expect(newTag, 'Deletion failed').not.toBeVisible()
})
