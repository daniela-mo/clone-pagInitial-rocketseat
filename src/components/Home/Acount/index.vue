<template>
  <section class="container">
    <div class="container__acount">
      <div class="container__acount__img">
        <img src="@/assets/acount.png" alt="" />
      </div>
      <div class="container__acount__text">
        <h3>Mais de <strong>357 mil </strong> devs já se conectaram.</h3>
        <p>
          Comece a avançar agora mesmo na direção dos seus objetivos e alcance o
          seu lugar como dev.
        </p>
        <button>CRIAR MINHA CONTA</button>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.container {
  background: var(--darker-gradient-right);
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.122);
  margin: 0 auto;
  &__acount {
    display: flex;
    max-width: 1120px;
    justify-content: space-between;
    margin: 90px 0;
    &__img {
      margin: 20px 50px 50px 0;
    }
    &__text {
      display: flex;
      flex-direction: column;
      margin: 90px 0 50px 80px;

      h3 {
        font-size: 48px;
        font-family: "Roboto", sans-serif;
        color: #fff;
        display: flex;
        flex-wrap: wrap;
        width: 497px;
        height: 108px;
      }
      strong {
        margin-left: 15px;
        font-size: 48px;
        font-family: "Roboto", sans-serif;
        color: #04d361;
      }
      p {
        margin: 35px 0;
        color: #e1e1e6;
        line-height: 26px;
        font-size: 16px;
        width: 430px;
        font-family: "Roboto", sans-serif;
      }
      button {
        width: 240px;
        height: 64px;
        font-size: 16px;
        background: #8257e5;
        border: none;
        font-family: "Roboto", sans-serif;
        border-radius: 5px;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
}
</style>
