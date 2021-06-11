<template>
  <section class="container">
    <div class="container__stage">
      <div class="container__stage__text">
        <div class="container__stage__text__title">
          <h3>Encontre a melhor etapa para você estudar programação</h3>
        </div>
        <div class="container__stage__text__border"></div>
        <p>
          Aulas para você começar, se aperfeiçoar e continuar evoluindo sempre.
        </p>
      </div>
      <Discover />
      <Ignite />
    </div>
  </section>
</template>

<script>
import Discover from "./Discover";
import Ignite from "./Ignite";
export default {
  components: {
    Discover,
    Ignite,
  },
  data: () => ({}),
};
</script>
<!-- 
        <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js"></script>
        <script src="http://netdna.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.js"></script>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.9/summernote.js"></script> -->

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
        width: 684px;
        h3 {
          font-size: 48px;
          line-height: 54px;
          color: #e1e1e6;
        }
      }
      &__border {
        border-top: 1px solid rgba(255, 255, 255, 0.123);
        width: 50px;
        margin-right: 50px;
      }
      p {
        padding-top: 24px;
        width: 288px;
        color: #a8a8b3;
      }
    }
  }
}
</style>
