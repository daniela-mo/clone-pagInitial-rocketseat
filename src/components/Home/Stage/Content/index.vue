<template>
  <div class="item-toolbar">
    <div class="item-toolbar__buttons">
      <button
        class="item-toolbar__buttons__discover"
        @click="show = true"
        :style="{
          background: show ? '#202024' : '#09090a',
          borderTop: !show ? '#202024' : '2px solid #8257e5',
          borderTopLeftRadius: '6px',
        }"
      >
        Para você começar
      </button>
      <button
        class="item-toolbar__buttons__ignite"
        @click="show = false"
        :style="{
          background: !show ? '#202024' : '#09090a',
          borderTop: show ? '#202024' : '2px solid #8257e5',
          borderTopRightRadius: '6px',
        }"
      >
        Para você aperfeiçoar e acelarar
      </button>
    </div>
    <div v-if="show" class="item-toolbar__trilhas">
      <img src="@/assets/rockets_purple.png" />

      <div class="item-toolbar__trilhas__text">
        <img src="@/assets/rockets_discover.png" />

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

        <div class="item-toolbar__trilhas__text__purple">
          <button to="/discover">COMEÇAR AGORA</button>
          <span>O Discover é 100% gratuito e você pode começar agora</span>
        </div>
      </div>
    </div>

    <div v-if="!show" class="item-toolbar__trilhas">
      <img src="@/assets/rockets_green.png" />

      <div class="item-toolbar__trilhas__text">
        <img src="@/assets/rockets_ignite.png" />

        <h3>Avance na carreira aprendendo uma tecnologia específica</h3>
        <p>
          O Ignite é um programa de aceleração profissional com treinamentos
          certificados e reconhecidos pelo mercado. Domine Elixir, Flutter,
          Node.js, React ou React Native e prepare-se para as melhores
          oportunidades.
        </p>

        <div class="item-toolbar__trilhas__text__green">
          <button to="/ignite">SAIBA MAIS</button>
          <span
            ><strong>Pré-requisito:</strong> ter uma base sólida no
            desenvolvimento web.</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: true,
  }),
};
</script>

<style lang="scss" scoped>
.item-toolbar {
  width: 1120px;
  height: 561px;
  background: #121214;
  display: flex;
  flex-direction: column;
  margin-bottom: 55px;
  &__buttons {
    display: flex;
    border: 1px solid #51515262;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    &__discover {
      background: #09090a;
      width: 560px;
      height: 56px;
      color: #e1e1e6;
      font-size: 16px;
      border: none;
      outline: none;
    }
    &__ignite {
      background: #09090a;
      width: 560px;
      height: 56px;
      color: #e1e1e6;
      font-size: 16px;
      outline: none;
      border: none;
    }
  }
  &__trilhas {
    display: flex;
    width: 1120px;
    height: 561px;
    padding: 56px 72px 80px;
    justify-content: space-between;
    background: #121214;
    border: 1px solid #29292e;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

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
      &__purple {
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
      &__green {
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
          color: #000;
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
        strong {
          color: white;
        }
      }
    }
  }
}
</style>
