<template>
  <div class="home-benefits">
    <div class="home-benefits__content">
      <div class="home-benefits__content__description">
        <div class="home-benefits__content__description__img">
          <img src="@/assets/users.svg" />
        </div>

        <div class="home-benefits__content__description__text">
          <span>Totalmente gratuito</span>
          <p>Instrutores especialistas e dedicados</p>
        </div>
      </div>
      <div class="home-benefits__content__description">
        <div class="home-benefits__content__description__img">
          <img src="@/assets/file-text.svg" />
        </div>

        <div class="home-benefits__content__description__text">
          <span>A partir de Abril</span>
          <p>Aulas planejadas para que você estude e pratique</p>
        </div>
      </div>
      <div class="home-benefits__content__description">
        <div class="home-benefits__content__description__img">
          <img src="@/assets/calendar.svg" />
        </div>

        <div class="home-benefits__content__description__text">
          <span>Apoio da comunidade</span>
          <p>12 meses de acesso completo a todas as aulas</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-benefits {
  display: flex;
  max-width: 1170px;
  width: 100%;
  padding: 100px 0;
  margin: 0 auto;
  &__content {
    display: flex;
    &__description {
      display: flex;
      width: 390px;
      align-items: center;
      &__img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 72px;
        height: 72px;
        background: #141313;
        border-radius: 50px;
        margin-right: 30px;
        img {
          width: 32px;
          height: 32px;
        }
      }
      &__text {
        width: 190px;
        flex-wrap: wrap;
        line-height: 200%;

        span {
          font-family: Inter;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          line-height: 150%;
          color: #fff;
        }
        p {
          font-family: Helvetica;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 150%;
          color: #bcbcbc;
        }
      }
    }
  }
}
</style>
