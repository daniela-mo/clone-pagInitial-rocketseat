<template>
  <div class="footer">
    <div class="footer__content">
      <div class="footer__content__icons">
        <img src="@/assets/yotu.png" />
        <img src="@/assets/instagram.png" />
        <img src="@/assets/facebook.png" />
        <img src="@/assets/twitter.png" />
      </div>
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
      img {
        margin-top: 90px;
      }
    }
  }
}
</style>
