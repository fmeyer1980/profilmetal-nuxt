<template>
<div class="page">
  <TopBanner heading="Nye og brugte Tagplader" text="Find dine tagplader her." image="hero-img.jpg" />
    <main>
      <h1>Tagplader</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
    </main>
    
</div>
</template>

<script>
import TopBanner from '~/components/TopBanner.vue'

export default {
  head() {
    title: "Tagplader"
  },
 
  components: {
    TopBanner
  }
}
</script>
