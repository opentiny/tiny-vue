export const click = ({ props, emit }) => (index) => {
  const i = props.modelValue === index ? undefined : index
  
  emit('update:modelValue', i)
  emit('click', index)
}
