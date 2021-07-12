<template>
  <div class="item-content">
    <div v-for="item in commit" :key="item.id" class="item-content__carousel">
      <div class="item-content__carousel__content">
        <div>
          <img :src="item.imageURl" />
        </div>
        <div class="item-content__carousel__content__name">
          <h3>{{ item.name }}</h3>
        </div>
        <div class="item-content__carousel__content__text">
          <p>{{ item.description }}</p>
        </div>

        <div class="item-content__carousel__content__text">
          <span>
            {{ item.type }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    commit: Array,
  },
};
</script>

<style lang="scss">
.item-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1170px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.item-content__carousel {
  width: 364px;
  height: 306px;
  background: #212125;
  border-radius: 8px;
  &__content {
    margin: 20px;
    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }
    &__name {
      margin-top: 10px;
      h3 {
        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 150%;
        color: #fff;
      }
    }
    &__text {
      margin-top: 25px;
      p {
        font-family: Helvetica;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 150%;
        color: #bcbcbc;
      }
      span {
        width: 154px;
        height: 49px;
        font-size: 16px;
        line-height: 150%;
        font-family: Helvetica;
        color: #fcc419;
      }
    }
  }
  @media (max-width: 768px) {
    margin-top: 30px;
    width: 464px;
  }
}
</style>
