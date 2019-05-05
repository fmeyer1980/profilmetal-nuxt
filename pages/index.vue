<template>
  <div class="page">
    <Hero />
    <Categories />
    <Offers />
    <Products />
    <AboutUs />
    <!-- <SectionTrustpilot /> -->
    <SectionContact />
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import Categories from '~/components/Categories.vue'
import Offers from '~/components/Offers.vue'
import Products from '~/components/Products.vue'
import AboutUs from '~/components/AboutUs.vue'
import SectionTrustpilot from '~/components/SectionTrustpilot.vue'
import SectionContact from '~/components/SectionContact.vue'

export default {
  components: {
    Hero,
    Categories,
    Offers,
    Products,
    AboutUs,
    SectionTrustpilot,
    SectionContact
  },
  metaInfo: {
    title: 'Welcome to my blog'
  }
}
</script>
