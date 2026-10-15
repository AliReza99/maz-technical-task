<script setup lang="ts">
const sort = ref('quantity-asc')
</script>

<template>
  <section class="space-y-10">
    <h2 dir="ltr" class="text-2xl font-medium">Radio</h2>
    <div class="flex flex-col items-start gap-5 rounded-lg border border-gray-50 p-6">
      <BaseRadio
        v-model="sort"
        name="sort"
        value="quantity-asc"
        :label="$t('Quantity: low to high')"
      />
      <BaseRadio
        v-model="sort"
        name="sort"
        value="quantity-desc"
        :label="$t('Quantity: high to low')"
      />
      <BaseRadio v-model="sort" name="sort" value="rank-desc" :label="$t('Rank: high to low')" />
      <BaseRadio v-model="sort" name="sort" value="rank-asc" :label="$t('Rank: low to high')" />
    </div>
  </section>
</template>
