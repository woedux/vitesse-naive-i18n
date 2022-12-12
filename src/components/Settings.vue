<script setup>
import { NDropdown } from 'naive-ui'
import { useI18n } from 'vue-i18n'

import { useCookies } from '@vueuse/integrations/useCookies'

const props = defineProps({
  isCollapsed: Boolean,
})

// import useUser from '~/composables/useUser'
// const { userData, doLogOut } = useUser()

const cookies = useCookies()

const { t, locale } = useI18n()

const options = [{
  icon: renderIcon('i-carbon-earth-filled'),
  label: () => t('nav.settings.locale'),
  key: 'locale',
  children: [
    {
      label: '🇺🇸  English',
      key: 'en',
    },
    {
      label: '🇺🇦  Українська',
      key: 'uk',
    },
    {
      label: '🇷🇺  Русский',
      key: 'ru',
    }],
}, {
  icon: renderIcon('i-carbon-color-palette'),
  label: () => t('nav.settings.theme'),
  key: 'theme',
},
]

const themeName = computed(() => isDark.value ? 'dark' : '')

onMounted(() => {
  locale.value = cookies.get('locale') || 'en'
  const userTheme = cookies.get('theme') || ''
  if (userTheme !== themeName.value)
    toggleDark()
})

function handleLocaleSelect(localeKey) {
  console.log(localeKey)
  locale.value = localeKey
  cookies.set('locale', localeKey)
}
function handleTheme() {
  toggleDark()
  cookies.set('theme', themeName.value)
}
function handleSelect(key) {
  if (key === 'theme')
    return handleTheme()
  handleLocaleSelect(key)
}
// async function handleLogOut() {
//   const response = await doLogOut()
//   console.log(location)
//   if (response.message === 'success')
//     location.reload()
// }

function renderIcon(icon) {
  return () => h('div', { class: `${icon}` })
}
</script>

<template>
  <div justify-end items-end>
    <div flex flex-wrap gap-3 items-center justify-center pt-2>
      <div flex flex-col pb-6 min-w-full gap-4 :class="{ 'items-center text-lg': props.isCollapsed, 'pl-8 items-start': !props.isCollapsed }">
        <NDropdown trigger="click" :options="options" placement="top-start" @select="handleSelect">
          <button flex flex-wrap items-center gap-2 justify-center op-80 hover:op100 font-flags @click="handleLogOut">
            <div i-carbon-settings />
            <p :hidden="props.isCollapsed">
              {{ t('nav.settings.label') }}
            </p>
          </button>
        </NDropdown>

        <!-- <div flex flex-wrap gap-2 items-center text-brand-primary>
          <div i-carbon-user-favorite />
          <p :hidden="props.isCollapsed">
            sined
          </p>
        </div> -->
        <button flex flex-wrap text-red gap-2 items-center justify-center op-80 hover:op100 @click="handleLogOut">
          <div i-carbon-logout />
          <p :hidden="props.isCollapsed">
            {{ t('nav.settings.logout') }}
          </p>
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.n-dropdown-option-body__label {
  @apply font-flags;
}
</style>
