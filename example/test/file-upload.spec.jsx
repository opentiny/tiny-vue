import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import { FileUpload } from '@opentiny/vue'
import { ref } from 'vue'
import { randomValues } from './common/globalConfig'

randomValues(global)

describe('file-upload', () => {
  test('drag', async () => {
    const action = 'http://localhost:3000/api/upload'
    const wrapper = mount(() => <FileUpload
      drag={true}
      action={action}
      auto-upload={false}
    >
    </FileUpload>)
    expect(wrapper.find('.tiny-upload-dragger').exists()).toBe(true)
  })


  test('slot', async () => {
    const action = 'http://localhost:3000/api/upload'
    const wrapper = mount(() => <FileUpload
      drag={true}
      action={action}
      auto-upload={false}
      v-slots={{
        tip: () => <div class="tiny-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      }}
    >
    </FileUpload>)
    expect(wrapper.find('.tiny-upload__tip').exists()).toBe(true)
  })

  test('events', async () => {
    const handleDelete = vi.fn()
    const fileList = [
      {
        name: 'test1',
        url: 'https://test-static-resource.obs.cn-north-7.ulanqab.huawei.com/tinydoc-website-vue/1.0.0.20220924181516/static/images/ld.png'
      },
      {
        name: 'test2',
        url: 'https://test-static-resource.obs.cn-north-7.ulanqab.huawei.com/tinydoc-website-vue/1.0.0.20220924181516/static/images/ry.png'
      }
    ]
    const action = 'http://localhost:3000/api/upload'
    const wrapper = mount(() => <FileUpload onRemove={handleDelete} auto-upload={false} action={action} file-list={fileList}>
    </FileUpload>)
    await wrapper.find('span').trigger('click')
    expect(handleDelete).toHaveBeenCalled()
  })
})
