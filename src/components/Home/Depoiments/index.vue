<template>
  <div class="home-depoiments">
    <div class="home-depoiments__content">
      <div class="home-depoiments__content__text">
        <h2>Depoimentos</h2>
        <p>Minions ipsum daa baboiii baboiii bee do bee do bee do baboiii.</p>
      </div>
      <div class="home-depoiments__content__carousel">
        <Carousel :commit="commitMap" />
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "./Carousel";
import commit from "@/utils/commit";
export default {
  components: {
    Carousel,
  },

  data: () => ({
    commitMap: [],
  }),
  beforeMount() {
    this.fetch();
  },
  methods: {
    fetch() {
      const commitMap = commit;
      this.commitMap = commitMap;
    },
  },
};
</script>

<style lang="scss" scoped>
.home-depoiments {
  display: flex;
  max-width: 1170px;
  margin: 0 auto;
  width: 100%;
  &__content {
    margin-top: 20px;
    width: 100%;
    &__text {
      width: 320px;

      h2 {
        color: var(--color-white);
        font-family: Inter;
        font-style: bold;
        line-height: 48px;
        font-size: 40px;
      }
      p {
        width: 450px;
        margin-top: 10px;
        font-family: Helvetica;
        font-style: normal;
        line-height: 24px;
        font-size: 24px;
        color: var(--color-light-silver);
      }
    }
    &__carousel {
      display: flex;
      margin-top: 50px;
      width: 100%;
      justify-content: space-between;
      align-items: center;
    }
    &__points {
      width: 52px;
      height: 12px;
    }
  }
  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    &__content {
      &__carousel {
        flex-direction: column;
      }
    }
  }
}
</style>
