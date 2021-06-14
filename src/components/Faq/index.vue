<template>
  <div class="faq">
    <div class="faq-content">
      <div class="faq-content__title">
        <span>Perguntas e respostas mais frequentes</span>
      </div>
      <div class="faq-content__text">
        <div
          v-for="(item, index) in itens"
          :key="index"
          class="item"
          type="button"
          @click="setCollapse(item.collapse, index)"
        >
          <h2 class="faq__content__text">
            {{ item.title }}
            <span>{{ !item.collapse ? "+" : "-" }}</span>
          </h2>
          <div
            :class="
              `item__content item__content--${
                item.collapse ? 'enabled' : 'disabled'
              }`
            "
          >
            <p>
              {{ item.description }}
            </p>
          </div>
          <div class="item__line" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import faq from "@/utils/faq";
export default {
  data: () => ({
    itens: [],
  }),
  watch: {
    collap() {
      this.init();
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const arr = [];
      faq.map((item) => {
        item.collapse = false;
        arr.push(item);
        return false;
      });
      this.itens = arr;
    },
    setCollapse(collapse, index) {
      const arr = this.itens;
      if (this.closeToOpen) {
        arr.map((item) => {
          item.collapse = false;
          return false;
        });
      }
      arr[index].collapse = !arr[index].collapse;
      if (collapse) arr[index].collapse = false;
      this.itens = [...arr];
    },
  },
};
</script>
<style lang="scss" scoped>
.faq {
  border-top: 1px solid #b6b2b252;
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  padding: 160px 0px;

  .faq-content {
    display: flex;
    width: 70%;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    &__title {
      width: 100%;
      span {
        margin-top: 50px;
        font-family: "Roboto", sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 48px;
        line-height: 39px;
        color: #e1e2e6;
        width: 525px;
      }
    }
    &__text {
      width: 100%;
      &__paragrafo {
        display: flex;
        flex-direction: column;
        padding: 20px 0;
        width: 100%;
        &__h1 {
          display: flex;
          justify-content: space-between;
          width: 100%;

          &__title {
            width: 100%;

            span {
              font-size: 24px;
              color: #ffffff;
            }
            p {
              font-size: 16px;
              color: #bcbcbc;
            }
          }
          &__sinal {
            width: 3%;

            // span {
            //   font-size: 24px;
            //   color: #ffffff;
            // }
          }
        }
      }

      h1 {
        font-family: "Roboto", sans-serif;
        font-size: 24px;
        color: #ffffff;
      }
      h2 {
        font-family: "Roboto", sans-serif;
        font-size: 16px;
        color: #ffffff;
      }
    }

    .item {
      width: 100%;
      max-width: 700px;
      cursor: pointer;

      h2 {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 29px;
        color: #e1e2e6;
        margin: 32px 0;
        span {
          width: 3%;
          font-size: 22px;
          line-height: 29px;
          color: #e1e2e6;
        }
      }

      &__content {
        padding-bottom: 32px;

        &--disabled {
          transition: height 0.5s ease-out, display 0.5s;
          transition-delay: 50ms;
          height: 0;
          opacity: 0;
          display: none;
        }

        &--enabled {
          transition: all 0.5s ease;
          height: auto;
          opacity: 1;
        }

        p {
          font-family: "Roboto", sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 150%;
          color: #e1e2e6;
        }
      }
      &__line {
        width: 100%;
        height: 1px;
        background-color: var(--color-light-silver);
      }
    }
  }
}
</style>
