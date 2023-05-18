<template>
  <div class="w-full w-full flex">
    <slot :data="data">{{ data.day }}</slot>
  </div>
</template>

<script>

export default {
  inheritAttrs: false,
  components: {
  },
  props: {
    data: Object
  }
}
</script>
