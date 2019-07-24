<template>
  <div class="card">
    <div class="card-image">
      <Figure />
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-5">John Smith</p>
        </div>
      </div>

      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus nec iaculis mauris.
      </div>
    </div>
  </div>
</template>

<script>
import Figure from '@/components/Layout/Figure.vue';

export default {
  name: 'Card',
  components: {
    Figure,
  },
};
</script>
