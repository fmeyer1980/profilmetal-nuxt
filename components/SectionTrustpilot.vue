<template>
    <section class="trustpilot pt-8 pb-8">
            <div class="trustpilot-wrapper">
                <div class="left">
                    <img class="icon" src="~/assets/images/trustpilot-icon-big.svg" alt="">
                    <div class="content">
                        <div class="heading h3">Andbefalet på trustpilot af kunderne</div>
                        <div class="text opc-7">Baseret på <a href="">1.032 anmeldelser</a></div>
                        <img src="../assets/images/trustpilot-stars.png" alt="Trustpilot stars">
                    </div>
                </div>
                <div class="right">
                    gdd
                </div>
            </div>
    </section>
</template>

<script>

export default {

}
</script>


<style lang="scss" scoped>
@import '~/assets/css/global.scss';

.trustpilot{
    background-color: $dark-gray-light;
    color: $white;
    

    &-wrapper{
        @include container;
        height: 100%;
        display: flex;
    }

    .left{
        display: flex;
        width: 40%;
        margin-right: 5rem;


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

}

</style>

