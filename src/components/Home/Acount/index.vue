<template>
  <section class="container">
    <div class="container__acount">
      <div class="container__acount__img">
        <img src="@/assets/acount.png" alt="" />
      </div>
      <div class="container__acount__text">
        <h3>
          Mais de 357 mil devs já se conectaram.
        </h3>

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
  background: var(--darker-gradient-left);
  border-bottom: 1px solid rgba(255, 255, 255, 0.122);
  margin-top: 8%;
  &__acount {
    display: flex;
    max-width: 1120px;
    margin: 0 auto;
    justify-content: space-between;
    &__img {
      margin-top: 5%;
    }
    &__text {
      display: flex;
      width: 494px;
      height: 288;
      flex-direction: column;
      margin-top: 10%;
      h3 {
        margin-bottom: 24px;
        color: #e1e1e6;
        font-size: 48px;
        font-family: "Roboto", sans-serif;
      }
      p {
        margin-bottom: 40px;
        color: #e1e1e6;
        font-size: 16px;
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
      }
    }
  }
}
</style>
