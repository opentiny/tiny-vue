import { test, expect } from '@playwright/test'

test('文件选择前确认', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('file-upload#custom-prefix')

  const upload = page.getByRole('button', { name: '点击上传' })

  await upload.click()
  await page.locator('.tiny-modal').filter({ hasText: 'beforeAddFile 钩子函数' }).isVisible()

  const confirmBtn = page.getByRole('button', { name: '确定' })
  const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), confirmBtn.click()])

  // eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
  const path = require('node:path')
  const currentPath = path.resolve(__dirname, '测试.jpg')

  await fileChooser.setFiles(currentPath)
  await page.getByText('测试.jpg').isVisible()
})
