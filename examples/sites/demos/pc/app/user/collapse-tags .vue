<template>
  <tiny-user
    v-model="user"
    :collapse-tags="true"
    :collapse-show-overflow-tooltip="true"
    multiple
    cache-key="test-user"
    :cache-fields="['email']"
    value-field="userAccount"
  ></tiny-user>
</template>

<script lang="jsx">
import { User } from '@opentiny/vue'

export default {
  components: {
    TinyUser: User
  },
  data() {
    return {
      user: 'test1,test2,test3'
    }
  }
}
</script>
