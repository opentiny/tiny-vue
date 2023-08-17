import { QueryBuilderContext } from '../../ctx'
import type { Controls, QueryBuilderContextProps, TranslationsFull, WithRequired } from '../../ts'
import { useContext, useMemo } from './vue-hooks'
import { defaultControlElements } from '../../components'
import { defaultControlClassnames, defaultTranslations } from '../../defaults'
import { mergeClassnames } from '../mergeClassnames'
import { objectKeys } from '../objectKeys'
import { usePreferProp } from './usePreferProp'

export type UseMergedContextProps = WithRequired<QueryBuilderContextProps, 'translations'>

/**
 * Inherit context, but props take precedence
 */
export const useMergedContext = (props: UseMergedContextProps) => {
  const rqbContext = useContext(QueryBuilderContext())

  const enableMountQueryChange = usePreferProp(true, props.enableMountQueryChange, rqbContext.enableMountQueryChange)

  // Drag-and-drop should be disabled if context sets it to false because
  // QueryBuilderDnD might not have loaded dnd yet. Therefore we prefer
  // the prop here only if context is true or undefined.
  const enableDragAndDrop =
    usePreferProp(false, props.enableDragAndDrop, rqbContext.enableDragAndDrop) &&
    rqbContext.enableDragAndDrop !== false

  const debugMode = usePreferProp(false, props.debugMode, rqbContext.debugMode)

  const controlClassnames = useMemo(
    () => mergeClassnames(defaultControlClassnames, rqbContext.controlClassnames, props.controlClassnames),
    [rqbContext.controlClassnames, props.controlClassnames]
  )

  const controlElements = useMemo(
    (): Controls => ({
      ...defaultControlElements,
      ...rqbContext.controlElements,
      ...props.controlElements
    }),
    [props.controlElements, rqbContext.controlElements]
  )

  const translations = useMemo((): TranslationsFull => {
    const translationsTemp: Partial<TranslationsFull> = {}
    objectKeys(props.translations).forEach((t) => {
      const contextTranslations = rqbContext.translations
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore Different keys have different requirements
      translationsTemp[t] = {
        ...defaultTranslations[t],
        ...contextTranslations,
        ...props.translations[t]
      }
    })
    return { ...defaultTranslations, ...translationsTemp }
  }, [rqbContext.translations, props.translations])

  const {
    controlClassnames: _controlClassnames,
    controlElements: _controlElements,
    debugMode: _debugMode,
    enableDragAndDrop: _enableDragAndDrop,
    enableMountQueryChange: _enableMountQueryChange,
    translations: _translations,
    ...otherContext
  } = rqbContext

  return {
    controlClassnames,
    controlElements,
    debugMode,
    enableDragAndDrop,
    enableMountQueryChange,
    translations,
    ...otherContext
  }
}
