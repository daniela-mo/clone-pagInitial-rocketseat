<template>
  <div class="depositions">
    <div class="depositions__content">
      <!-- <div class="depositions__content__text"> -->
        <div class="depositions__content__text__title">
          <h1>O que dizem devs que decolaram com o Discover</h1>
        </div>
        <div class="depositions__content__text__depoimentos">
          <p class="depositions__content__text__depoimentos__p">
            “O conteúdo do Discover é além do básico e totalmente gratuito.
            Quando alguém me pergunta o que aprender ou onde, a resposta é
            automática: https://app.rocketseat.com.br/discover”
          </p>
        </div>
        <div class="depositions__content__text__img">
          <img src="@/assets/luis-fernando.png" />
        </div>
        <div class="depositions__content__text__insta">
          <span>Luis Fernando</span>
          <h2>@luisfernandomgrs</h2>
        </div>
        <div class="depositions__content__text__depoimentos">
          <p class="depositions__content__text__depoimentos__p">
            “O conteúdo do Discover é além do básico e totalmente gratuito.
            Quando alguém me pergunta o que aprender ou onde, a resposta é
            automática: https://app.rocketseat.com.br/discover”
          </p>
        </div>
        <div class="depositions__content__text">
          <div class="depositions__content__text__img">
            <img src="@/assets/juan-pablo.png" />
          </div>
          <div class="depositions__content__text__insta">
            <span>Juan Pablo</span>
            <h2>@_ojuanpablo</h2>
          </div>
        </div>
        <div class="depositions__content__text">
          <p class="depositions__content__text__depoimentos__p">
            “O Discover em união com a maratona Discover são simplesmente
            incríveis, muito conteúdo, além de te guiar a como ter disciplina
            nos estudos, te mostrando que só você pode mudar e evoluir como
            dev.”
          </p>
        </div>
        <div class="depositions__content__text">
          <div class="depositions__content__text__img">
            <img src="@/assets/ariadne-liranco.png" />
          </div>
          <div class="depositions__content__text__insta">
            <span>Ariadne Liranço</span>
            <h2>@aricandidolira</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.depositions {
  border-top: 1px solid #b6b2b252;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  &__content {
    max-width: 1170px;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin: 0 auto;
    padding: 160px 0px;
    &__text {
      display: flex;
      flex-direction: column;
      &__title {
        font-family: "Roboto", sans-serif;
        font-size: 32px;
        font-weight: 700;
        color: #e1e1e6;
        width: 780px;
      }
      &__depoimentos {
        display: flex;
        &__p {
          font-family: "Roboto", sans-serif;
          font-size: 16px;
          font-style: normal;
          line-height: 26px;
          color: #e1e1e6;
          margin-top: 75px;

          // margin-left: 45px;
          width: 313px;
        }
      }

      &__img {
        display: flex;
        margin-top: 22px;
        img {
          border: 1px solid #fff;
          border-radius: 50px;
        }
      }
      &__insta {
        display: flex;
        flex-direction: column;
        margin-left: 15px;
        line-height: 26px;
        span {
          font-family: "Roboto", sans-serif;
          font-size: 16px;
          font-weight: bold;
          color: #e1e1e6;
        }
        h2 {
          font-family: "Roboto", sans-serif;
          font-size: 16px;
          font-weight: normal;
          color: #a8a4a4;
        }
      }
    }
  }
}
</style>
