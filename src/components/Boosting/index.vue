<template>
  <div class="boosting">
    <div class="boosting__content">
      <div class="boosting__content__img">
        <img src="@/assets/boosting.png" />
      </div>
      <div class="boosting__content__text">
        <div class="boosting__content__text__title">
          <h2>Programas</h2>
          <p>Discover</p>
          <p>Ignite</p>
          <p>Conteúdo</p>
        </div>
        <div class="boosting__content__text__title">
          <h2>Sobre</h2>
          <p>A Rocketseat</p>
          <p>Direitos autorais</p>
          <p>Termos de uso</p>
          <p>Políticas de privacidade</p>
        </div>
        <div class="boosting__content__text__title">
          <h2>Dúvidas</h2>
          <p>Central de ajuda</p>
        </div>
      </div>
      <!-- <div class="boosting__content__h3">
        <h3>Rocketseat 2021 Todos os direitos reservados</h3>
      </div> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.boosting {
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  // padding: 380px 0px;
  &__content {
    display: flex;
    max-width: 1170px;
    width: 100%;
    margin: 0 auto;
    border-top: 1px solid #b6b2b252;
    padding: 80px 0px;
    &__img {
      img {
        width: 256px;
        height: 80.69px;
      }
    }

    &__text {
      display: flex;

      &__title {
        margin-left: 150px;
        h2 {
          font-family: "Roboto", sans-serif;
          font-size: 16px;
          color: #fff;
        }
        p {
          margin-top: 10px;
          font-family: "Roboto", sans-serif;
          font-size: 16px;
          color: #e1e2e6;
        }
      }
    }
    &__h3 {
      margin-left: 15px;
      font-family: "Roboto", sans-serif;
      font-size: 16px;
      color: #e1e2e6;
    }
  }
}
</style>
