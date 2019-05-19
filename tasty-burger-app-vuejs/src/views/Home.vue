<template>
  <div class="home-screen">
    <Header :pageTitle="pageTitle" />
    <main>
      <Carousel :perPage="4" :perPageCustom="[[768, 6], [1024, 6]]" :paginationEnabled="false">
        <slide>
          <Button>Cheese</Button>
        </slide>
        <slide>
          <Button>Chicken</Button>
        </slide>
        <slide>
          <Button>Beef</Button>
        </slide>
        <slide>
          <Button>Cheese</Button>
        </slide>
        <slide>
          <Button>Tuna</Button>
        </slide>
        <slide>
          <Button>Vegan</Button>
        </slide>
      </Carousel>
      <section>
        <Card />
      </section>
      <section>
        <h2>Special Offers</h2>
        <Carousel :perPage="4" :perPageCustom="[[768, 6], [1024, 6]]" :paginationEnabled="false">
          <slide>
            <Button>Cheese</Button>
          </slide>
          <slide>
            <Button>Chicken</Button>
          </slide>
          <slide>
            <Button>Beef</Button>
          </slide>
          <slide>
            <Button>Cheese</Button>
          </slide>
          <slide>
            <Button>Tuna</Button>
          </slide>
          <slide>
            <Button>Vegan</Button>
          </slide>
        </Carousel>
      </section>
      <section class="order-history">
        <div class="history-item">
          <Card />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { Carousel, Slide } from 'vue-carousel';
import Header from '@/components/Layout/Header.vue';
import Button from '@/components/Layout/Button.vue';
import Card from '@/components/Layout/Card.vue';

export default {
  name: 'Home',
  components: {
    Card,
    Button,
    Header,
    Carousel,
    Slide,
  },
  data() {
    return {
      pageTitle: 'Tastyburger',
    };
  },
  computed: {
    ...mapState('burgers', [
      'burgers',
    ]),
  },
  methods: {
    ...mapActions('burgers', [
      'getBurgers',
    ]),
  },
  created() {
    this.getBurgers();
  },
};
</script>
