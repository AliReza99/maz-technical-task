<template>
  <aside class="flex flex-col gap-4 max-md:hidden">
    <ProductSearchFilter />
    <ProductAvailabilityFilter />
    <ProductSortFilter />
    <ProductCategoryFilter />
  </aside>

  <BaseCard class="flex gap-3 md:hidden">
    <ProductFiltersMenu />
    <ProductSortMenu />
  </BaseCard>
</template>
