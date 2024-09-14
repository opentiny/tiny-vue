import { test, expect } from '@playwright/test'

test('TagGroup 主题', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tag-group#tag-group-effect')

  const tagGroupsLocator = page.locator('.tiny-demo-tag-group-effect .tiny-tag-group')

  const darkTag1 = tagGroupsLocator.locator('.tiny-tag.tiny-tag--dark').getByText('标签').nth(0)
  await expect(darkTag1).toHaveCSS('background-color', 'rgb(20, 118, 255)')
  await expect(darkTag1).toHaveCSS('color', 'rgb(255, 255, 255)')

  const darkTag2 = tagGroupsLocator.locator('.tiny-tag.tiny-tag--dark').getByText('标签').nth(1)
  await expect(darkTag2).toHaveCSS('background-color', 'rgb(92, 179, 0)')
  await expect(darkTag2).toHaveCSS('color', 'rgb(255, 255, 255)')

  const darkTag3 = tagGroupsLocator.locator('.tiny-tag.tiny-tag--dark').getByText('标签').nth(2)
  await expect(darkTag3).toHaveCSS('background-color', 'rgb(255, 136, 0)')
  await expect(darkTag3).toHaveCSS('color', 'rgb(255, 255, 255)')

  const darkTag4 = tagGroupsLocator.locator('.tiny-tag.tiny-tag--dark').getByText('标签').nth(3)
  await expect(darkTag4).toHaveCSS('background-color', 'rgb(242, 48, 48)')
  await expect(darkTag4).toHaveCSS('color', 'rgb(255, 255, 255)')

  const darkTag5 = tagGroupsLocator.locator('.tiny-tag.tiny-tag--dark').getByText('标签').nth(4)
  await expect(darkTag5).toHaveCSS('background-color', 'rgb(25, 25, 25)')
  await expect(darkTag5).toHaveCSS('color', 'rgb(255, 255, 255)')

  const lightTag1 = tagGroupsLocator.locator('.tiny-tag.tiny-tag--light').getByText('标签').nth(0)
  await expect(lightTag1).toHaveCSS('background-color', 'rgb(230, 242, 255)')
  await expect(lightTag1).toHaveCSS('color', 'rgb(20, 118, 255)')

  const lightTag2 = tagGroupsLocator.locator('.tiny-tag.tiny-tag--light').getByText('标签').nth(1)
  await expect(lightTag2).toHaveCSS('background-color', 'rgb(228, 247, 233)')
  await expect(lightTag2).toHaveCSS('color', 'rgb(2, 153, 49)')

  const lightTag3 = tagGroupsLocator.locator('.tiny-tag.tiny-tag--light').getByText('标签').nth(2)
  await expect(lightTag3).toHaveCSS('background-color', 'rgb(255, 240, 224)')
  await expect(lightTag3).toHaveCSS('color', 'rgb(217, 105, 0)')

  const lightTag4 = tagGroupsLocator.locator('.tiny-tag.tiny-tag--light').getByText('标签').nth(3)
  await expect(lightTag4).toHaveCSS('background-color', 'rgb(255, 234, 232)')
  await expect(lightTag4).toHaveCSS('color', 'rgb(242, 48, 48)')

  const lightTag5 = tagGroupsLocator.locator('.tiny-tag.tiny-tag--light').getByText('标签').nth(4)
  await expect(lightTag5).toHaveCSS('background-color', 'rgb(245, 245, 245)')
  await expect(lightTag5).toHaveCSS('color', 'rgb(25, 25, 25)')

  const plainTag1 = tagGroupsLocator.locator('.tiny-tag.tiny-tag--plain').getByText('标签').nth(0)
  await expect(plainTag1).toHaveCSS('background-color', 'rgb(255, 255, 255)')
  await expect(plainTag1).toHaveCSS('color', 'rgb(20, 118, 255)')

  const plainTag2 = tagGroupsLocator.locator('.tiny-tag.tiny-tag--plain').getByText('标签').nth(1)
  await expect(plainTag2).toHaveCSS('background-color', 'rgb(255, 255, 255)')
  await expect(plainTag2).toHaveCSS('color', 'rgb(2, 153, 49)')

  const plainTag3 = tagGroupsLocator.locator('.tiny-tag.tiny-tag--plain').getByText('标签').nth(2)
  await expect(plainTag3).toHaveCSS('background-color', 'rgb(255, 255, 255)')
  await expect(plainTag3).toHaveCSS('color', 'rgb(217, 105, 0)')

  const plainTag4 = tagGroupsLocator.locator('.tiny-tag.tiny-tag--plain').getByText('标签').nth(3)
  await expect(plainTag4).toHaveCSS('background-color', 'rgb(255, 255, 255)')
  await expect(plainTag4).toHaveCSS('color', 'rgb(242, 48, 48)')

  const plainTag5 = tagGroupsLocator.locator('.tiny-tag.tiny-tag--plain').getByText('标签').nth(4)
  await expect(plainTag5).toHaveCSS('background-color', 'rgb(255, 255, 255)')
  await expect(plainTag5).toHaveCSS('color', 'rgb(25, 25, 25)')
})
