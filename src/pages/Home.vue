<template>
  <section class="container">
    <div class="home">
      <div class="home__content">
        <div class="home__content__text">
          <div class="home__content__text__span">
            <span> Bem-vindo(a) ao futuro</span>
          </div>
          <div class="home__content__text__h1">
            <h1>Seu ecossistema para aprender e evoluir em programação</h1>
          </div>
          <div class="home__content__text__p">
            <p>
              Embarque no foguete com milhares de devs para aprender
              desenvolvimento web, evoluir de forma contínua e se manter
              relevante no mercado.
            </p>
          </div>

          <button class="home__content__text__button">
            EMBARCAR NO FOGUETE
          </button>
        </div>
        <div class="home__content__img">
          <img
            src="@/assets/rocketseat-students.png"
            alt="Estudantes da Rocketseat"
          />
        </div>
      </div>
    </div>
    <Studants />
  </section>
</template>

<script>
import Studants from "@/components/Studants";
export default {
  components: {
    Studants,
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    img {
      width: 850px;
      height: 950px;
      position: relative;
    }
    &__text {
      margin-right: 10px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      &__span {
        width: 600px;
        margin-bottom: 45px;
        span {
          font-size: 25px;
          color: #04d35c;
          font-family: "Roboto", sans-serif;
        }
      }
      &__h1 {
        width: 800px;
        h1 {
          font-family: "Roboto", sans-serif;
          font-size: 70px;
          color: #e1e1e6;
          line-height: 100%;
        }
      }
      &__p {
        width: 590px;
        margin-top: 20px;
        p {
          font-family: "Roboto", sans-serif;
          font-size: 22px;
          color: #e1e1e6;
          line-height: 150%;
        }
      }
      &__button {
        margin-top: 40px;
        padding: 25px 50px;
        border: none;
        border-radius: 5px;
        font-size: 20px;
        font-weight: bold;
        color: #e1e1e6;
        background: #8257e5;
        font-family: "Roboto", sans-serif;
      }
    }
  }
}
</style>
