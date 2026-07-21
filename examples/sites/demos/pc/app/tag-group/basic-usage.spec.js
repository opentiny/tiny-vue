import { test, expect } from '@playwright/test'

test('TagGroup 基础用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tag-group#basic-usage')

  const tagGroup = page.locator('.tiny-tag-group')

  const tag1 = tagGroup.locator('.tiny-tag').nth(0)
  await expect(tag1).toHaveCSS('background-color', 'rgb(245, 245, 245)')
  await expect(tag1).toHaveCSS('color', 'rgb(25, 25, 25)')

  const tag2 = tagGroup.locator('.tiny-tag').nth(1)
  await expect(tag2).toHaveCSS('background-color', 'rgb(222, 236, 255)')
  await expect(tag2).toHaveCSS('color', 'rgb(20, 118, 255)')

  const tag3 = tagGroup.locator('.tiny-tag').nth(2)
  await expect(tag3).toHaveCSS('background-color', 'rgb(230, 242, 213)')
  await expect(tag3).toHaveCSS('color', 'rgb(92, 179, 0)')

  const tag4 = tagGroup.locator('.tiny-tag').nth(3)
  await expect(tag4).toHaveCSS('background-color', 'rgb(255, 235, 209)')
  await expect(tag4).toHaveCSS('color', 'rgb(255, 136, 0)')

  const tag5 = tagGroup.locator('.tiny-tag').nth(4)
  await expect(tag5).toHaveCSS('background-color', 'rgb(252, 227, 225)')
  await expect(tag5).toHaveCSS('color', 'rgb(242, 48, 48)')
})
