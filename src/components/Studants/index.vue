<template>
  <section class="container">
    <div class="studants">
      <div class="studants__top">
        <h3>Impulsionamos milhares de devs diariamente</h3>
        <img src="@/assets/boosting.png" alt="" />
      </div>
      <div class="studants__bottom">
        <div class="studants__bottom__dates">
          <h3>+508 <span>mil</span></h3>

          <div class="studants__bottom__dates__border"></div>
          <p>Estudantes impactados por eventos e cursos gratuitos</p>
        </div>
        <div class="studants__bottom__dates">
          <h3>+357 <span>mil</span></h3>

          <div class="studants__bottom__dates__border"></div>
          <p>Estudantes e parceiros na Plataforma Rocketseat</p>
        </div>
        <div class="studants__bottom__dates">
          <h3>+205 <span>mil</span></h3>

          <div class="studants__bottom__dates__border"></div>
          <p>Estudantes no canal do Youtube</p>
        </div>
        <div class="studants__bottom__dates">
          <h3>+100 <span>mil</span></h3>

          <div class="studants__bottom__dates__border"></div>
          <p>Estudantes na comunidade aberta no Discord</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.studants {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      width: 650px;
      font-size: 56px;
      color: #fff;
    }
    img {
      width: 250px;
    }
  }
  &__bottom {
    display: flex;
    &__dates {
      display: flex;
      width: 300px;
      flex-direction: column;
      margin: 10px 20px;
      h3 {
        font-size: 56px;
        color: #04d361;
      }
      span {
        font-size: 56px;
        color: #fff;
      }
      p {
        font-size: 16px;
        color: #fff;
      }
      &__border {
        width: 100%;
        height: 3px;
        background: var(--primary-gradient-left);
      }
    }
  }
}
</style>
