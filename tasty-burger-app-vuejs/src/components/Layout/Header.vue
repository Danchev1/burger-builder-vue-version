<template>
  <header class="has-background-primary has-text-black">
    <h1 class="has-text-centered">{{ pageTitle }}</h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    pageTitle: {
      type: String,
      required: true,
    },
  },
};
</script>
