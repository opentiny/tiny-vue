import { useMemo } from '../utils/hooks/vue-hooks'

interface UseSelectElementChangeHandlerParams {
  onChange: (v: string | string[]) => void
  multiple?: boolean
  field?: string
}

/**
 * Returns a memoized change handler for HTML select elements.
 */
export const useSelectElementChangeHandler = ({ multiple, onChange, field }: UseSelectElementChangeHandlerParams) => {
  const selectElementChangeHandler = useMemo(
    () =>
      multiple
        ? (e: any) => {
            onChange(Array.from(e).map((o) => o))
          }
        : (value: any) => onChange(field && typeof value === 'object' ? value[field] : value),
    [multiple, onChange]
  )
  return selectElementChangeHandler
}
