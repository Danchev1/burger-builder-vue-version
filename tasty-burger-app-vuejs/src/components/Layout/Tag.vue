<template functional>
  <span :class="`tag ${data.class}`">
    <slot />
  </span>
</template>

<script>
export default {
  name: 'Tag',
  inheritAttrs: false,
};
</script>
