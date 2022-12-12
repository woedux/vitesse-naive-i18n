<script setup>
import { NConfigProvider, NLayout, NLayoutContent, NMessageProvider, NThemeEditor, darkTheme } from 'naive-ui'
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
    <NLayout has-sider dark:bg-brand-bg-dark>
      <Navigation-vertical />
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </NLayout>
    <NThemeEditor />
    <!-- <NMessageProvider>

      <div>
        <router-view v-slot="{ Component, route }">
          <transition name="fade" mode="out-in">
            <component :is="Component" :key="route.path" />
          </transition>
        </router-view>
      </div>

      <TheFooter />
    </NMessageProvider> -->
  </NConfigProvider>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
