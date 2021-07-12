<template>
  <div class="faq-home">
    <div class="faq-home__content">
      <div class="faq-home__content__title">
        <h2>Perguntas Frequentes</h2>
      </div>
      <div class="faq-home__content__list">
        <div
          v-for="(item, index) in itens"
          :key="index"
          class="faq-home__content__list__item"
          type="button"
          @click="setCollapse(item.collapse, index)"
        >
          <h2 class="faq-home__content__list__item__h2">
            {{ item.title }}
            <span>{{ !item.collapse ? "+" : "-" }}</span>
          </h2>
          <div
            :class="
              `faq-home__content__list__item__collapse faq-home__content__list__item__collapse--${
                item.collapse ? 'enable' : 'disabled'
              }`
            "
          >
            <p>{{ item.__description }}</p>
          </div>
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

  mounted() {
    this.init();
  },

  methods: {
    init() {
      const array = [];
      faq.map((item) => {
        item.collpase = false;
        array.push(item);
        return false;
      });
      this.itens = array;
    },

    setCollapse(collapse, index) {
      const array = this.itens;
      if (this.closeToOpen) {
        array.map((item) => {
          item.collpase = true;
          return false;
        });
      }
      array[index].collapse = !array[index].collapse;
      if (collapse) array[index].collapse = false;
      this.itens = [...array];
    },
  },
};
</script>

<style lang="scss">
.faq-home {
  display: flex;
  max-width: 1170px;
  margin: 0 auto;
  width: 100%;
  &__content {
    padding: 80px 0;
    width: 100%;
    &__title {
      padding-bottom: 30px;
      h2 {
        font-family: Inter;
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 39;
        color: #fff;
      }
    }
    &__list {
      width: 100%;
      p {
        font-family: Inter;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 39px;
      }
      &__item {
        width: 100%;
        max-width: 700px;
        cursor: pointer;
        margin: 32px 0;
        &__h2 {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          border-top: 0.5px solid #c4c4c4;
          color: var(--color-white);
          font-style: normal;
          font-weight: normal;
          font-size: 24px;
          line-height: 29px;
          padding: 20px 0;
        }
        span {
          font-size: 22px;
          line-height: 29px;
          color: var(--color-white);
        }
        &__collapse {
          padding-bottom: 32px;

          &--disabled {
            transition: height 0.5s ease-out, display 0.5s;
          }
        }
      }
    }
  }
}
</style>
