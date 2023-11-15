import { test, expect } from '@playwright/test'

test('事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('file-upload#upload-events')

  const upload = page.getByRole('button', { name: '点击上传' })
  const lists = page.locator('.tiny-upload-list__item')
  const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), upload.click()])
  const modals = page.locator('.tiny-modal')
  const delButton = page
    .getByRole('listitem')
    .filter({ hasText: 'test1按 delete 键可删除' })
    .getByTitle('删除文件')
    .locator('svg')

  const path = require('node:path')
  const currentPath = path.resolve(__dirname, '测试.jpg')

  await fileChooser.setFiles(currentPath)
  await expect(modals).toHaveCount(3)
  await expect(modals).toHaveText(['触发上传文件改变回调事件', '文件上传失败回调', '触发上传文件改变回调事件'])
  await lists.nth(0).hover()
  await delButton.click()
  await expect(modals.nth(3)).toHaveText('触发删除文件回调事件')

  await fileChooser.setFiles([currentPath, currentPath, currentPath, currentPath])
  await expect(modals.nth(3)).toHaveText('触发文件超出个数限制回调事件')
})
