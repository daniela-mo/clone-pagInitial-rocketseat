<template>
  <div class="connect">
    <div class="connect__content">
      <div class="connect__content__img">
        <img src="@/assets/boneco.png" />
      </div>
      <div class="connect__content__text">
        <div class="connect__content__text__title">
          <span>Mais de <strong> 357 mil</strong> já se conectaram.</span>
        </div>
        <p>
          Comece a avançar agora mesmo na direção dos seus objetivos e alcance o
          seu lugar como dev.
        </p>
        <button class="connect__content__text__criar">CRIAR MINHA CONTA</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.connect {
  border-top: 1px solid #b6b2b252;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 105px 0px;
  &__content {
    display: flex;
    width: 90%;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    &__text {
      width: 390px;
      &__title {
        font-family: "Roboto", sans-serif;
        font-size: 48px;
        font-weight: 700;
        margin: 0px 0px 24px;
        color: #e1e1e6;

        strong {
          color: #04d361;
        }
      }
      p {
        font-family: "Roboto", sans-serif;
        font-size: 16px;
        color: #e1e1e6;
      }
      &__criar {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 64px;
        width: 240px;
        font-family: "Roboto", sans-serif;
        font-size: 16px;
        color: #fff;
        background: #8257e5;
        border-radius: 7px;
        border: none;
        margin-top: 30px;
      }
    }
  }
}
</style>
