<template>
  <div class="footer">
    <div class="footer__content">
      <div class="footer__content__icons">
        <img
          src="@/assets/youtube1.png"
          class="footer__content__icons__redes"
        />
        <img
          src="@/assets/instagram1.png"
          class="footer__content__icons__redes"
        />
        <img
          src="@/assets/facebook1.png"
          class="footer__content__icons__redes"
        />
        <img
          src="@/assets/twitter1.png"
          class="footer__content__icons__redes"
        />
      </div>
      <!-- <img src="@/assets/seta.png" /> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  border-top: 1px solid #b6b2b252;
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;

  &__content {
    display: flex;
    max-width: 1170px;
    width: 80%;
    margin: 0 auto;
    // margin-top: 90px;

    &__icons {
      display: flex;
      // background: #1b1726;
      padding-top: 25px;
      &__redes {
        // border: 94px;
        // margin-left: 25px;
        // margin-top: 90px;
        // display: flex;
        // align-items: center;
        // background: #fff;
        // border-radius: 7px;
        margin-left: 8px;
        // background: #101014;
        border: 1px solid#29292e;
        border-radius: 7px;
        padding: 14px;
        background: #29292e;
        // margin-top: 15px;
        img {
        }
      }
    }
  }
}
</style>
