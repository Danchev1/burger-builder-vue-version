<template>
  <figure :class="`image ${figureSize}`">
    <Tag :class="'is-success'">
      {{ imgAlt }}
    </Tag>
    <img :src="imgUrl" :alt="imgAlt">
  </figure>
</template>
<script>
import Tag from '@/components/Layout/Tag.vue';

export default {
  name: 'Figure',
  props: {
    figureSize: {
      type: String,
      default: 'is-5by3',
    },
    imgUrl: {
      type: String,
      default: 'https://bulma.io/images/placeholders/1280x960.png',
    },
    imgAlt: {
      type: String,
      default: 'Placeholder image',
    },
  },
  components: {
    Tag,
  },
};
</script>
