<template>
  <div class="home-page">
    <Header :pageTitle="pageTitle" />
    <main>

      <section class="burger-filters">
        <Carousel
          :perPage="4"
          :perPageCustom="[[560, 6], [1024, 6]]"
          :paginationEnabled="false">
          <slide v-for="type in meatTypes" :key="type">
            <Button :class="'is-pulled-right has-text-weight-medium is-primary has-text-black'">
              {{ type }}
            </Button>
          </slide>
        </Carousel>
      </section>
      <section class="section">
        <div class="container">
          <div class="columns">
            <div class="column">
              <Card />
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <h2>Special Offers</h2>
        <Carousel
          :perPage="4"
          :perPageCustom="[[768, 6], [1024, 6]]"
          :paginationEnabled="false">
          <slide v-for="offer in specialOffers" :key="offer.id">
            <Figure :imgAlt="offer.name" :imgUrl="offer.imgUrl" />
          </slide>
        </Carousel>
      </section>
      <section class="section order-history">
        <div class="history-item">
          <Card />
        </div>
      </section>

    </main>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import { Carousel, Slide } from 'vue-carousel';
import Header from '@/components/Layout/Header.vue';
import Button from '@/components/Layout/Button.vue';
import Card from '@/components/Layout/Card.vue';
import Figure from '@/components/Layout/Figure.vue';

export default {
  name: 'Home',
  components: {
    Card,
    Button,
    Header,
    Carousel,
    Slide,
    Figure,
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
    ...mapGetters('burgers', [
      'meatTypes',
      'specialOffers',
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
