<script setup>
import { RouterLink } from 'vue-router'
import { NLayoutSider, NMenu } from 'naive-ui'
const { t } = useI18n()
const router = useRouter()
const selectedKey = ref('create')
const isCollapsed = ref(false)

function renderIcon(icon) {
  return () => h('div', { class: `${icon}` })
}
const menuOptions = [
  {
    label: () => h(
      RouterLink,
      { to: '/' },
      { default: () => t('nav.create') },
    ),
    path: '/',
    key: 'create',
    icon: renderIcon('i-carbon-new-tab'),
  },
  {
    label: () => h(
      RouterLink,
      { to: '/editor' },
      { default: () => t('nav.edit') },
    ),
    path: '/editor',
    key: 'edit',
    icon: renderIcon('i-carbon-edit'),
  },
]
watch(
  () => router.currentRoute.value,
  (currentRoute) => {
  //  console.log(currentRoute.fullPath)
    const path = currentRoute.fullPath
    const defaultMenuKey = menuOptions.find(x => x.path === path).key
    selectedKey.value = defaultMenuKey
  },
)
</script>

<template>
  <NLayoutSider
    min-h-screen
    collapse-mode="width"
    :collapsed-width="64"
    :width="220"
    show-trigger
    :collapsed="isCollapsed"
    @collapse="isCollapsed = true"
    @expand="isCollapsed = false"
  >
    <nav text-white text-sm min-h-full flex flex-col bg-brand-bgCard>
      <div flex flex-wrap justify-center items-center text-xl gap-2 pt-6>
        <div icon i-carbon-tag-edit />
        <div flex flex-col items-center relative>
          <p text-2xl text-brand-primary font-script leading-none>
            Sined
          </p>
          <p text-xs op70 italic text-center leading-none>
            Price editor
          </p>
        </div>
      </div>
      <div mt-8 md:mt-16>
        <NMenu
          v-model:value="selectedKey"
          inverted
          class="text-white"
          :options="menuOptions" :collapsed-width="64"
          :collapsed-icon-size="22"
        />
      </div>
      <div mta>
        <Settings :is-collapsed="isCollapsed" />
      </div>
    </nav>
  </NLayoutSider>
</template>

<style>
.n-menu .n-menu-item-content.n-menu-item-content--selected * {
  color: black  !important;
}
</style>
