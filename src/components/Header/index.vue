<template>
  <section class="container">
    <div class="header">
      <div class="header__content">
        <div class="header__content__img">
          <img src="@/assets/rocketseat.png" alt="Logo" />
        </div>
        <div class="header__content__text">
          <ul class="header__content__text__ul">
            <li><a href="#">Home</a></li>
            <li><a href="#">Discover</a></li>
            <li><a href="#">Ignite</a></li>
            <li><a href="#">Conteúdo</a></li>
            <li><a href="#">A Rocketseat</a></li>
          </ul>
        </div>
        <div class="header__content__buttons">
          <button class="header__content__buttons__cadastro">
            CADASTRAR
          </button>
          <button class="header__content__buttons__login">ENTRAR</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 105px;
  margin: 0 auto;
  &__content {
    display: flex;
    width: 80%;
    max-width: 1170px;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    &__img {
      display: flex;
      margin: 16px 0 18px 20px;
      img {
        width: 250px;
        height: 55px;
      }
    }
    &__text {
      display: flex;
      align-items: center;
      justify-content: center;

      ul {
        display: flex;
        flex-direction: row;
        li {
          display: flex;
          // text-decoration: none;
          // margin: 0 15px;
          a {
            margin-left: 12px;
            text-decoration: none;
            color: #5b5b62;
            font-size: 20px;
            font-family: "Roboto", sans-serif;
            font-weight: 400;
          }
        }
      }
    }
    &__buttons {
      margin: 30px 20px;

      &__cadastro {
        background: none;
        border: none;
        color: var(--color-text);
        margin: 0 20px;
        font-weight: bold;
        font-size: 15px;
      }
      &__login {
        background: #8257e5;
        border: none;
        color: var(--color-text);
        padding: 15px 25px;
        border-radius: 5px;
        font-weight: bold;
        font-size: 15px;
      }
    }
  }
}
</style>
