<script setup>
const router = useRouter()
const tableName = ref('')
const go = () => {
  if (tableName)
    router.push(`/${encodeURIComponent(tableName)}`)
}
</script>

<template>
  <div>
    Editing
  </div>
</template>
