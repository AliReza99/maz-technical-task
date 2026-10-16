<script setup lang="ts">
import { NuxtLink } from '#components'

type Variant = 'contained' | 'contained-2' | 'link' | 'outlined' | 'icon'

const props = withDefaults(
  defineProps<{
    variant?: Variant
    to?: string
    type?: 'button' | 'submit' | 'reset'
    as?: 'button' | 'span'
  }>(),
  { variant: 'contained', to: undefined, type: 'button', as: 'button' }
)

const variantClasses: Record<Variant, string> = {
  contained: 'h-10 rounded-xl bg-primary px-4 font-iran-yekan text-xs/6 font-bold text-white',
  'contained-2': 'gap-2 rounded-2xl bg-primary px-4 py-3 font-sans text-sm/4 font-bold text-white',
  link: 'gap-2 font-sans text-[13px]/6 font-medium text-blue-900',
  outlined:
    'h-10 gap-2 rounded-2xl border-[1.5px] border-border px-4 font-iran-yekan text-sm/4 font-bold text-primary',
  icon: 'size-10 shrink-0 rounded-lg border border-primary text-primary',
}
</script>

<template>
  <component
    :is="props.to ? NuxtLink : props.as"
    :to="props.to"
    :type="props.to || props.as !== 'button' ? undefined : props.type"
    :class="variantClasses[props.variant]"
    class="inline-flex items-center justify-center text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary [&_svg]:size-4 [&_svg]:shrink-0"
  >
    <slot />
  </component>
</template>
