import { test, expect } from '@playwright/test'

test('TagGroup 基础用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tag-group#basic-usage')

  const tagGroup = page.locator('.tiny-tag-group')

  const tag1 = tagGroup.getByText('标签').nth(0)
  await expect(tag1).toHaveCSS('background-color', 'rgb(230, 242, 255)')
  await expect(tag1).toHaveCSS('color', 'rgb(20, 118, 255)')

  const tag2 = tagGroup.getByText('标签').nth(1)
  await expect(tag2).toHaveCSS('background-color', 'rgb(228, 247, 233)')
  await expect(tag2).toHaveCSS('color', 'rgb(2, 153, 49)')

  const tag3 = tagGroup.getByText('标签').nth(2)
  await expect(tag3).toHaveCSS('background-color', 'rgb(255, 240, 224)')
  await expect(tag3).toHaveCSS('color', 'rgb(217, 105, 0)')

  const tag4 = tagGroup.getByText('标签').nth(3)
  await expect(tag4).toHaveCSS('background-color', 'rgb(255, 234, 232)')
  await expect(tag4).toHaveCSS('color', 'rgb(242, 48, 48)')

  const tag5 = tagGroup.getByText('标签').nth(4)
  await expect(tag5).toHaveCSS('background-color', 'rgb(245, 245, 245)')
  await expect(tag5).toHaveCSS('color', 'rgb(25, 25, 25)')
})
