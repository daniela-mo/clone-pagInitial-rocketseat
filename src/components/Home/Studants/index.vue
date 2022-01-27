<template>
  <section class="container">
    <div class="container__studants">
      <div class="container__studants__top">
        <h3>Impulsionamos milhares de devs diariamente</h3>
        <img src="@/assets/boosting.png" alt="" />
      </div>
      <div class="container__studants__bottom">
        <div class="container__studants__bottom__dates">
          <h3>+508 <span>mil</span></h3>
          <div class="container__studants__bottom__dates__border"></div>
          <p>Estudantes impactados por eventos e cursos gratuitos</p>
        </div>
        <div class="container__studants__bottom__dates">
          <h3>+357 <span>mil</span></h3>

          <div class="container__studants__bottom__dates__border"></div>
          <p>Estudantes e parceiros na Plataforma Rocketseat</p>
        </div>
        <div class="container__studants__bottom__dates">
          <h3>+205 <span>mil</span></h3>

          <div class="container__studants__bottom__dates__border"></div>
          <p>Estudantes no canal do Youtube</p>
        </div>
        <div class="container__studants__bottom__dates">
          <h3>+100 <span>mil</span></h3>

          <div class="container__studants__bottom__dates__border"></div>
          <p>Estudantes na comunidade aberta no Discord</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container {
  background: #121214;
  border-bottom: 1px solid rgba(255, 255, 255, 0.123);
  &__studants {
    display: flex;
    width: 80%;
    max-width: 1120px;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 auto;
    &__top {
      width: 100%;
      justify-content: space-between;
      display: flex;
      align-items: center;
      margin-top: 10%;
      h3 {
        width: 550px;
        font-size: 48px;
        color: rgb(226, 223, 223);
      }
      img {
        padding-bottom: 90px;
        width: 190px;
      }
    }
    &__bottom {
      display: flex;
      margin-bottom: 13%;
      justify-content: center;
      &__dates {
        display: flex;
        flex-direction: column;
        margin: 65px 25px 10px 5px;
        width: 250px;
        h3 {
          font-size: 56px;
          font-family: "Roboto", sans-serif;
          color: #04d361;
        }
        span {
          font-size: 56px;
          font-family: "Roboto", sans-serif;
          color: #fff;
        }
        &__border {
          margin-top: 18px;
          width: 220px;
          height: 3px;
          background: var(--purple-gradient);
        }
        p {
          font-size: 18px;
          font-family: "Roboto", sans-serif;
          color: #fff;
          margin-top: 30px;
        }
      }
    }
  }
}
</style>
