import { test, expect } from '@playwright/test'

test('TagGroup 主题', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tag-group#tag-group-effect')

  const tagGroupsLocator = page.locator('.tiny-demo-tag-group-effect .tiny-tag-group')

  const darkTag1 = tagGroupsLocator.locator('.tiny-tag.tiny-tag--dark').filter({ hasText: '标签一' })
  await expect(darkTag1).toHaveCSS('background-color', 'rgb(94, 124, 224)')
  await expect(darkTag1).toHaveCSS('color', 'rgb(255, 255, 255)')

  const darkTag2 = tagGroupsLocator.locator('.tiny-tag.tiny-tag--dark').filter({ hasText: '标签二' })
  await expect(darkTag2).toHaveCSS('background-color', 'rgb(37, 43, 58)')
  await expect(darkTag2).toHaveCSS('color', 'rgb(255, 255, 255)')

  const darkTag3 = tagGroupsLocator.locator('.tiny-tag.tiny-tag--dark').filter({ hasText: '标签三' })
  await expect(darkTag3).toHaveCSS('background-color', 'rgb(80, 212, 171)')
  await expect(darkTag3).toHaveCSS('color', 'rgb(255, 255, 255)')

  const darkTag4 = tagGroupsLocator.locator('.tiny-tag.tiny-tag--dark').filter({ hasText: '标签四' })
  await expect(darkTag4).toHaveCSS('background-color', 'rgb(250, 152, 65)')
  await expect(darkTag4).toHaveCSS('color', 'rgb(255, 255, 255)')

  const darkTag5 = tagGroupsLocator.locator('.tiny-tag.tiny-tag--dark').filter({ hasText: '标签五' })
  await expect(darkTag5).toHaveCSS('background-color', 'rgb(246, 111, 106)')
  await expect(darkTag5).toHaveCSS('color', 'rgb(255, 255, 255)')


  const lightTag1 = tagGroupsLocator.locator('.tiny-tag.tiny-tag--light').filter({ hasText: '标签一' })
  await expect(lightTag1).toHaveCSS('background-color', 'rgb(238, 240, 245)')
  await expect(lightTag1).toHaveCSS('color', 'rgb(87, 93, 108)')

  const lightTag2 = tagGroupsLocator.locator('.tiny-tag.tiny-tag--light').filter({ hasText: '标签二' })
  await expect(lightTag2).toHaveCSS('background-color', 'rgba(51, 51, 51, 0.06)')
  await expect(lightTag2).toHaveCSS('color', 'rgb(37, 43, 58)')

  const lightTag3 = tagGroupsLocator.locator('.tiny-tag.tiny-tag--light').filter({ hasText: '标签三' })
  await expect(lightTag3).toHaveCSS('background-color', 'rgb(237, 255, 249)')
  await expect(lightTag3).toHaveCSS('color', 'rgb(58, 194, 149)')

  const lightTag4 = tagGroupsLocator.locator('.tiny-tag.tiny-tag--light').filter({ hasText: '标签四' })
  await expect(lightTag4).toHaveCSS('background-color', 'rgb(255, 243, 232)')
  await expect(lightTag4).toHaveCSS('color', 'rgb(227, 125, 41)')

  const lightTag5 = tagGroupsLocator.locator('.tiny-tag.tiny-tag--light').filter({ hasText: '标签五' })
  await expect(lightTag5).toHaveCSS('background-color', 'rgb(255, 238, 237)')
  await expect(lightTag5).toHaveCSS('color', 'rgb(222, 80, 78)')


  const plainTag1 = tagGroupsLocator.locator('.tiny-tag.tiny-tag--plain').filter({ hasText: '标签一' })
  await expect(plainTag1).toHaveCSS('background-color', 'rgb(255, 255, 255)')
  await expect(plainTag1).toHaveCSS('color', 'rgb(94, 124, 224)')

  const plainTag2 = tagGroupsLocator.locator('.tiny-tag.tiny-tag--plain').filter({ hasText: '标签二' })
  await expect(plainTag2).toHaveCSS('background-color', 'rgb(255, 255, 255)')
  await expect(plainTag2).toHaveCSS('color', 'rgb(37, 43, 58)')

  const plainTag3 = tagGroupsLocator.locator('.tiny-tag.tiny-tag--plain').filter({ hasText: '标签三' })
  await expect(plainTag3).toHaveCSS('background-color', 'rgb(255, 255, 255)')
  await expect(plainTag3).toHaveCSS('color', 'rgb(80, 212, 171)')

  const plainTag4 = tagGroupsLocator.locator('.tiny-tag.tiny-tag--plain').filter({ hasText: '标签四' })
  await expect(plainTag4).toHaveCSS('background-color', 'rgb(255, 255, 255)')
  await expect(plainTag4).toHaveCSS('color', 'rgb(250, 152, 65)')

  const plainTag5 = tagGroupsLocator.locator('.tiny-tag.tiny-tag--plain').filter({ hasText: '标签五' })
  await expect(plainTag5).toHaveCSS('background-color', 'rgb(255, 255, 255)')
  await expect(plainTag5).toHaveCSS('color', 'rgb(246, 111, 106)')

})
