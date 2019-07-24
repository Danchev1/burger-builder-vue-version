<template functional>
  <div class="card last-ordered">
    <div class="card-image">
      <figure class="image is-5by3">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
      </figure>
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
export default {
  name: 'Card',
  inheritAttrs: false,
};
</script>
