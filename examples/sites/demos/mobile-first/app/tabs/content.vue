<template>
  <div>
    <h1>子组件content{{ content }}</h1>
  </div>
</template>

<script>
export default {
  props: { content: String },
  created() {
    console.debug('content created', this.content)
  }
  // mounted() {
  //   console.debug('content mounted')
  // }
}
</script>
