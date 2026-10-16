export function useSortLabel() {
  const { t } = useI18n()
  return (sort: ProductSort) => {
    return {
      'quantity-asc': t('Quantity: low to high'),
      'quantity-desc': t('Quantity: high to low'),
      'rating-desc': t('Rating: high to low'),
      'rating-asc': t('Rating: low to high'),
    }[sort]
  }
}
