<template functional>
  <button :class="`button ${data.class}`">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  inheritAttrs: false,
};
</script>
