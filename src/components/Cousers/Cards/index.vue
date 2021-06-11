<template>
  <div id="card" class="item-content">
    <div v-for="item in cursos" :key="item.id" class="card-item">
      <div class="card-item__content-card">
        <div class="card-item__content-card__topo">
          <div class="card-item__content-card__topo__itens">
            <div class="card-item__content-card__topo__img">
              <img src="@/assets/image.png" />
            </div>
            <div class="card-item__content-card__topo__itens__box-one">
              <span>{{ item.useID }} </span>
            </div>
            <div class="card-item__content-card__topo__itens__linear">
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
        <div class="card-item__content-card__button">
          <h1>{{ item.name }}</h1>
          <!-- <h1>{{ item.type }} a {{ item.start }}</h1> -->

          <router-link to="">COMEÇAR AGORA</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    cursos: Array,
  },
};
</script>
<style lang="scss">
.item-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card-item {
  background: #212125;
  width: 256px;
  height: 592px;

  &__content-card {
    height: 100%;
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: #212125;
    border-radius: 10px;
    &__topo {
      height: 250px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      background: #212125;
      &__img {
        height: 80px;
        width: 80px;
        background: #212125;
        img {
          width: 80px;
          height: 80px;
          background: #212125;
        }
      }
      &__itens {
        width: 172px;
        height: 170px;
        display: flex;
        margin-left: 18px;
        justify-content: space-between;
        flex-direction: column;
        background: #212125;
        margin: 10px 0px 0px 15px;

        &__box-one {
          background: #212125;

          span {
            background: #212125;
            margin-top: 32px;
            display: flex;
            justify-content: center;
            font-family: "Roboto", sans-serif;
            color: #fff;
            font-size: 24px;
            font-weight: 500;
            line-height: 30px;
            width: 163px;
          }
        }
        &__linear {
          display: flex;
          justify-content: center;
          align-items: center;
          background: #212125;
          border-radius: 2px;
          width: 200px;
          p {
            background: #212125;
            font-family: "Roboto", sans-serif;
            font-weight: 400;
            font-style: normal;
            font-size: 14px;
            line-height: 22px;
            margin-top: 15px;
            color: #bcbcbc;
          }
        }
      }
    }

    &__button {
      // height: 228px;
      // width: 100%;
      display: flex;
      // padding-top: 24px;
      justify-content: space-between;
      flex-direction: column;
      background: #212125;
      h1 {
        background: #212125;
        font-family: "Roboto", sans-serif;
        font-size: 16px;
        font-weight: 400;
        color: #fff;
        margin-top: 25px;
      }

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        width: 144px;
        height: 46px;
        font-size: 14px;
        font-family: "Roboto", sans-serif;
        font-weight: bold;
        background: #28203e;
        border-radius: 8px;
        color: #fff;
      }
    }
  }
}
</style>
