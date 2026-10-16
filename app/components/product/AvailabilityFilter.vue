<script setup lang="ts">
const { onlyAvailable } = useProductQuery()
</script>

<template>
  <BaseCard>
    <BaseSwitch v-model="onlyAvailable" :label="$t('Only available products')" />
  </BaseCard>
</template>
