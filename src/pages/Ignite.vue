<template>
  <section class="container">
    <div class="container__ignite">
      <div class="container__ignite__top">
        <div class="container__ignite__top__text">
          <div class="container__ignite__top__text__strong">
            <img src="@/assets/rocket_page-ignite.png" alt="" />
            <strong>Domine uma tecnologia específica</strong>
          </div>
          <h1>Programa para acelerar sua carreira como Dev.</h1>
          <p>
            Criado para te preparar para o mercado, desenvolvendo skills
            técnicas e comportamentais. Evolua e certifique-se em Elixir,
            Flutter, Node.js, ReactJS ou React Native.
          </p>
          <div class="container__ignite__top__text__reserva">
            <router-link
              to="#"
              class="container__ignite__top__text__reserva__router"
            >
              RESERVAR MINHA VAGA
            </router-link>
            <span>
              <strong>Pré-requisito:?</strong> ter uma base sólida no
              desenvolvimento web.
            </span>
          </div>
        </div>
        <img
          src="@/assets/woman-ignite.png"
          class="container__ignite__top__woman"
          alt=""
        />
      </div>
    </div>
    <Alvo />
    <Educator />
  </section>
</template>

<script>
import Alvo from "@/components/Ignite/Alvo";
import Educator from "@/components/Ignite/Educator";
export default {
  components: {
    Alvo,
    Educator,
  },
};
</script>

<style lang="scss" scoped>
.container__ignite {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: var(--background-transparent);
  border-bottom: 1px solid rgba(255, 255, 255, 0.123);

  &__top {
    display: flex;
    align-items: center;
    width: 80%;
    max-width: 1120px;
    margin: 0 auto;
    justify-content: space-between;
    &__text {
      width: 518px;
      margin: 15% 0;
      &__strong {
        display: flex;
        width: 518px;
        align-items: center;
        margin-bottom: 40px;
        strong {
          width: 250px;
          color: var(--green);
          margin-left: 32px;
          font-size: 24px;
          line-height: 34px;
        }
      }
      h1 {
        width: 518px;
        font-size: 56px;
        line-height: 60px;
        max-width: 558px;
        margin-bottom: 24px;
        color: #e1e1e6;
      }
      p {
        width: 458px;
        font-size: 18px;
        color: #e1e1e6;
        margin-bottom: 40px;
      }
      &__reserva {
        display: flex;
        align-items: center;
        &__router {
          width: 214px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 5px;
          text-decoration: none;
          color: var(--background);
          font-size: 16px;
          font-weight: 700;
          background: var(--green);
          margin-right: 40px;
        }
        span {
          font-size: 14px;
          color: #a8a8b3;
          width: 199px;
        }
        strong {
          font-size: 14px;
          color: #e1e1e6;
        }
      }
    }
    &__woman {
      max-width: 100%;
      width: 602px;
      height: 525.73px;
    }
  }
}
</style>
