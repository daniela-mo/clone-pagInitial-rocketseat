<template>
  <section class="container">
    <div class="container__evolution">
      <div class="container__evolution__top">
        <div class="container__evolution__top__title">
          Método desenhado para acelerar a sua evolução
        </div>
        <div class="container__evolution__top__text">
          Combinamos 3 pilares para você conquistar experiência, dominar as
          ferramentas e saber se posicionar profissionalmente
        </div>
      </div>
      <div class="container__evolution__methods">
        <div class="container__evolution__methods__card">
          <img src="@/assets/foco.png" alt="" />
          <!-- <img src="@/assets/arrow.png" alt="" /> -->
          <h3>Foco</h3>
          <p>
            Programação é um universo infinito, logo ter foco é essencial. Nós
            vamos direto ao ponto no que realmente importa para você dominar as
            ferramentas, não apenas conhecê-las.
          </p>
        </div>
        <div class="container__evolution__methods__card">
          <img src="@/assets/pratica.png" alt="" />
          <!-- <img src="@/assets/arrow.png" alt="" /> -->
          <h3>Prática</h3>
          <p>
            A programação é uma disciplina prática. São as horas de código que
            vão te preparar e dar a experiência necessária para tomar as
            melhores decisões no mundo real.
          </p>
        </div>
        <div class="container__evolution__methods__card">
          <img src="@/assets/grupo.png" alt="" />
          <!-- <img src="@/assets/arrow.png" alt="" /> -->
          <h3>Grupo</h3>
          <p>
            A conexão entre Devs impulsiona seu repertório técnico, suas
            habilidades comportamentais e sua rede de contatos. Além de ajudar a
            assimilar e fixar todo aprendizado.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container {
  border-bottom: 1px solid rgba(255, 255, 255, 0.123);
  background: var(--darker-gradient-right);
  &__evolution {
    display: flex;
    max-width: 1120px;
    margin: 0 auto;
    flex-direction: column;
    &__top {
      display: flex;
      margin: 15% 0 8% 0;
      justify-content: space-between;
      &__title {
        font-size: 48px;
        line-height: 54px;
        color: #e1e1e6;
      }
      &__text {
        color: #a8a8b3;
      }
    }
    &__methods {
      display: flex;

      &__card {
        display: flex;
        flex-direction: column;
        width: 351.98px;
        height: 387.94px;
        border: 1px solid #9999a13b;
        padding: 32px 52px 32px 24px;
        margin-right: 30px;
        margin-bottom: 10%;
        border-radius: 5px;
        img {
          width: 103px;
          height: 90px;
          margin: 0 24px 40px 0;
        }
        h3 {
          font-size: 32px;
          color: #e1e1e6;
          margin-bottom: 8px;
        }
        p {
          margin-top: 40px;
          color: #a8a8b3;
          line-height: 150%;
        }
      }
    }
  }
}
</style>
