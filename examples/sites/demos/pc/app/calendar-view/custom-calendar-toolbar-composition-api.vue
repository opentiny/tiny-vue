<template>
  <tiny-calendar-view>
    <template #tool>
      <p>此处为自定义工具栏插槽</p>
    </template>
  </tiny-calendar-view>
</template>

<script setup lang="ts">
import { CalendarView as TinyCalendarView } from '@opentiny/vue'
</script>
