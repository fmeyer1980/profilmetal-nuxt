<template>
  <div class="layout">
    <TheHeader />
    <nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style>

.page-enter-active, .page-leave-active {
  transition: opacity .2s ease;
}
.page-enter, .page-leave-to {
  opacity: 0;
}

</style>
