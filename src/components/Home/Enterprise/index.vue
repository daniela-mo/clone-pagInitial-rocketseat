<template>
  <section class="container">
    <div class="container__enterprise">
      <div class="container__enterprise__text">
        <h3>Empresas que contratam nossos alunos</h3>
        <p>
          Existe um abismo entre profissionais de programação e o mercado. Nosso
          propósito é construir uma ponte entre vocês através da educação.
        </p>
      </div>
      <div class="container__enterprise__figures">
        <img src="@/assets/stone.png" alt="" />
        <img src="@/assets/avanade.png" alt="" />
        <img src="@/assets/compasso.png" alt="" />
        <img src="@/assets/totvs.png" alt="" />
        <img src="@/assets/accenture.png" alt="" />
        <img src="@/assets/meta.png" alt="" />
        <img src="@/assets/everis.png" alt="" />
        <img src="@/assets/ciet.png" alt="" />
        <img src="@/assets/itau.png" alt="" />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.container {
  background: #121214;
  border-bottom: 1px solid rgba(255, 255, 255, 0.123);
  &__enterprise {
    display: flex;
    max-width: 1120px;
    margin: 0 auto;
    justify-content: center;
    flex-direction: column;
    &__text {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-family: "Roboto", sans-serif;
      padding: 160px 0 75px;

      h3 {
        text-align: center;
        width: 650px;
        font-family: "Roboto", sans-serif;
        font-size: 48px;
        color: #e1e1e6;
      }
      p {
        margin-top: 2%;
        text-align: center;
        font-family: "Roboto", sans-serif;
        width: 650px;
        color: #a8a8b3;
      }
    }
    &__figures {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-wrap: wrap;
      margin-bottom: 80px;
      img {
        margin: 10px 40px 30px 0px;
      }
    }
  }
}
</style>
