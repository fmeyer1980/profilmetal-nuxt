<template>
  <div class="layout">
    <TheHeader />
    <nuxt />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'

export default {
  components: {
    TheHeader
  }
}
</script>

<style>

.page-enter-active {
  transition: opacity .3s ease-in;
}

.page-enter {
  opacity: 0;
}

</style>
