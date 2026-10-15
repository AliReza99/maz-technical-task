<template>
  <section class="space-y-10">
    <h2 dir="ltr" class="text-2xl font-medium">Collapsible Card</h2>
    <div class="rounded-lg border border-gray-50 bg-gray-50 p-6">
      <BaseCollapsibleCard :title="$t('Category')" class="max-w-sm">
        <p class="text-sm/6 text-fg">{{ $t('Card content') }}</p>
      </BaseCollapsibleCard>
    </div>
  </section>
</template>
