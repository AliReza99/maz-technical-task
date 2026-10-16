const tomanFormatter = new Intl.NumberFormat('fa-IR', { maximumFractionDigits: 0 })

export function formatCurrency(amount: number) {
  // replacing Arabic thousands seperator with commonly used Persian one; e.g. ۱٬۲۵۰٬۰۰۰ => ۱,۲۵۰,۰۰۰
  const seperatorFixed = tomanFormatter.format(amount).replaceAll('٬', ',')
  return `${seperatorFixed} تومان`
}
