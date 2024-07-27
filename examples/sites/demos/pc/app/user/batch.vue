<template>
  <div>
    <tiny-user v-model="user1" :batch="true" :cache="false"></tiny-user>
    <br />
    <tiny-user v-model="user2" :batch="true" :cache="false"></tiny-user>
    <br />
    <tiny-user v-model="user3" :batch="true" :cache="false"></tiny-user>
    <br />
    <tiny-user v-model="user4" :batch="true" :cache="false"></tiny-user>
    <br />
    <tiny-user v-model="user5" :batch="true" :cache="false"></tiny-user>
    <br />
    <tiny-user v-model="user6" :batch="true" :cache="false"></tiny-user>
    <br />
    <tiny-user v-model="user7" :batch="true" :cache="false"></tiny-user>
    <br />
    <tiny-user v-model="user8" :batch="true" :cache="false"></tiny-user>
    <br />
    <tiny-user v-model="user9" :batch="true" :cache="false"></tiny-user>
  </div>
</template>

<script>
import { User } from '@opentiny/vue'

export default {
  components: {
    TinyUser: User
  },
  data() {
    return {
      user1: '702973890055088',
      user2: '421000103624002',
      user3: '421000103624003',
      user4: '421000103624004',
      user5: '421000103624005',
      user6: '421000103624006',
      user7: '421000103624007',
      user8: '421000103624008',
      user9: '421000103624009'
    }
  }
}
</script>
