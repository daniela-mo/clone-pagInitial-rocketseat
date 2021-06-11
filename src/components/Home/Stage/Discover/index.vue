<template>
  <div class="item-toolbar">
    <div
      v-for="item in cardsHome"
      :key="item.id"
      class="item-toolbar__discover"
    >
      <div class="item-toolbar__discover__buttons">
        <button
          class="item-toolbar__discover__buttons__discover"
          @click="cardsHome(item.id)"
        >
          Para você começar
        </button>
        <button
          class="item-toolbar__discover__buttons__ignite"
          @click="cardsHome(item.id)"
        >
          Para você aperfeição e acelarar
        </button>
      </div>
      <div class="item-toolbar__discover__trilhas">
        <img src="@/assets/rockets_purple.png" alt="" />

        <div class="item-toolbar__discover__trilhas__text">
          <img src="@/assets/rockets_discover.png" alt="" />

          <h3>{{ item.title }}</h3>
          <p>
            {{ item.description }}
          </p>

          <div class="item-toolbar__discover__trilhas__text__button">
            <button to="/discover">COMEÇAR AGORA</button>
            <span>{{ item.span }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardsHome: Array,
  },
};
</script>

<style lang="scss" scoped>
.item-toolbar {
  width: 1120px;
  height: 561px;
  background: #121214;
  display: flex;
  flex-direction: column;
  &__discover {
    &__buttons {
      display: flex;
      &__discover {
        border-top-left-radius: 5px;
        border-top: 1px solid #51515262;
        background: #0f0f0f;
        width: 560px;
        height: 56px;
        color: #e1e1e6;
        font-size: 16px;
        font-weight: bold;

        border:hover {
          border-top: 2px solid #8257e5;
        }
      }
      &__ignite {
        border-top-left-radius: 5px;
        border-top: 1px solid #51515262;
        background: #0f0f0f;
        width: 560px;
        height: 56px;
        color: #e1e1e6;
        font-size: 16px;
        font-weight: bold;

        border:hover {
          border-top: 2px solid #8257e5;
        }
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
        &__button {
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
        // &__ignite
        //   display: flex;
        //   width: 480px;
        //   height: 56px;
        //   flex-direction: row;
        //   align-items: center;
        //   margin-top: 24px;
        //   justify-content: start;
        //   button
        //     width: 180px;
        //     height: 56px;
        //     background: #04d361;
        //     border-radius: 5px;
        //     border: none;
        //     font-family: "Roboto", sans-serif;
        //     font-size: 14px;
        //     color: #ffffff;
        //     font-weight: bold;
        //     margin-right: 40px;
        //
        //   span
        //     width: 199px;
        //     height: 44px;
        //     font-size: 14px;
        //     font-weight: 400;
        //     line-height: 22px;
        //     color: #a8a8b3;
        //     max-width: 199px;
        //
        //
      }
    }
  }
}
</style>
