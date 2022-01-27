<template>
  <div id="courses" class="item-content">
    <div v-for="item in courses" :key="item.id" class="item-content__card">
      <div class="item-content__card__top">
        <div class="item-content__card__top__text">
          <div class="item-content__card__top__text__tec">
            <h3>{{ item.type }}</h3>
          </div>
          <div class="item-content__card__top__text__course">
            <span>{{ item.name }}</span>
          </div>
        </div>
        <div>
          <img src="@/assets/ilustracao_flutter.svg" />
        </div>
      </div>
      <div class="item-content__card__bottom">
        <div class="item-content__card__bottom__date">
          <span>{{ item.start }} a {{ item.end }}</span>
        </div>
        <div class="item-content__card__bottom__p">
          <p>{{ item.description }}</p>
        </div>
        <div class="item-content__card__bottom__button">
          <router-link
            style="text-decoration:none"
            :to="`/courses/${item.useId}`"
            >IR PARA O CURSO</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    courses: Array,
  },
};
</script>

<style lang="scss">
.item-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1170px;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
}
.item-content__card {
  width: 364px;
  height: 510px;
  background: #212125;
  border-radius: 8px;
  &__top {
    display: flex;
    padding: 20px;
    justify-content: space-between;
    &__text {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      padding-bottom: 20px;
      &__tec {
        width: 80px;
        height: 25px;
        background: #141313;
        border-radius: 2px;
        h3 {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-white);
          width: 80px;
          height: 30px;
          background: #141313;
          border-radius: 2px;
          font-family: Helvetica, sans-serif;
          font-size: 12px;
          line-height: 14px;
        }
      }
      &__course {
        display: flex;
        align-items: flex-end;

        span {
          font-family: Inter;
          font-style: normal;
          font-size: 32px;
          color: var(--color-white);
        }
      }
    }
  }
  &__bottom {
    padding: 0 25px;
    &__date {
      span {
        font-family: Arial, Helvetica, sans-serif;
        font-style: normal;
        font-size: 20px;
        line-height: 150%;
        color: #fff;
      }
    }
    &__p {
      margin-top: 5px;
      p {
        font-family: Helvetica, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 150%;
        color: #bcbcbc;
      }
    }
    &__button {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 40px;
      padding: 10px;
      background: #fcc419;
      width: 154px;
      height: 49px;
      color: #191820;
      font-family: Inter;
      font-weight: 600;
      font-size: 14px;
      border-radius: 8px;
      text-decoration: none;
      border: none;
      router-link {
        color: #191820;
      }
    }
  }
}
</style>
