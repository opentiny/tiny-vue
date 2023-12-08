import { test, expect } from '@playwright/test'

test('TagGroup 基础用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tag-group#basic-usage')

  const tagGroup = page.locator('.tiny-tag-group')

  const tag1 = tagGroup.getByText('标签一')
  await expect(tag1).toHaveCSS('background-color', 'rgb(238, 240, 245)')
  await expect(tag1).toHaveCSS('color', 'rgb(87, 93, 108)')

  const tag2 = tagGroup.getByText('标签二')
  await expect(tag2).toHaveCSS('background-color', 'rgba(51, 51, 51, 0.06)')
  await expect(tag2).toHaveCSS('color', 'rgb(37, 43, 58)')

  const tag3 = tagGroup.getByText('标签三')
  await expect(tag3).toHaveCSS('background-color', 'rgb(237, 255, 249)')
  await expect(tag3).toHaveCSS('color', 'rgb(58, 194, 149)')
  
  const tag4 = tagGroup.getByText('标签四')
  await expect(tag4).toHaveCSS('background-color', 'rgb(255, 243, 232)')
  await expect(tag4).toHaveCSS('color', 'rgb(227, 125, 41)')

  const tag5 = tagGroup.getByText('标签五')
  await expect(tag5).toHaveCSS('background-color', 'rgb(255, 238, 237)')
  await expect(tag5).toHaveCSS('color', 'rgb(222, 80, 78)')

})
