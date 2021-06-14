<template>
  <div>
    <div class="discover">
      <div class="discover__content">
        <div class="discover__content__logo">
          <img src="@/assets/discover-topo.png" />
        </div>
        <div class="discover__content__title">
          <span>Programa gratuito para iniciantes</span>
        </div>
        <div class="discover__content__text">
          <p>
            Na plataforma você terá acesso a mais de 500 aulas gratuitas para
            você construir os alicerces necessários para decolar em programação.
          </p>
        </div>
        <div class="discover__content__buttons">
          <button class="discover__content__buttons__button">
            COMEÇAR AGORA
          </button>
          <div class="discover__content__buttons__span">
            <span>HTML, CSS, JavaScript, HTTP, Git e muito mais.</span>
          </div>
        </div>
        <div class="discover__content__img">
          <img src="@/assets/homem.png" />
        </div>
      </div>
    </div>
    <Cousers />
    <Educators />
    <Depositions />
    <Faq />
    <Connect />
    <Boosting />
    <Footer />
  </div>
</template>

<script>
import Cousers from "@/components/Cousers";
import Educators from "@/components/Educators";
import Depositions from "@/components/Depositions";
import Faq from "@/components/Faq";
import Connect from "@/components/Connect";
import Boosting from "@/components/Boosting";
import Footer from "@/components/Footer";

export default {
  components: {
    Cousers,
    Educators,
    Depositions,
    Faq,
    Connect,
    Boosting,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.discover {
  border-top: 1px solid #b6b2b252;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  &__content {
    max-width: 1170px;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin: 0 auto;

    &__logo {
      // width: 65%;
      margin: 0 auto;
    }
    &__title {
      font-family: "Roboto", sans-serif;
      font-size: 56px;
      font-weight: 700;
      color: #e1e1e6;
      display: flex;
      flex-direction: column;
      margin: 0px 0px 0px 24px;
      width: 500px;
    }
    &__text {
      margin: 0px 0px 0px 24px;
      padding: 15px 0px 0px;
      font-family: "Roboto", sans-serif;
      font-size: 18px;
      color: #e1e1e6;
      width: 450px;
    }
    &__buttons {
      display: flex;
      &__button {
        margin-top: 40px;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        font-weight: bold;
        color: #e1e1e6;
        background: #8257e5;
        width: 266px;
        height: 64px;
        font-family: "Roboto", sans-serif;
        margin-left: 25px;
      }
      &__span {
        display: flex;
        flex-direction: row;
        font-family: "Roboto", sans-serif;
        font-size: 14px;
        color: #a8a8b3;
        width: 150px;
        margin-top: 55px;
        margin-left: 30px;
      }
    }
    &__img {
      display: flex;
      top: 250px;
      left: 50%;
      bottom: 0;

      align-items: center;
      position: absolute;
    }
  }
}
</style>
