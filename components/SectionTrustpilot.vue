<template>
    <section class="trustpilot pt-8 pb-8">
            <div class="trustpilot-wrapper">
                <div class="left">
                    <img class="icon" src="~/assets/images/trustpilot-icon-big.svg" alt="">
                    <div class="content">
                        <div class="heading h3">Andbefalet på trustpilot af kunderne</div>
                        <div class="text opc-7">Baseret på <a target="_blank" href="https://dk.trustpilot.com/review/www.profilmetal.dk?utm_medium=trustbox&utm_source=Carousel">1.032 anmeldelser</a></div>
                        <img src="../assets/images/trustpilot-stars.png" alt="Trustpilot stars">
                    </div>
                </div>
                <div class="right">
                    <carousel :perPageCustom="[[320, 1], [1200, 2]]" :navigationEnabled="true">
                        <slide>
                            <div class="item">
                                <div class="item__top">
                                    <p class="heading h4">Leveret til aftalt tid</p>
                                    <img src="../assets/images/trustpilot-stars.png" alt="Trustpilot stars">
                                </div>
                                <p class="text opc-7">Leveret til aftalt tid, og rigtig god oplevelse med kunde service, jeg havde fåe...</p>
                                <ul>
                                    <li>Erling</li>
                                    <li>28 timer siden</li>
                                </ul>
                            </div>
                        </slide>
                        <slide>
                            <div class="item">
                                <div class="item__top">
                                    <p class="heading h4">Leveret til aftalt tid</p>
                                    <img src="../assets/images/trustpilot-stars.png" alt="Trustpilot stars">
                                </div>
                                <p class="text opc-7">Leveret til aftalt tid, og rigtig god oplevelse med kunde service, jeg havde fåe...</p>
                                <ul>
                                    <li>Erling</li>
                                    <li>28 timer siden</li>
                                </ul>
                            </div>
                        </slide>
                        <slide>
                            <div class="item">
                                <div class="item__top">
                                    <p class="heading h4">Leveret til aftalt tid</p>
                                    <img src="../assets/images/trustpilot-stars.png" alt="Trustpilot stars">
                                </div>
                                <p class="text opc-7">Leveret til aftalt tid, og rigtig god oplevelse med kunde service, jeg havde fåe...</p>
                                <ul>
                                    <li>Erling</li>
                                    <li>28 timer siden</li>
                                </ul>
                            </div>
                        </slide>
                    </carousel>
                </div>
            </div>
    </section>
</template>

<script>

export default {

}
</script>

<style lang="scss">
@import '~/assets/css/global.scss';

.trustpilot{

     .VueCarousel{
        width: calc(100% - 14rem);

        &-wrapper{
            
           
        }

        &-pagination{
            display: none !important;
        }

       
        &-navigation{
            height: 100%;
            position: absolute;
            top: 0;
            right: -14rem;
            width: 12rem;
            display: flex;

            &--disabled{
                background-color: $dark-gray-light !important;
                opacity: .6 !important;
                
                &:after{
                    opacity: .3;
                }
            }

            &-button{
                position: relative;
                width: 50% !important;
                height: 6rem !important;
                background-color: $primary;
                margin: 0 !important;
                padding: 0 !important;
                border-radius: 0;
                opacity: 1;
                overflow: hidden;
                text-indent: 40rem;
                top: 50%;
                left: auto;
                transform: translateY(-50%);
                background-repeat: no-repeat;
                background-position: 50%;
                background-size: 1rem;
            }

            &-prev{
                background-image: url('../assets/images/arrow-light.svg');
            }

            &-next{
                background-image: url('../assets/images/arrow-light-right.svg');
                
            }

            
        }

        &-slide{
            width: 100%;
            padding-right: 4rem;
        }

        .item{
            border-left: solid 1px rgba($white, .05);
            padding-left: 4rem;
            width: 100%;
        }
    }
}

</style>



<style lang="scss" scoped>
@import '~/assets/css/global.scss';


    

.trustpilot{
    background-color: #232323;
    color: $white;
    

    &-wrapper{
        @include container;
        height: 100%;
        display: flex;
        align-items: flex-start;
    }

    .left{
        display: flex;
        width: 35%;
        margin-right: 5rem;
        height: 13rem;
        @media (max-width: $screen-lg) {
            width: 50%;
        }

        .icon{
            margin-right: $gutter;
            height: 100%;
        }

        .content{
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .heading{
                margin: 0;
                margin-bottom: .3em;
            }

            .text{
                margin-bottom: 1em;

                a{
                    color: currentColor;
                    border-bottom: solid 1px currentColor;
                }
            }

            img{
                width: 13rem;
                height: auto
            }
        }
    }

    .right{
        width: 65%;
        flex-grow: 1;
        @media (max-width: $screen-lg) {
            width: 50%;
        }

    

        .item{

            &__top{
                display: flex;
                align-items: center;
                /* @media (max-width: $screen-lg) {
                    display: block;
                    align-items: flex-start;
                } */

                .heading{
                    margin: 0;
                    text-transform: none;
                }

                img{
                    height: 2rem;
                    margin-left: 1.5rem;
                    /* @media (max-width: $screen-lg) {
                        margin-left: 0;
                        margin-top: 1em;
                    } */
                }
            }

            ul{
                @include list-style-none;
                display: flex;
                position: relative;
                margin-top: 1.5rem;

                li {
                    padding-right: 2rem;
                    &:after{
                        content: "";
                        width: 1px;
                        height: 50%;
                        background-color: currentColor;
                        margin-left: 1.5rem;
                        display: inline-block;
                        opacity: .1;
                    }

                    &:last-child:after{
                        display: none;
                    }
                }
            }

           
        }
    }

}

</style>

