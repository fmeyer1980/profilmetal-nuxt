<template>
    <section class="about pt-9 pb-9">
        <div class="container">
            <SectionHeading heading="Lidt om os"/>
            <div class="wrapper">
                <nuxt-link class="about__item box-1" to="/">
                    <div class="content-wrapper">
                        <h3 class="title">Stålplader & inddækninger<br/>fra egen fabrik siden 1994</h3>
                        <span class="icon"></span>
                    </div>
                    <picture>
                        <source srcset="~/assets/images/about-img.webp" type="image/webp">
                        <source srcset="~/assets/images/about-img.jpg" type="image/jpeg"> 
                        <img src="~/assets/images/about-img.jpg" alt="Stålplader og inddækninger">
                    </picture>
                </nuxt-link>
                <nuxt-link class="about__item box-2" to="/">
                    <div class="content-wrapper">
                        <h3 class="title">Montering &<br/>vejledning</h3>
                        <span class="icon"></span>
                    </div>
                    <img src="~/assets/images/montering-img.jpg" alt="">
                </nuxt-link>
                <nuxt-link class="about__item box-3" to="/">
                    <div class="content-wrapper">
                        <h3 class="title">Bliv inspiraret med nyt tag</h3>
                        <span class="icon"></span>
                    </div>
                    <img src="~/assets/images/about-box-3.jpg" alt="">
                </nuxt-link>
                <nuxt-link class="about__item box-4" to="/">
                    <div class="content-wrapper">
                        <h3 class="title">Derfor skal du vælge os</h3>
                        <span class="icon"></span>
                    </div>
                    <img src="~/assets/images/about-box-4.jpg" alt="">
                </nuxt-link>
            </div>
        </div>
    </section>
</template>

<script>
import SectionHeading from '~/components/SectionHeading.vue'

export default {
    components: {
        SectionHeading
    }

}
</script>


<style lang="scss" scoped>
@import '~/assets/css/global.scss';

.about{
    background-color: $dark-gray-dark;
    color: $white;

    .wrapper{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 35rem);
        grid-gap: 0;
        
    }

    .about__item:hover:before{
        /* background-color: rgba($primary, .95); */
        opacity: 0;
    }
    .about__item:hover:after{
        /* background-color: rgba($primary, .95); */
        opacity: 1;
    }

    .wrapper:hover .about__item:not(:hover){
        opacity: .3;
    }

    &__item{
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        padding: 4rem;
        color: currentColor;
        transition: opacity .2s ease-in;
        overflow: hidden;

        &:hover{
            color: $black;

            .content-wrapper{
                span{
                    background-color: $dark-gray-dark;
                }
            }
        }


        &:after, &:before{
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            /* background-color: rgba($black, .6); */
            z-index: 1;
            transition: all .2s ease-in;
        }

        &:before{
            background-image: linear-gradient(to bottom, rgba($black, .1), rgba($black, 1));
        }

        &:after{
            background-image: linear-gradient(to bottom, rgba($primary, .9), rgba($primary, 1));
            opacity: 0;
        }
        

        .content-wrapper{
            position: relative;
            z-index: 2;
            display: flex;
            align-items: flex-end;


            .title{
                flex-shrink: 1;
                flex-grow: 1;
                margin: 0;
                line-height: 120%;
                transition: color .2s ease-in;
            }
            span{
                width: 5.6rem;
                height: 5.6rem;
                background-color: $primary;
                flex-shrink: 0;
                flex-grow: 0;
                margin-left: 2rem;
                background-image: url('../assets/images/arrow-light-right.svg');
                background-repeat: no-repeat;
                background-position: 50%;
                background-size: 1rem;
                transition: background-color .2s ease-in;
            }
        }

        img{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;

        }
    }

    .box-1{
        grid-column: 1 / 3;
        grid-row: 1 / 3;
    }

    .box-2{
        grid-column: 3 / 5;
        grid-row: 1 / 1;
        &:before{
            background-image: linear-gradient(to bottom, rgba($black, .5), rgba($black, 1));
        }
    }

    .box-3{
        grid-column: 3 / 4;
        grid-row: 2 / 2;
        &:before{
           background-image: linear-gradient(to bottom, rgba($black, .5), rgba($black, 1));
        }
        
    }

    .box-4{
        grid-column: 4 / 5;
        grid-row: 2 / 2;
    }

}

</style>

