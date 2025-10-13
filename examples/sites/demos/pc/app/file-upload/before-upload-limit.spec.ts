import { test, expect } from '@playwright/test'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

test('定义上传前限制', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('file-upload#before-upload-limit')

  const upload = page.getByRole('button', { name: '点击上传' })
  const modal = page.locator('.tiny-modal').nth(1)
  const modalCancel = page.getByRole('button', { name: '取消' })
  const lists = page.locator('.tiny-upload-list__item')
  const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), upload.click()])

  const currentPath = path.resolve(__dirname, '测试.jpg')
  const exceedFilePath = path.resolve(__dirname, 'before-upload-limit.vue')

  await expect(lists).toHaveCount(1)
  await page.getByText('test1').isVisible()
  await page.getByText('测试.jpg').isVisible()
  await fileChooser.setFiles(currentPath)
  await page.getByText('测试.jpg').isVisible()

  await fileChooser.setFiles(exceedFilePath)
  await modal.waitFor({ state: 'attached', timeout: 100 })
  await modalCancel.click()
  await expect(lists).toHaveCount(1)
  await page.getByText('test1').isVisible()
})
