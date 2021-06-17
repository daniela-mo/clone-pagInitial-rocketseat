<template>
  <section class="container">
    <div class="container__home">
      <div class="container__home__content">
        <div class="container__home__content__text">
          <div class="container__home__content__text__span">
            <span> Bem-vindo(a) ao futuro</span>
          </div>
          <div class="container__home__content__text__h1">
            <h1>Seu ecossistema para aprender e evoluir em programação</h1>
          </div>
          <div class="container__home__content__text__p">
            <p>
              Embarque no foguete com milhares de devs para aprender
              desenvolvimento web, evoluir de forma contínua e se manter
              relevante no mercado.
            </p>
          </div>

          <button class="container__home__content__text__button">
            EMBARCAR NO FOGUETE
          </button>
        </div>

        <img
          src="@/assets/rocketseat-students.png"
          alt="Estudantes da Rocketseat"
        />
      </div>
    </div>
    <Studants />
    <Stage />
    <Results />
    <Evolution />
    <Enterprise />
    <Content />
    <EventsRocket />
    <Acount />
  </section>
</template>

<script>
import Studants from "@/components/Home/Studants";
import Stage from "@/components/Home/Stage";
import Results from "@/components/Home/Results";
import Evolution from "@/components/Home/Evolution";
import Enterprise from "@/components/Home/Enterprise";
import Content from "@/components/Home/Content";
import EventsRocket from "@/components/Home/EventsRocket";
import Acount from "@/components/Home/Acount";

export default {
  components: {
    Studants,
    Stage,
    Results,
    Evolution,
    Enterprise,
    Content,
    EventsRocket,
    Acount,
  },
};
</script>

<style lang="scss" scoped>
.container__home {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.123);
  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    max-width: 1120px;
    margin: 0 auto;
    &__text {
      display: flex;
      flex-direction: column;
      &__span {
        width: 300px;
        margin-bottom: 45px;
        span {
          font-size: 22px;
          color: #04d35c;
          font-family: "Roboto", sans-serif;
        }
      }
      &__h1 {
        width: 580px;
        h1 {
          font-family: "Roboto", sans-serif;
          font-size: 56px;
          color: #e1e1e6;
          line-height: 100%;
        }
      }
      &__p {
        width: 530px;
        margin-top: 20px;
        p {
          font-family: "Roboto", sans-serif;
          font-size: 20px;
          color: #e1e1e6;
          line-height: 150%;
        }
      }
      &__button {
        margin-top: 40px;
        // padding: 25px 50px;

        border: none;
        border-radius: 5px;
        font-size: 16px;
        font-weight: bold;
        color: #e1e1e6;
        background: #8257e5;
        width: 266px;
        height: 64px;
        font-family: "Roboto", sans-serif;
      }
    }
  }
}
</style>
