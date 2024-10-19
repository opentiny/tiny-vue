import { test, expect } from '@playwright/test'

test('TagGroup 主题', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tag-group#tag-group-effect')

  const tagGroupsLocator = page.locator('.tiny-demo-tag-group-effect .tiny-tag-group')

  // 深色
  const darkTag1 = tagGroupsLocator.locator('.tiny-tag.tiny-tag--dark').filter({ hasText: '标签一' })
  await expect(darkTag1).toHaveCSS('background-color', 'rgb(25, 25, 25)')
  await expect(darkTag1).toHaveCSS('color', 'rgb(255, 255, 255)')

  const darkTag2 = tagGroupsLocator.locator('.tiny-tag.tiny-tag--dark').filter({ hasText: '标签二' })
  await expect(darkTag2).toHaveCSS('background-color', 'rgb(20, 118, 255)')
  await expect(darkTag2).toHaveCSS('color', 'rgb(255, 255, 255)')

  const darkTag3 = tagGroupsLocator.locator('.tiny-tag.tiny-tag--dark').filter({ hasText: '标签三' })
  await expect(darkTag3).toHaveCSS('background-color', 'rgb(92, 179, 0)')
  await expect(darkTag3).toHaveCSS('color', 'rgb(255, 255, 255)')

  const darkTag4 = tagGroupsLocator.locator('.tiny-tag.tiny-tag--dark').filter({ hasText: '标签四' })
  await expect(darkTag4).toHaveCSS('background-color', 'rgb(255, 136, 0)')
  await expect(darkTag4).toHaveCSS('color', 'rgb(255, 255, 255)')

  const darkTag5 = tagGroupsLocator.locator('.tiny-tag.tiny-tag--dark').filter({ hasText: '标签五' })
  await expect(darkTag5).toHaveCSS('background-color', 'rgb(242, 48, 48)')
  await expect(darkTag5).toHaveCSS('color', 'rgb(255, 255, 255)')

  // 浅色
  const lightTag1 = tagGroupsLocator.locator('.tiny-tag.tiny-tag--light').filter({ hasText: '标签一' })
  await expect(lightTag1).toHaveCSS('background-color', 'rgb(245, 245, 245)')
  await expect(lightTag1).toHaveCSS('color', 'rgb(25, 25, 25)')

  const lightTag2 = tagGroupsLocator.locator('.tiny-tag.tiny-tag--light').filter({ hasText: '标签二' })
  await expect(lightTag2).toHaveCSS('background-color', 'rgb(222, 236, 255)')
  await expect(lightTag2).toHaveCSS('color', 'rgb(20, 118, 255)')

  const lightTag3 = tagGroupsLocator.locator('.tiny-tag.tiny-tag--light').filter({ hasText: '标签三' })
  await expect(lightTag3).toHaveCSS('background-color', 'rgb(230, 242, 213)')
  await expect(lightTag3).toHaveCSS('color', 'rgb(92, 179, 0)')

  const lightTag4 = tagGroupsLocator.locator('.tiny-tag.tiny-tag--light').filter({ hasText: '标签四' })
  await expect(lightTag4).toHaveCSS('background-color', 'rgb(255, 235, 209)')
  await expect(lightTag4).toHaveCSS('color', 'rgb(255, 136, 0)')

  const lightTag5 = tagGroupsLocator.locator('.tiny-tag.tiny-tag--light').filter({ hasText: '标签五' })
  await expect(lightTag5).toHaveCSS('background-color', 'rgb(252, 227, 225)')
  await expect(lightTag5).toHaveCSS('color', 'rgb(242, 48, 48)')

  // plain
  const plainTag1 = tagGroupsLocator.locator('.tiny-tag.tiny-tag--plain').filter({ hasText: '标签一' })
  await expect(plainTag1).toHaveCSS('background-color', 'rgb(255, 255, 255)')
  await expect(plainTag1).toHaveCSS('color', 'rgb(25, 25, 25)')

  const plainTag2 = tagGroupsLocator.locator('.tiny-tag.tiny-tag--plain').filter({ hasText: '标签二' })
  await expect(plainTag2).toHaveCSS('background-color', 'rgb(255, 255, 255)')
  await expect(plainTag2).toHaveCSS('color', 'rgb(20, 118, 255)')

  const plainTag3 = tagGroupsLocator.locator('.tiny-tag.tiny-tag--plain').filter({ hasText: '标签三' })
  await expect(plainTag3).toHaveCSS('background-color', 'rgb(255, 255, 255)')
  await expect(plainTag3).toHaveCSS('color', 'rgb(92, 179, 0)')

  const plainTag4 = tagGroupsLocator.locator('.tiny-tag.tiny-tag--plain').filter({ hasText: '标签四' })
  await expect(plainTag4).toHaveCSS('background-color', 'rgb(255, 255, 255)')
  await expect(plainTag4).toHaveCSS('color', 'rgb(255, 136, 0)')

  const plainTag5 = tagGroupsLocator.locator('.tiny-tag.tiny-tag--plain').filter({ hasText: '标签五' })
  await expect(plainTag5).toHaveCSS('background-color', 'rgb(255, 255, 255)')
  await expect(plainTag5).toHaveCSS('color', 'rgb(242, 48, 48)')
})
