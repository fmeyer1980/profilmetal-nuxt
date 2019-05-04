<template>
    <section class="top-banner" :style="{backgroundImage: 'url(' + imagUrl + ')'}">
        <div class="content-wrapper">
            <div class="content">
                <h1 v-html="heading"></h1>
                <p v-html="text"></p>
            </div>
        </div>
    </section>
</template>

<script>
const IMG_PATH = "/images/";

export default {
    name: 'top-banner',
    props: {
        heading: String, 
        text: String,
        image: String
    },

    computed: { 
    imagUrl: function(){
      return `${IMG_PATH}${this.image}`;
    }
  }

}
</script>


<style lang="scss" scoped>
@import '~/assets/css/global.scss';

.top-banner{
    height: 20rem;
    color: $white;
    position: relative;
    &:after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba($black, .7);
        z-index: 1;
    }

    .content-wrapper {
        @include container;
        position: relative;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .content{
        text-align: center;

        h1{
            margin: 0;
            text-transform: uppercase;
            font-size: 3rem;
            
        }

        p{
            margin-top: .3em;
            margin-bottom: 0;
        }

    }




}

</style>

