<template>
    <section class="hero">
        <div class="container container--960">
            <div class="hero__content">
                <img class="bagde" src="../assets/images/bagde.png" alt="">
                <div class="text">
                    <h1>Danske stålplader direkte fra fabrikken</h1>
                    <p>Undgå fordyrende mellemled, og spar penge</p>
                </div>
                
            </div>
        </div>
        <img class="hero__bg-image" src="../assets/images/hero-img.jpg" />
    </section>
</template>

<script>

export default {
    

}
</script>


<style lang="scss" scoped>
@import '~/assets/css/global.scss';

.hero{
    position: relative;
    height: 60rem;
    color: $white;
    width: 100%;
    background-color: $dark-gray-dark;
    &:after{
        position: absolute;
        content: "";
        background-image: linear-gradient(rgba($dark-gray-dark, 0), $dark-gray-dark);
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 0;
    }


    .container{
      display: flex;
      align-items: center;
      height: 100%;
      position: relative;
      z-index: 1;
    }


    &__content{
        display: flex;
        align-items: center;
        margin-top: -10rem;

        .text{

            h1{
                font-size: 6rem;
                margin: 0;
                animation: FadeFromRight .5s ease;
                backface-visibility: hidden;
            }
            p{
                font-size: 2.6rem;
                margin: 0;
                font-weight: 400;
                animation: FadeFromLeft .3s ease;
                animation-delay: .2s;
                animation-fill-mode: backwards;
                backface-visibility: hidden;
            }
        }

        .bagde{
            width: auto;
            height: 22rem;
            margin-right: 6rem;
            flex-shrink: 0;
            animation: FadeIn .5s ease;
            animation-delay: .6s;
            animation-fill-mode: backwards;
            backface-visibility: hidden;
        }
    }

    &__bg-image{
        position: absolute;
        top: 0;
        left: 0;
        object-fit: cover;
        width: 100%;
        height: 100%;
        z-index: 0;
    }

}

</style>

