<template>
    <section class="about pt-7 pb-7">
        <div class="container">
            <SectionHeading heading="Lidt om os"/>
            <div class="wrapper">
                <div class="about__item box-1" style="background-image: url(~/static/images/montering-img.jpg)">
                <picture>
                    <source srcset="~/assets/images/montering-img.webp" type="image/webp">
                    <source srcset="~/assets/images/montering-img.jpg" type="image/jpeg"> 
                    <img src="~/assets/images/montering-img.jpg" alt="Alt Text!">
                </picture>
                </div>
                <div class="about__item box-2">
                    <img src="~/assets/images/montering-img.jpg" alt="">
                </div>
                <div class="about__item box-3">
                    <img src="~/assets/images/about-box-3.jpg" alt="">
                </div>
                <div class="about__item box-4">
                    <img src="~/assets/images/about-box-4.jpg" alt="">
                </div>
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

    &__item{
        position: relative;
        &:after{
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-image: linear-gradient(to bottom, rgba($black, .5), rgba($black, .9) 90%);
            z-index: 1;
        }

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .box-1{
        grid-column: 1 / 3;
        grid-row: 1 / 3;
        &:after{
            background-image: linear-gradient(to bottom, rgba($black, 0), rgba($black, .9) 90%);
        }
    }

    .box-2{
        grid-column: 3 / 5;
        grid-row: 1 / 1;
    }

    .box-3{
        grid-column: 3 / 4;
        grid-row: 2 / 2;
    }

    .box-4{
        grid-column: 4 / 5;
        grid-row: 2 / 2;
    }

}

</style>

