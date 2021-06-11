<template>
  <div class="toolbar">
    <div class="toolbar__buttons">
      <button>
        Para você se aperfeiçoar e acelerar
      </button>
    </div>
    <div class="toolbar__trilhas">
      <img src="@/assets/rockets_green.png" alt="" />
      <div class="toolbar__trilhas__text">
        <img src="@/assets/rockets_ignite.png" alt="" />
        <h3>
          Avance na carreira aprendendo uma tecnologia específica
        </h3>
        <p>
          O Ignite é um programa de aceleração profissional com treinamentos
          certificados e reconhecidos pelo mercado. Domine Elixir, Flutter,
          Node.js, React ou React Native e prepare-se para as melhores
          oportunidades.
        </p>
        <div class="toolbar__trilhas__text__ignite">
          <button to="/ignite">SAIBA MAIS</button>
          <span
            >Pré-requisito: ter uma base sólida no desenvolvimento web.</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.toolbar {
  width: 1120px;
  height: 561px;
  background: #121214;
  display: flex;
  flex-direction: column;
  &__buttons {
    display: flex;
    button {
      border-top-left-radius: 5px;
      border-top: 2px solid #8257e5;
      background: #202024;
      width: 560px;
      height: 56px;
      color: #e1e1e6;
      font-size: 16px;
      font-weight: bold;
    }
  }
  &__trilhas {
    display: flex;
    width: 1120px;
    height: 561px;
    padding: 56px 72px 80px;
    justify-content: space-between;
    background: #121214;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-bottom: 1px solid #29292e;
    border-right: 1px solid #29292e;
    border-left: 1px solid #29292e;
    img {
      margin-bottom: 40px;
    }
    &__text {
      width: 480px;
      height: 405px;
      h3 {
        font-size: 32px;
        line-height: 36px;
        margin-bottom: 24px;
        max-width: 378px;
        color: #e1e1e6;
      }
      p {
        color: #e1e1e6;
        font-size: 16px;
      }
      &__discover {
        display: flex;
        width: 480px;
        height: 56px;
        flex-direction: row;
        align-items: center;
        margin-top: 24px;
        justify-content: start;
        button {
          width: 180px;
          height: 56px;
          background: #8257e5;
          border-radius: 5px;
          border: none;
          font-family: "Roboto", sans-serif;
          font-size: 14px;
          color: #ffffff;
          font-weight: bold;
          margin-right: 40px;
        }
        span {
          width: 199px;
          height: 44px;
          font-size: 14px;
          font-weight: 400;
          line-height: 22px;
          color: #a8a8b3;
          max-width: 199px;
        }
      }
      &__ignite {
        display: flex;
        width: 480px;
        height: 56px;
        flex-direction: row;
        align-items: center;
        margin-top: 24px;
        justify-content: start;
        button {
          width: 180px;
          height: 56px;
          background: #04d361;
          border-radius: 5px;
          border: none;
          font-family: "Roboto", sans-serif;
          font-size: 14px;
          color: #ffffff;
          font-weight: bold;
          margin-right: 40px;
        }
        span {
          width: 199px;
          height: 44px;
          font-size: 14px;
          font-weight: 400;
          line-height: 22px;
          color: #a8a8b3;
          max-width: 199px;
        }
      }
    }
  }
}
</style>
