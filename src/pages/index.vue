<script setup lang="ts">
import { NH1, NText } from 'naive-ui'
defineOptions({
  name: 'IndexPage',
})
const { t, locale } = useI18n()
const name = $ref('')
const router = useRouter()
const newTableName = ref('')
const go = () => {
  if (name)
    router.push(`/editor/${newTableName}`)
}
</script>

<template>
  <div>
    Creatin
  </div>
</template>
