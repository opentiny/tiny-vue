<template>
  <div v-html="markdown"></div>
</template>

<script setup lang="ts">
import { BubbleMarkdownMessageRenderer } from '@opentiny/tiny-robot'
import { computed } from 'vue'

const props = defineProps<{ content: string }>()
const markdownRenderer = new BubbleMarkdownMessageRenderer()
const markdown = computed(() => markdownRenderer.md.render(props.content))
</script>
