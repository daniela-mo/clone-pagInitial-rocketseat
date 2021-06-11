<template>
  <section class="container">
    <div class="header">
      <div class="header__content">
        <div class="header__content__img">
          <img src="@/assets/rocketseat-logo.png" alt="Logo" />
        </div>
        <div class="header__content__text">
          <ul>
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
  border-bottom: 1px solid rgba(255, 255, 255, 0.123);
  &__content {
    display: flex;
    width: 80%;
    max-width: 1120px;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    &__img {
      display: flex;
      margin: 16px 0 18px 0px;
      img {
        width: 180px;
        height: 44px;
      }
    }
    &__text {
      display: flex;
      align-items: center;
      justify-content: center;
      ul {
        display: flex;
        li {
          text-decoration: none;
          margin: 0 15px;
          a {
            text-decoration: none;
            color: #5b5b62;
            font-size: 16px;
            font-family: "Roboto", sans-serif;
            font-weight: 400;
            a:hover {
              color: #fff;
              font-weight: bold;
            }
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
        font-size: 12px;
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
