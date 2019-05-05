<template>
    <section class="section-contact pt-5 pb-5">
        <div class="container">
            <div class="text-content pr-4">
                <div class="h3 mt-0 mb-0">Kan vi hjælpe dig med noget?</div>
                <p class="mt-0 mb-0">Udfyld formularen, eller kontakt os på telefon <a target="_blank" href="">5663 0222</a></p>
            </div>
            <div class="contact-form">
                <form action="">
                    <input type="text" placeholder="Indtast dit navn:">
                    <input type="text" placeholder="Telefonnummer:">
                    <button class="btn" type="submit">Bliv ringet op</button>
                </form>
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

.section-contact{
    background-color: $primary;

    .container{
        display: flex;
        @media (max-width: $screen-md) {
            display: block;
        }
    }

    .text-content{
        flex-shrink: 0;

        a{
            color: currentColor;
            font-weight: 700;
        }
        
    }

    .contact-form{
        flex-shrink: 1;
        flex-grow: 1;

        form{
            display: grid;
            grid-gap: $gutter / 2;
            grid-template-columns: repeat( auto-fit, minmax(170px, 1fr));

            input, button{
                width: 100%;
                border: none;
                height: 5rem;
                padding: 0 3rem;
                display: block;
                background-color: rgba($black, .1);
                &::placeholder {
                    color: rgba($black, .7);
                }
            }

            button{
                background-color: $dark-gray-dark;
                color: $white;
                cursor: pointer;
            }
        }
    }

}

</style>

