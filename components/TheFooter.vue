<template>
  <footer class="footer">
    <div class="footer__top pt-5 pb-5">
      <div class="container">
          <div class="footer__box">
              <h3>Kundeservice</h3>
              <ul class="menu-wrapper">
                  <li><nuxt-link to="">Faq</nuxt-link></li>
                  <li><nuxt-link to="">Om levering & afhentning</nuxt-link></li>
                  <li><nuxt-link to="">Monteringsvejledninger</nuxt-link></li>
                  <li><nuxt-link to="">Få et skarpt tilbud</nuxt-link></li>
                  <li><nuxt-link to="">Finansiering</nuxt-link></li>
                  <li><nuxt-link to="">Handelsbetingelser</nuxt-link></li>
                  <li><nuxt-link to="">Oplysning om cookies</nuxt-link></li>
                  <li><nuxt-link to="">Persondatapolitik</nuxt-link></li>
                  <li><nuxt-link to="">Kontakt os</nuxt-link></li>
              </ul>
          </div>
          <div class="footer__box">
              <h3>Produktkategorier</h3>
              <ul class="menu-wrapper">
                  <li><nuxt-link to="">Ståltagplader</nuxt-link></li>
                  <li><nuxt-link to="">Stålfacade</nuxt-link></li>
                  <li><nuxt-link to="">Inddækninger</nuxt-link></li>
                  <li><nuxt-link to="">Tilbehør</nuxt-link></li>
                  <li><nuxt-link to="">Undertag</nuxt-link></li>
                  <li><nuxt-link to="">Tagrender</nuxt-link></li>
              </ul>
          </div>
          <div class="footer__box contact-us">
              <h3>Kontakt os</h3>
              <p>Profilmetal A/S<br/>Skovsøviadukten 3 - 4200 Slagelse</p>
              <p>Damvej 116 - 8471 Sabro</p>
              <p>CVR: 26137063</p>
              <div>Tlf.nr.: <a href="tel:56630222">5663 0222</a></div>
              <div>Mail: <a href="mailto:info@profilmetal.dk">info@profilmetal.dk</a></div>
          </div>
          <div class="footer__box about">
              <h3>Om profilmetal</h3>
              <p>Vi har siden 1994 fremstillet profilerede stålplader på egen fabrik. Det har givet os viden om produktion, materialer og håndtering...</p><br/>
              <ul class="menu-wrapper">
                  <li><nuxt-link to="">Butikker & åbningstider</nuxt-link></li>
                  <li><nuxt-link to="">Produktion</nuxt-link></li>
                  <li><nuxt-link to="">Historie</nuxt-link></li>
              </ul>
              <img class="e-icon" src="https://www.profilmetal.dk/wp-content/uploads/e-maerket.png" alt="e-mærket">
          </div>
      </div>
    </div>
    <div class="footer__bottom pt-3 pb-3">
        <div class="container">
            <img class="" src="https://pngimage.net/wp-content/uploads/2018/05/betalingskort-png-2.png" alt="">
            <p class="opc-7">Alle priser er dagspriser inklusiv moms. De viste pladepriser gælder som udgangspunkt kun ved bestilling online.</p>
        </div>
    </div>
  </footer>
</template>

<script>

export default {

}
</script>


<style lang="scss" scoped>
@import '~/assets/css/global.scss';

.footer{


    .menu-wrapper{
        @include list-style-none;

        li{
            line-height: 2.8;
            border-bottom: solid 1px rgba($black, .04);
            position: relative;
            &:last-child{
                border-bottom: none;
            }
            
            a{
                color: currentColor;
                opacity: .7;
                transition: all .2s ease;
                display: block;
                &:hover{
                    color: $primary;
                    padding-left: 1rem;
                    opacity: 1;
                }
                &:after{
                    content: "";
                    background-image: url('../assets/images/arrow-dark-right.svg');
                    background-size: .5rem;
                    background-repeat: no-repeat;
                    background-position: 50%;
                    height: 12px;
                    width: 12px;
                    position: absolute;
                    right: 1rem;
                    top: 50%;
                    transform: translateY(-50%);
                    opacity: .5;
                }
                
            }
        }
        
    }

    &__top{
        background-color: $light-gray-light;

        .container{
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: $gutter * 3;
            @media (max-width: $screen-lg) {
                grid-gap: $gutter * 1.5;
            }
        }

        h3{
            font-size: 2rem;
            /* text-transform: none; */
            margin-bottom: 1.5em;
            position: relative;
            display: inline-block;
            &:after{
            content: "";
            height: 3px;
            width: 40%;
            background-color: currentColor;
            position: absolute;
            bottom: -1.2rem;
            left: 1px;
            transition: width .2s ease-in;
            z-index: 0;
            pointer-events: none;
            opacity: .85;
          }
        }

        .contact-us{
            
            a{
                display: inline-block;
                color: $primary;
            }
        }

        .about{
            .e-icon{
                height: 5rem;
                margin-top: 2rem;
            }
        }

    }

    &__bottom{
        background-color: $light-gray-dark;

        .container{
            display: flex;
            align-items: center;
        }
        p{
            margin: 0;
            border-left: solid 1px rgba($black, .05);
            padding-left: 3rem;
        }

        img{
            height: 2.5rem;
            margin-right: 3rem;
        }

    }

}

</style>

