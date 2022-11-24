<template>
  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false
    }
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false
      }, 1000)
    }
  }
}
</script>
