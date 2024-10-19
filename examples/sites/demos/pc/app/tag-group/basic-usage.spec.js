import { test, expect } from '@playwright/test'

test('TagGroup 基础用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tag-group#basic-usage')

  const tagGroup = page.locator('.tiny-tag-group')

  const tag1 = tagGroup.getByText('标签一')
  await expect(tag1).toHaveCSS('background-color', 'rgb(245, 245, 245)')
  await expect(tag1).toHaveCSS('color', 'rgb(25, 25, 25)')

  const tag2 = tagGroup.getByText('标签二')
  await expect(tag2).toHaveCSS('background-color', 'rgb(222, 236, 255)')
  await expect(tag2).toHaveCSS('color', 'rgb(20, 118, 255)')

  const tag3 = tagGroup.getByText('标签三')
  await expect(tag3).toHaveCSS('background-color', 'rgb(230, 242, 213)')
  await expect(tag3).toHaveCSS('color', 'rgb(92, 179, 0)')

  const tag4 = tagGroup.getByText('标签四')
  await expect(tag4).toHaveCSS('background-color', 'rgb(255, 235, 209)')
  await expect(tag4).toHaveCSS('color', 'rgb(255, 136, 0)')

  const tag5 = tagGroup.getByText('标签五')
  await expect(tag5).toHaveCSS('background-color', 'rgb(252, 227, 225)')
  await expect(tag5).toHaveCSS('color', 'rgb(242, 48, 48)')
})
