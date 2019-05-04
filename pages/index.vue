<template>
  <div class="layout">
    <Hero />
    <Categories />
    <Offers />
    <Products />
    <AboutUs />
    <SectionTrustpilot />
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import Categories from '~/components/Categories.vue'
import Offers from '~/components/Offers.vue'
import Products from '~/components/Products.vue'
import AboutUs from '~/components/AboutUs.vue'
import SectionTrustpilot from '~/components/SectionTrustpilot.vue'

export default {
  components: {
    Hero,
    Categories,
    Offers,
    Products,
    AboutUs,
    SectionTrustpilot
  },
  metaInfo: {
    title: 'Welcome to my blog'
  }
}
</script>
