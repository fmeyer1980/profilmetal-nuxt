<template>
    <section class="about pt-7 pb-7">
        <div class="container">
            <SectionHeading heading="Lidt om os"/>
            <div class="wrapper">
                <div class="about__item">
                    <img src="~/assets/images/about-img.jpg" alt="">
                </div>
                <!-- <div class="about__item">
                    <img src="~/assets/images/montering-img.jpg" alt="">
                </div>
                <div class="about__item">
                    <img src="~/assets/images/about-img.jpg" alt="">
                </div>
                <div class="about__item">
                    <img src="~/assets/images/about-img.jpg" alt="">
                </div> -->
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
        grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
    }

}

</style>

