<template functional>
  <button class="button">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  inheritAttrs: false,
};
</script>
