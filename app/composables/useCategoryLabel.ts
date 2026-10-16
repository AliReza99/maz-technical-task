// translating known categories on client side. unknown ones will be shown as they are
export function useCategoryLabel() {
  const { t } = useI18n()
  return (category: string) => {
    return (
      {
        electronics: t('electronics'),
        jewelery: t('jewelery'),
        "men's clothing": t("men's clothing"),
        "women's clothing": t("women's clothing"),
      }[category] ?? category
    )
  }
}
