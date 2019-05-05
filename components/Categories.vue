<template>
    <section class="categories">
        <div class="container">
            <carousel data-name="MySlideName">
                <slide>
                    <div class="categories__item">
                        <img class="categories__item__image" src="~/assets/images/category-img-1.jpg" />
                        <div class="categories__item__content">
                            <h2 class="heading h3">Ståltagplader</h2>
                            <p class="opc-7 mt-0 mb-2">Klassiske ståltagplader i forskellige varianter</p>
                            <!-- <Btn btnType="primary" text="Køb nu" /> -->
                            <g-link class="btn btn--primary" to="/">Køb nu</g-link>
                            <g-link class="btn btn--secondary" to="/">læs mere</g-link>
                        </div>
                    </div>
                </slide>
                <slide>
                    <div class="categories__item">
                        <img class="categories__item__image" src="~/assets/images/category-img-2.jpg" />
                        <div class="categories__item__content">
                            <h2 class="heading h3">Inddækninger</h2>
                            <p class="opc-7 mt-0 mb-2">Standard- og specialinddækninger til tag…</p>
                            <g-link class="btn btn--primary" to="/">Køb nu</g-link>
                            <g-link class="btn btn--secondary" to="/">læs mere</g-link>
                        </div>
                    </div>
                </slide>
                <slide>
                    <div class="categories__item">
                        <img class="categories__item__image" src="~/assets/images/category-img-3.jpg" />
                        <div class="categories__item__content">
                            <h2 class="heading h3">Stålfacade</h2>
                            <p class="opc-7 mt-0 mb-2">Beklæd og beskyt facaden med stærkt stål…</p>
                            <g-link class="btn btn--primary" to="/">Køb nu</g-link>
                            <g-link class="btn btn--secondary" to="/">læs mere</g-link>
                        </div>
                    </div>
                </slide>
                <slide>
                    <div class="categories__item">
                        <img class="categories__item__image" src="~/assets/images/category-img-1.jpg" />
                        <div class="categories__item__content">
                            <h2 class="heading h3">Ståltagplader</h2>
                            <p class="opc-7 mt-0 mb-2">Klassiske ståltagplader i forskellige varianter</p>
                            <g-link class="btn btn--primary" to="/">Køb nu</g-link>
                            <g-link class="btn btn--secondary" to="/">læs mere</g-link>
                        </div>
                    </div>
                </slide>
            </carousel>
        </div>
    </section>
</template>



<style lang="scss">
@import '~/assets/css/global.scss';

.categories{

    > div{
        position: relative;
        z-index: 2;
    }
   
    .VueCarousel{
        width: calc(100% - 14.1rem);

        .VueCarousel-pagination{
            display: none;
        }

        .VueCarousel-navigation{
            height: 26rem;
            position: absolute;
            top: 0;
            right: -14rem;
            width: 14rem;
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
                height: 100% !important;
                background-color: $primary;
                margin: 0 !important;
                padding: 0 !important;
                border-radius: 0;
                opacity: 1;
                overflow: hidden;
                text-indent: 40rem;
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
    }

}


</style>


<style lang="scss" scoped>
@import '~/assets/css/global.scss';
.container{
    margin-top: -10rem;
}

.categories{
  background-color: $dark-gray-dark;
  color: $white;
  padding-bottom: 9rem;

  &__item{
      width: 100%;
      padding-right: $gutter;
      padding-bottom: 1px;

      img{
          width: 100%;
          height: 26rem;
          object-fit: cover;
      }

      &__content{

          .heading{
              text-transform: none;
          }

          p{
              font-size: 1.8rem;
          }

          .btn{
            margin-right: $gutter / 2;

            &--secondary{
                opacity: .5;
                &:hover{
                    opacity: 1;
                }
            }
          }

          
      }
      
  }

}

</style>

