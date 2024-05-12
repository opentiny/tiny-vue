import { computed, ref } from 'vue'

export const useRenderlessTableData = () => {
  const data = ref(JSON.parse(localStorage.getItem('renderless-table') ?? '{}'))
  const status = ref('pending')
  const error = computed(() => status.value === 'error')
  const reason = ref(null)
  const loading = computed(() => status.value === 'pending')
  if (data.value) {
    return {
      data,
      status,
      error,
      reason,
      loading
    }
  }
  fetch(`/renderless-table-data.json`, { method: 'get' })
    .then((res) => {
      return res.json()
    })
    .then((res) => {
      data.value = res
      localStorage.setItem('renderless-table', JSON.stringify(res))
      status.value = 'success'
    })
    .catch((err) => {
      status.value = 'error'
      reason.value = err
    })
  return {
    data,
    status,
    error,
    reason,
    loading
  }
}
