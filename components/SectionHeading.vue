<template>
    <div class="section-heading mb-7">
        <h2 class="title h3" v-html="heading"></h2>
        <!-- <p class="opc-7" v-html="text"></p> -->
    </div>
</template>

<script>

export default {
    name: 'SectionHeading',
    props: {
        heading: String, 
        text: String
    },

}
</script>


<style lang="scss" scoped>

.section-heading{
  text-align: center;

  .title{
    position: relative;
    font-weight: 700;
    margin: 0;
    &:after{
      content: "";
      width: 5rem;
      height: 3px;
      background-color: currentColor;
      position: absolute;
      left: 50%;
      bottom: -1.5rem;
      transform: translate(-50%);
    }
  } 
}

</style>