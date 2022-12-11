<script setup>
import { NConfigProvider, NMessageProvider, NThemeEditor, darkTheme } from 'naive-ui'
const naiveTheme = computed(() => (isDark.value === true ? darkTheme : null))
const overrides = {
  Input: {
    caretColor: '#f0b90bFF',
  },
  common: {
    primaryColor: '#f0b90bFF',
    primaryColorHover: '#D7A70EFF',
    primaryColorPressed: '#DAA704FF',
    primaryColorSuppl: '#F4CE56FF',
  },
}
</script>

<template>
  <NConfigProvider :theme="naiveTheme" h-full :theme-overrides="overrides">
    <NMessageProvider>
      <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
        <RouterView />
        <TheFooter />
      </main>
    </NMessageProvider>
  </NConfigProvider>
</template>
