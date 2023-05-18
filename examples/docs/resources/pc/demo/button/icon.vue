<template>
  <div>
    <tiny-button :icon="IconSearch" type="text" size="mini">
    </tiny-button>
    <tiny-button :icon="IconSearch" type="text">
    </tiny-button>
    <tiny-button type="primary" :icon="IconEdit">
      图标按钮
    </tiny-button>
    <tiny-button type="success" native-type="submit" :icon="IconYes">
      图标按钮
    </tiny-button>
    <tiny-button type="info" :icon="IconMail">
      图标按钮
    </tiny-button>
    <tiny-button type="warning" :icon="IconStarO">
      图标按钮
    </tiny-button>
    <tiny-button type="danger" :icon="IconDel">
      图标按钮
    </tiny-button>
  </div>
</template>

<script lang="jsx">
import { Button } from '@opentiny/vue'
import { IconDel, IconYes, IconEdit, IconMail, IconStarO, IconSearch } from '@opentiny/vue-icon'

export default {
  components: {
    TinyButton: Button
  },
  data() {
    return {
      IconDel: IconDel(),
      IconYes: IconYes(),
      IconEdit: IconEdit(),
      IconMail: IconMail(),
      IconStarO: IconStarO(),
      IconSearch: IconSearch()
    }
  }
}
</script>
