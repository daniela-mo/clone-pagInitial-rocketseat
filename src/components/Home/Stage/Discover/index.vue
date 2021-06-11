<template>
  <div class="toolbar__discover">
    <div class="toolbar__discover__buttons">
      <button>
        Para você começar
      </button>
    </div>
    <div class="toolbar__discover__trilhas">
      <img src="@/assets/rockets_purple.png" alt="" />
      <div class="toolbar__discover__trilhas__text">
        <img src="@/assets/rockets_discover.png" alt="" />
        <h3>
          Crie uma base sólida na programação para decolar rumo a desafios
          maiores
        </h3>
        <p>
          São mais de 500 aulas gratuitas para você aprender programação do
          zero, com foco em desenvolvimento web. Você vai encontrar aulas para
          dominar HTML, CSS, JavaScript, HTTP, Forms, Ferramentas, DOM e muito
          mais.
        </p>
        <div class="toolbar__discover__trilhas__text__discover">
          <button to="/discover">COMEÇAR AGORA</button>
          <span>O Discover é 100% gratuito e você pode começar agora</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.toolbar__discover {
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
