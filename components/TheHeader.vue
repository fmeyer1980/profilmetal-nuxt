<template>
  <header class="header">
    <div class="header__top">
      <div class="container">

        <div class="trustpilot">
          <img class="trustpilot__logo" src="../assets/images/trustpilot-logo.png" alt="Trustpilot">
          <img class="trustpilot__stars" src="../assets/images/trustpilot-stars.png" alt="Trustpilot stars">
        </div>

        <div class="values">
          <p class="values__item">25 års erfaring med produktion af stålplader</p>
        </div>

        <ul class="top-menu">
          <li><nuxt-link to="/">Om os</nuxt-link></li>
          <li><nuxt-link to="/about">Kundeservice</nuxt-link></li>
          <li><nuxt-link to="/cases">Kontakt</nuxt-link></li>
        </ul>
      </div>
    </div>
    <div class="header__bottom">
      <div class="container">
        <nuxt-link class="logo" to="/"><img src="../assets/images/logo.png" alt="" /></nuxt-link>
        <nav class="nav">
          <div class="nav-scroll">
            <ul class="main-menu">
              <!-- <li><nuxt-link to="/">Forside</nuxt-link></li> -->
              <li><nuxt-link to="/tagplader">Tagplader</nuxt-link></li>
              <li><nuxt-link to="/facadebeklaedning">Facadebeklædning</nuxt-link></li>
              <li><nuxt-link to="/inddaeninger">Inddækninger</nuxt-link></li>
              <li><nuxt-link to="/tilbehor">Tilbehør</nuxt-link></li>
              <li><nuxt-link to="/undertag">Undertag</nuxt-link></li>
              <li><nuxt-link to="/tagrender">Tagrender</nuxt-link></li>
            </ul>
          </div>
        </nav>
        <div class="search">
          <div class="search__input-wrapper">
            <input class="search__input" placeholder="Indtast din søgning her:" type=search>
          </div>
          <button class="search__btn" type="submit"><img src="../assets/images/search-icon.svg" alt=""></button>
        </div>
        <div class="basket">
          <span class="basket__amount">2</span>
          <img src="../assets/images/basket.svg" alt="">
        </div>
      </div>
    </div>
  </header>
</template>

<script>

export default {

}
</script>


<style lang="scss" scoped>
@import '~/assets/css/global.scss';

.header{
  position: relative;
  width: 100%;

  &__top{
    color: $white;
    height: 5rem;
    background-color: darken($dark-gray-dark, 1%);

    .container{
      display: flex;
      align-items: center;
      height: 100%;
      position: relative;
      z-index: 1;
    }

    .trustpilot{
      width: 25%;
      margin-left: 16.5rem;

      &__logo{
        height: 2.4rem;
        margin-right: $gutter / 2;
        
      }

      &__stars{
        height: 2rem;
      }

    }

    .values{
      flex-grow: 1;
      text-align: center;

      &__item{
        margin: 0 0 0 11px;
        position: relative;
        display: inline;
        font-size: 1.5rem;
        font-weight: 500;
        &::before{
          content: "";
          background-image: url('../assets/images/checkmak.svg');
          height: 9px;
          width: 12px;
          position: absolute;
          left: -22px;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }

    .top-menu{
      @include list-style-none;
      display: flex;
      width: 25%;
      justify-content: flex-end;

      li{
        padding-left: 1.5rem;

        a{
          color: inherit;
          font-size: 1.4rem;
          font-weight: 500;
        }

      }
    }

  }

  &__bottom{
    height: 9rem;
    background-color: $light-gray-light;
    color: $dark-gray-dark;

    .container{
      display: flex;
      align-items: center;
      height: 100%;
      position: relative;
    }

    .logo{
      height: 4.5rem;
      width: 17rem;
      flex-shrink: 0;

      img{
        height: 100%;
      }
      
    }

    nav{
      position: relative;
      flex-shrink: 1;
      flex-grow: 1;
      width: 50%;
      &:before{
          position: absolute;
          content: "";
          background: $black;
          width: 100%;
          height: 5rem;
          left: -5rem;
          top: -5rem;
          z-index: 0;
          transform: skewX(35deg);
      }
      &:after{
          position: absolute;
          content: "";
          background-image: linear-gradient(rgba($black, .04), rgba($black, 0));
          width: 100%;
          height: 50rem;
          left: 20.5rem;
          top: 9rem;
          z-index: 1;
          transform: skewX(35deg);
      }
    }

    .nav-scroll{
      width: 100%;
      position: relative;
           
      &:after{
          position: absolute;
          content: "";
          background: $white;
          width: 100%;
          height: 9rem;
          left: 0;
          top: 0;
          z-index: 0;
          transform: skewX(35deg);
          box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.08);
      }
    }

    

    .main-menu{

      @include list-style-none;
      display: flex;
      /* justify-content: space-between; */
      background-color: transparent;
      height: 9rem;
      align-items: center;
      margin: 0 5rem 0 4rem;
      width: 90%;
      overflow-x: scroll;
      scroll-snap-type: x proximity;

      @media (max-width: $screen-lg) {
        margin: 0 4rem 0 3rem;
      }

      &:before{
        position: absolute;
        top: 0;
        right: 4rem;
        content: "";
        width: 5rem;
        height: 9rem;
        background-image: linear-gradient(to right, rgba($white, 0), $white);
        z-index: 2;
      }

      li{
        position: relative;
        padding: 0 1.3em;
        z-index: 1;

        @media (max-width: $screen-lg) {
          padding: 0 1em;
        }

        &:after{
          content: "";
          height: 1.4rem;
          width: 1px;
          background-color: rgba($black, 0.1);
          position: absolute;
          top: 50%;
          right: 0%;
          transform: translateY(-50%);
        }
        &:last-child:after{
          display: none;
        }

        a{
          color: inherit;
          font-weight: 600;
          text-transform: uppercase;
          position: relative;
          font-size: 1.6rem;
          height: 100%;
          z-index: 99;
          @media (max-width: 1024px) {
            font-size: 1.4rem;
          }

          &:after{
            content: "";
            height: 3px;
            width: 0%;
            background-color: $primary;
            position: absolute;
            bottom: -4px;
            left: 1px;
            transition: width .2s ease-in;
            z-index: 0;
            pointer-events: none;
          }
          
          /* &:hover{
            &:after{
              width: 50%;
            }
          } */
        }

        .nuxt-link-exact-active{

          &:after{
            width: 50%;
          }

        }

      }
      
    }

    .search{
      height: 100%;
      margin-right: 0;
      margin-left: auto;
      flex-shrink: 0;
      &:hover{

        .search__input-wrapper, .search__input{
          opacity: 1;
          pointer-events: visible;
        }

        .search__btn{
          /* background-color: $white; */
        }
        
      }

      .search__input-wrapper{
        transform: skewX(35deg);
        background-color: $light-gray-light;
        transition: opacity .2s ease-in;
        width: calc(100% - 33rem);
        position: absolute;
        border: none;
        height: 100%;
        z-index: 999;
        top: 0;
        right: 16rem;
        opacity: 0;
        backface-visibility: hidden;
        pointer-events: none;
      }

      .search__input{
        width: 100%;
        height: 100%;
        padding: 0 8rem;
        transform: skewX(-35deg);
        border: none;
        background-color: transparent;
        font-size: 1.8rem;
        font-weight: 400;
      }

      &__btn{
        height: 100%;
        border: none;
        width: 10rem;
        border-color: rgba($black, .08);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background-color .2s ease-in;
        background-color: $light-gray-light;
      }

    }

    .basket{
      position: relative;
      height: 100%;
      width: 6rem;
      border-left: solid 1px;
      border-color: rgba($black, .08);
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-right: 0;
      flex-shrink: 0;
      cursor: pointer;
      img{
        margin-right: .6rem;
        }

      &__amount{
        position: absolute;
        width: 2rem;
        height: 2rem;
        background-color: $primary;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 1rem;
        color: $light-gray-light;
        font-size: 1.2rem;
        top: 30%;
        right: 0;
        border: solid 2px $light-gray-light;
        
      }
    }


  }

}

</style>

