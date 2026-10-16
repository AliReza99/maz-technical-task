<script setup lang="ts">
const { search } = useProductQuery()

const searchDraft = ref(search.value)
watch(search, (value) => {
  searchDraft.value = value
})
</script>

<template>
  <BaseCard>
    <form class="flex flex-col gap-4" @submit.prevent="search = searchDraft">
      <h2 class="text-[13px]/4 font-medium text-gray-700">{{ $t('Filter and search') }}</h2>
      <BaseSearchInput v-model="searchDraft" :placeholder="$t('Search')" />
      <BaseButton type="submit" class="w-full">{{ $t('Search') }}</BaseButton>
    </form>
  </BaseCard>
</template>
