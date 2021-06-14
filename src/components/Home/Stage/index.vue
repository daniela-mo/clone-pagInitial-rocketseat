<template>
  <section class="container">
    <div class="container__stage">
      <div class="container__stage__text">
        <div class="container__stage__text__title">
          <h3>Encontre a melhor etapa para você estudar programação</h3>
        </div>
        <div>
          <div class="container__stage__text__border"></div>
          <p>
            Aulas para você começar, se aperfeiçoar e continuar evoluindo
            sempre.
          </p>
        </div>
      </div>
      <div class="container__stage__text__border__cards">
        <Content />
      </div>
    </div>
  </section>
</template>

<script>
import Content from "./Content";

export default {
  components: {
    Content,
  },
};
</script>

<style lang="scss" scoped>
.container {
  background: var(--darker-gradient-right);
  background: var(--darker-gradient-left);
  &__stage {
    display: flex;
    width: 80%;
    max-width: 1120px;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 auto;
    padding: 160px 0;
    &__text {
      display: flex;
      width: 1120px;
      margin-bottom: 80px;
      justify-content: space-between;
      &__title {
        width: 700px;
        margin-right: 20px;
        h3 {
          font-size: 48px;
          line-height: 54px;
          color: #e1e1e6;
        }
      }
      &__border {
        display: flex;
        align-items: flex-end;
        margin-right: 30px;
        width: 50px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.185);
      }
      p {
        padding-top: 24px;
        line-height: 165%;
        width: 290px;
        color: #a8a8b3;
      }
    }
    &__cards {
      display: flex;
      margin-top: 50px;
      width: 100%;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
