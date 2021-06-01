<template>
  <div class="container">
    <div class="studants">
      <div class="studants__content">
        <div class="studants__content__titulo">
          <h2>Impulsionamos milhares de devs diariamente</h2>
          <img src="@/assets/boosting.png" alt="" />
        </div>
        <div class="studants__content__text">
          <ul class="studants__content__text__ul">
            <li class="studants__content__text__ul__li">
              <div class="studants__content__text__ul__li__numbers">
                <span>+508</span>
                <h3>mil</h3>
              </div>
              <div class="studants__content__text__ul__li__border"></div>
              <div class="studants__content__text__ul__li__p">
                <p>Estudantes impactados por eventos e cursos gratuitos</p>
              </div>
            </li>
            <li class="studants__content__text__ul__li">
              <div class="studants__content__text__ul__li__numbers">
                <span>+357</span>
                <h3>mil</h3>
              </div>
              <div class="studants__content__text__ul__li__border"></div>
              <div class="studants__content__text__ul__li__p">
                <p>Estudantes e parceiros na Plataforma Rocketseat</p>
              </div>
            </li>
            <li class="studants__content__text__ul__li">
              <div class="studants__content__text__ul__li__numbers">
                <span>+205</span>
                <h3>mil</h3>
              </div>
              <div class="studants__content__text__ul__li__border"></div>
              <div class="studants__content__text__ul__li__p">
                <p>Estudantes no canal do Youtube</p>
              </div>
            </li>
            <li class="studants__content__text__ul__li">
              <div class="studants__content__text__ul__li__numbers">
                <span>+100</span>
                <h3>mil</h3>
              </div>
              <div class="studants__content__text__ul__li__border"></div>
              <div class="studants__content__text__ul__li__p">
                <p>Estudantes na comunidade aberta no Discord</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.studants {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: #121214;
  border-top: #e1e1e617 1px solid;
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    &__titulo {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      h2 {
        width: 650px;
        font-size: 56px;
        color: #fff;
      }
      img {
        width: 200px;
        height: 100px;
      }
    }
    &__text {
      display: flex;
      // justify-content: center;
      // align-items: center;
      &__ul {
        display: flex;
        &__li {
          display: flex;
          width: 300px;
          flex-direction: column;
          justify-content: center;
          margin-right: 40px;
          &__numbers {
            display: flex;
            font-size: 56px;
            font-weight: bold;

            span {
              color: #04d361;
            }
            h3 {
              color: #fff;
              font-size: 56px;
            }
          }
          &__border {
            width: 100%;
            height: 3px;
            background: var(--primary-gradient-left);
            margin: 15px 0;
          }
          &__p {
            font-size: 18px;
            line-height: 28px;
          }
        }
      }
    }
  }
}
</style>
