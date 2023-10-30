import { test, expect } from '@playwright/test'

test('上传的文件列表弹出显示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('file-upload#upload-file-list-thumb')

  const thumb = page.locator('.tiny-upload--thumb__head')
  const popList = page.getByRole('tooltip', { name: 'test1 下载文件 删除文件 test2 下载文件 删除文件' })
  const delItem1 = page.locator('span').filter({ hasText: 'test1test1' }).getByTitle('删除文件')
  const downloadItem2 = page.locator('span').filter({ hasText: 'test2test2' }).getByTitle('下载文件')

  await expect(thumb).toHaveText('2')
  await thumb.hover()
  await popList.isVisible()
  await delItem1.locator('svg').dblclick()
  await expect(thumb).toHaveText('1')
  const page3Promise = page.waitForEvent('popup')
  await downloadItem2.locator('svg').click()
  await page3Promise
})
