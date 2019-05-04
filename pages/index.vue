<template>
  <div class="layout">
    <Hero />
    <Categories />
    <Offers />
    <Products />
    <AboutUs />
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import Categories from '~/components/Categories.vue'
import Offers from '~/components/Offers.vue'
import Products from '~/components/Products.vue'
import AboutUs from '~/components/AboutUs.vue'

export default {
  components: {
    Hero,
    Categories,
    Offers,
    Products,
    AboutUs
  },
  metaInfo: {
    title: 'Welcome to my blog'
  }
}
</script>

<style lang="scss">

</style>
