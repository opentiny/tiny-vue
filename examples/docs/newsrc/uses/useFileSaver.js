const pickerOption = {
  types: [{ accept: { 'text/vue': ['.vue'] } }]
}

export function useFileSaver() {
  let handle = null
  const saver = {
    save: async (data) => {
      handle = handle || (await window.showSaveFilePicker(pickerOption))
      const writableStream = await handle.createWritable()
      await writableStream.write(data)
      await writableStream.close()
    },
    reset: () => (handle = null) // 切换保存为另一个文件时，要先行调用一下
  }

  return saver
}
