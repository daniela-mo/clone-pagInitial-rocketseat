<template>
  <div class="cards">
    <div class="cards__content">
      <div class="cards__content__text">
        <h2>O que você vai aprender</h2>
        <div class="cards__content__text__paragrafo">
          <p>
            Você vai aprender programação do zero através de uma metodologia mão
            na massa e com foco no desenvolvimento web para te ajudar a
            construir uma base sólida em programação.
          </p>
        </div>
      </div>
      <div class="cards__content__components">
        <Cards :cursos="cursosMap" />
      </div>
    </div>
  </div>
</template>
<script>
import Cards from "./Cards";
import cursos from "@/utils/cursos";

export default {
  components: {
    Cards,
  },
  data: () => ({
    cursosMap: [],
  }),
  beforeMount() {
    this.fetchInit();
  },
  methods: {
    fetchInit() {
      const cursosMap = cursos;
      this.cursosMap = cursosMap;
    },
  },
};
</script>
<style lang="scss" scoped>
.cards {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #b6b2b252;
  margin-top: 170px;
  &__content {
    max-width: 1170px;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin: 0 auto;
    &__text {
      padding: 120px 0px;
      display: flex;
      h2 {
        font-family: "Roboto", sans-serif;
        font-size: 48px;
        color: #e1e1e6;
      }
      p {
        font-family: "Roboto", sans-serif;
        font-size: 16px;
        color: #e1e1e6;
        margin-left: 150px;
        width: 540px;
      }
    }
  }
}
</style>
