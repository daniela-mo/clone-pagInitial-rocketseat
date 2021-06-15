<template>
  <div class="educators">
    <div class="educators__content">
      <div class="educators__content__text">
        <div class="educators__content__text__title">
          <span> Com quem você vai aprender</span>
        </div>
        <p>
          <strong>Conheça a Jake e o Mayk,</strong> os educadores dedicados
          especialmente para te guiar nessa missão.
        </p>
      </div>
      <div class="educators__content__cards">
        <div class="educators__content__cards__card">
          <div class="educators__content__cards__card__img">
            <img src="@/assets/mayk.png" />
          </div>
          <span>Mayk Brito</span>
          <h1>Educador</h1>
          <h2>Programador há mais de 12 anos</h2>
          <p>
            Apaixonado por ajudar quem está dando os primeiros passos nesse
            universo. Vem transformando milhares de devs através dos seus
            conteúdos e cursos.
          </p>
          <h3>
            Com uma linguagem fácil de assimilar e simpatia que é marca
            registrada do educador, ele vai te guiar pela jornada do Discover e
            te ajudar a avançar para o próximo nível.
          </h3>
          <div class="educators__content__cards__icons">
            <img src="@/assets/git.png" />
            <img src="@/assets/instagram1.png" />
            <img src="@/assets/youtube1.png" />
          </div>
        </div>
        <div class="educators__content__cards__card">
          <div class="educators__content__cards__card__img">
            <img src="@/assets/jack.png" />
          </div>
          <span>Jakeliny Gracielly</span>
          <h1>Educadora</h1>
          <h2>Programadora há mais de 7 anos</h2>
          <p>
            Facilitadora de hackathons na Shawee e palestrante. Foi reconhecida
            pela Microsoft como Microsoft MVP em desenvolvimento web com foco em
            NodeJS, palestrou em diversos eventos como o The Developers
            Conference.
          </p>
          <h3>
            Tem como missão compartilhar conhecimento, orientar e principalmente
            inspirar mulheres a crescerem na área de tecnologia e
            desenvolvimento.
          </h3>
          <div class="educators__content__cards__icons">
            <img src="@/assets/git.png" />
            <img src="@/assets/instagram1.png" />
            <img src="@/assets/youtube1.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.educators {
  border-top: 1px solid #b6b2b252;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  &__content {
    max-width: 1170px;
    align-items: center;
    justify-content: center;
    display: flex;
    width: 90%;
    margin: 0 auto;
    margin: 130px;
    &__text {
      padding: 0px 30px 37px;
      p {
        font-family: "Roboto", sans-serif;
        font-size: 18px;
        color: #a8a093;
        width: 310px;
        padding-top: 24px;
        margin-left: 15px;
      }
      strong {
        color: #bfbcc3;
      }
      &__title {
        margin: 0px 0px 0px 24px;
        width: 250px;
        span {
          font-family: "Roboto", sans-serif;
          font-size: 48px;
          font-weight: 700;
          color: #e1e1e6;
        }
      }
    }
    &__cards {
      display: flex;
      // flex-direction: column;
      &__card {
        border: #412c17 1px solid;
        border-radius: 7px;
        padding: 0px 30px 37px;
        display: flex;
        flex-direction: column;
        margin-right: 30px;
        background: #1b1726;
        &__img {
          display: flex;
          background: #1b1726;
          // visibility: inherit;
          // position: absolute;
          // inset: 0px;
          // box-sizing: border-box;
          // padding: 0px;
          // border: none;
          // margin: auto;
          // display: block;
          // width: 0px;
          // height: 0px;
          // min-width: 100%;
          // max-width: 100%;
          // min-height: 100%;
          // max-height: 100%;
          // object-fit: cover;
        }

        span {
          font-family: "Roboto", sans-serif;
          font-size: 32px;
          font-weight: 700;
          color: #e1e1e6;
          margin: 0px 0px 20px;
          background: #1b1726;
        }
        h1 {
          font-family: "Roboto", sans-serif;
          font-size: 20px;
          font-weight: normal;
          color: #a8a8b3;
          margin: 0px 0px 30px;
          background: #1b1726;
        }
        h2 {
          font-family: "Roboto", sans-serif;
          font-size: 20px;
          font-weight: 400;
          color: #fd951f;
          background: #1b1726;
        }
        p {
          font-family: "Roboto", sans-serif;
          font-size: 16px;
          color: #d5c4af;
          width: 320px;
          background: #1b1726;
        }
        h3 {
          font-family: "Roboto", sans-serif;
          font-size: 16px;
          font-weight: normal;
          color: #d5c4af;
          width: 320px;
          margin-top: 15px;
          background: #1b1726;
        }
      }
      &__icons {
        background: #1b1726;
        padding-top: 25px;

        img {
          margin-left: 8px;
          background: #101014;
          border: 1px solid#29292e;
          border-radius: 7px;
          padding: 14px;
          background: #29292e;
        }
      }
    }
  }
}
</style>
