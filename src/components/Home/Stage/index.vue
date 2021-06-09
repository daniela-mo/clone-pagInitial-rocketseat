<template>
  <section class="container">
    <div class="container__stage">
      <div class="container__stage__title">
        <h3>Encontre a melhor etapa para você estudar programação</h3>
      </div>
      <div class="container__stage__toolbar">
        <div class="container__stage__toolbar__buttons">
          <button class="container__stage__toolbar__buttons__discover">
            Para você começar
          </button>
          <button class="container__stage__toolbar__buttons__ignite">
            Para você se aperfeiçoar e acelerar
          </button>
        </div>
        <div class="container__stage__toolbar__trilhas">
          <img src="@/assets/foguetes.png" alt="" />

          <div class="container__stage__toolbar__trilhas__text">
            <img src="@/assets/rocketseat-circle.png" alt="" />
            <h3>
              Crie uma base sólida na programação para decolar rumo a desafios
              maiores
            </h3>
            <p>
              São mais de 500 aulas gratuitas para você aprender programação do
              zero, com foco em desenvolvimento web. Você vai encontrar aulas
              para dominar HTML, CSS, JavaScript, HTTP, Forms, Ferramentas, DOM
              e muito mais.
            </p>
            <div class="container__stage__toolbar__trilhas__text__router">
              <button to="/discover">COMEÇAR AGORA</button>
              <span>O Discover é 100% gratuito e você pode começar agora</span>
            </div>
          </div>
        </div>
        <!-- <div class="container__stage__toolbar__ignite">
            <link href="" />
          <link href="" />
            <ul class="">
              <li class="">
                <a class="" href="" data-toggle="">
                  <i class=""></i> Versão Mobile
                  <div class=""></div>
                  <div class=""></div>
                </a>
              </li>
            </ul>
          </div> 
        </div>-->
      </div>
    </div>
  </section>
</template>

<!-- 
        <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js"></script>
        <script src="http://netdna.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.js"></script>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.9/summernote.js"></script> -->

<style lang="scss" scoped>
.container {
  background: var(--darker-gradient-right);
  background: var(--darker-gradient-left);
  &__stage {
    display: flex;
    width: 80%;
    max-width: 1120px;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 auto;
    &__title {
      width: 684px;
      height: 108px;
      margin-bottom: 80px;
      h3 {
        font-size: 48px;
        line-height: 54px;
        color: #e1e1e6;
      }
    }
    &__toolbar {
      width: 1120px;
      height: 561px;
      background: #121214;
      display: flex;
      flex-direction: column;
      &__buttons {
        display: flex;
        &__discover {
          border-top-left-radius: 5px;
          border: unset;
          border-top: 2px solid #8257e5;
          background: #202024;
          width: 560px;
          height: 56px;
          color: #e1e1e6;
          font-size: 16px;
          font-weight: bold;
        }
        &__ignite {
          border-radius: 5px;
          border: unset;
          border: 1px solid #39393b;
          background: #121214;
          width: 560px;
          height: 56px;
          color: #a8a8b3;
          font-size: 16px;
        }
      }
      &__trilhas {
        display: flex;
        width: 1120px;
        height: 561px;
        padding: 56px 72px 80px;
        justify-content: space-between;
        border-top: 2px solid #39393b;
        img {
          margin-bottom: 40px;
        }
        &__text {
          width: 480px;
          height: 405px;
          h3 {
            font-size: 32px;
            line-height: 36px;
            margin-bottom: 24px;
            max-width: 378px;
            color: #e1e1e6;
          }
          p {
            color: #e1e1e6;
            font-size: 16px;
          }
          &__router {
            display: flex;
            width: 480px;
            height: 56px;
            flex-direction: row;
            align-items: center;
            margin-top: 24px;
            justify-content: start;
            button {
              width: 180px;
              height: 56px;
              background: #8257e5;
              border-radius: 5px;
              border: none;
              font-family: "Roboto", sans-serif;
              font-size: 14px;
              color: #ffffff;
              font-weight: bold;
              margin-right: 40px;
            }
            span {
              width: 199px;
              height: 44px;
              font-size: 14px;
              font-weight: 400;
              line-height: 22px;
              color: #a8a8b3;
              max-width: 199px;
            }
          }
        }
      }
    }
  }
}
</style>
