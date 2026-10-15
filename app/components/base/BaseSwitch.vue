<script setup lang="ts">
defineOptions({ inheritAttrs: false })

withDefaults(
  defineProps<{
    label?: string
  }>(),
  { label: undefined }
)

const model = defineModel<boolean>({ default: false })
</script>

<template>
  <label class="flex items-center gap-4">
    <span v-if="label" class="grow text-start text-sm/4 font-medium text-gray-700">{{
      label
    }}</span>
    <button
      v-bind="$attrs"
      type="button"
      role="switch"
      dir="ltr"
      :aria-checked="model"
      class="inline-flex h-4 w-8 shrink-0 cursor-pointer items-center rounded-md p-[1.78px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      :class="model ? 'bg-primary' : 'bg-gray-200'"
      @click="model = !model"
    >
      <svg
        viewBox="0 0 13 13"
        fill="none"
        aria-hidden="true"
        class="size-[12.5px] shrink-0 transition-transform"
        :class="model && 'translate-x-[15.94px]'"
      >
        <rect
          x="0.533333"
          y="0.533333"
          width="11.3778"
          height="11.3778"
          rx="4.46667"
          fill="white"
          stroke="#E6F9F4"
          stroke-width="1.06667"
        />
        <rect
          x="3.50049"
          y="3.49695"
          width="1.93203"
          height="1.93141"
          rx="0.965704"
          fill="#99D1FF"
        />
        <rect
          x="7.01465"
          y="3.4978"
          width="1.93203"
          height="1.93141"
          rx="0.965704"
          fill="#99D1FF"
        />
        <rect
          x="3.50098"
          y="7.00818"
          width="1.93203"
          height="1.93141"
          rx="0.965704"
          fill="#99D1FF"
        />
        <rect
          x="7.01465"
          y="7.00818"
          width="1.93203"
          height="1.93141"
          rx="0.965704"
          fill="#99D1FF"
        />
      </svg>
    </button>
  </label>
</template>
