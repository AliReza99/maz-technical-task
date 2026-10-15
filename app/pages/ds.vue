<script setup lang="ts">
definePageMeta({ layout: 'blank' })

useHead({ title: 'Design System' })
</script>

<template>
  <main class="mx-auto max-w-5xl space-y-16 px-6 py-12">
    <h1 dir="ltr" class="text-3xl font-medium">Design System</h1>
    <DsTypography />
    <DsColors />
    <DsIcons />
    <DsSocialIcons />
    <DsButtons />
    <DsProductCard />
    <DsBreadcrumb />
    <DsNavbar />
    <DsFooter />
    <DsSearchInput />
    <DsSwitch />
    <DsRadio />
    <DsCheckbox />
    <DsCard />
    <DsCollapsibleCard />
    <DsFilterChip />
  </main>
</template>
