<template>
  <section class="container">
    <div class="container__content">
      <div class="container__content__title">
        Conteúdo para nunca parar de aprender
      </div>
      <div class="container__content__redes">
        <div class="container__content__redes__youtube">
          <img src="@/assets/yt.png" alt="" />
          <strong>Canal Rocketseat</strong>
          <p>
            Assista quadros especiais, encontros ao vivo e conversa com
            convidados
          </p>
          <span>ACESSAR CANAL</span>
        </div>

        <div class="container__content__redes__microfone">
          <img src="@/assets/mf.png" alt="" />
          <strong>Podcasts</strong>
          <p>
            Três Devs conversam sobre diversos assuntos do universo da
            programação
          </p>
          <span>OUVIR AGORA</span>
        </div>

        <div class="container__content__redes__insta">
          <img src="@/assets/insta.png" alt="" />
          <strong>Instagram</strong>
          <p>
            Atualizações do foguete e drops de conhecimento
          </p>
          <span>SEGUIR A ROCKETSEAT</span>
        </div>

        <div class="container__content__redes__blog">
          <img src="@/assets/blog.png" alt="" />
          <strong>Blog</strong>
          <p>Artigos e tutoriais sobre Back-end, Front-end e Mobile</p>
          <span>ACESSAR BLOG</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container {
  background: var(--darker-gradient-left);
  &__content {
    display: flex;
    max-width: 1120px;
    margin: 0 auto;
    justify-content: center;
    flex-direction: column;
    &__title {
      display: flex;
      align-items: flex-start;
      font-size: 48px;
      width: 460px;
      color: #e1e1e6;
      font-weight: bold;
      margin: 10% 0 5%;
    }
    &__redes {
      display: flex;
      flex-direction: column;
      margin-bottom: 14%;
      &__youtube {
        display: flex;
        border-bottom: 1px solid rgba(255, 255, 255, 0.123);
        justify-content: space-between;
        align-items: center;
        padding: 25px 0;
        img {
          width: 50px;
        }
        strong {
          font-size: 24px;
          color: #e1e1e6;
          font-family: "Roboto", sans-serif;
        }
        p {
          width: 270px;
          color: #a8a8b3;
          font-family: "Roboto", sans-serif;
        }
        span {
          width: 184px;
          text-align: left;
          font-size: 14px;
          font-weight: bold;
          line-height: 24px;
          color: #8257e5;
          text-transform: uppercase;
          font-family: "Roboto", sans-serif;
        }
      }
      &__microfone {
        display: flex;
        border-bottom: 1px solid rgba(255, 255, 255, 0.123);
        justify-content: space-between;
        align-items: center;
        padding: 25px 0;

        img {
          width: 40px;
          margin-right: 20px;
        }
        strong {
          font-size: 24px;
          color: #e1e1e6;
          font-family: "Roboto", sans-serif;
        }
        p {
          width: 280px;
          margin-left: 90px;
          color: #a8a8b3;
          font-family: "Roboto", sans-serif;
        }
        span {
          width: 184px;
          text-align: left;
          font-size: 14px;
          font-weight: bold;
          line-height: 24px;
          color: #8257e5;
          text-transform: uppercase;
          font-family: "Roboto", sans-serif;
        }
      }
      &__insta {
        display: flex;
        border-bottom: 1px solid rgba(255, 255, 255, 0.123);
        justify-content: space-between;
        align-items: center;
        padding: 25px 0;

        img {
          width: 47px;
          margin-right: 20px;
        }
        strong {
          font-size: 24px;
          color: #e1e1e6;
          font-family: "Roboto", sans-serif;
        }
        p {
          width: 286px;
          margin-left: 90px;
          color: #a8a8b3;
          font-family: "Roboto", sans-serif;
        }
        span {
          width: 184px;
          text-align: left;
          font-size: 14px;
          font-weight: bold;
          line-height: 24px;
          color: #8257e5;
          text-transform: uppercase;
          font-family: "Roboto", sans-serif;
        }
      }
      &__blog {
        display: flex;
        border-bottom: 1px solid rgba(255, 255, 255, 0.123);
        justify-content: space-between;
        align-items: center;
        padding: 25px 0;

        img {
          width: 39px;
        }
        strong {
          font-size: 24px;
          color: #e1e1e6;
          font-family: "Roboto", sans-serif;
        }
        p {
          width: 254px;
          margin-left: 112px;
          color: #a8a8b3;
          font-family: "Roboto", sans-serif;
        }
        span {
          width: 184px;
          text-align: left;
          font-size: 14px;
          font-weight: bold;
          line-height: 24px;
          color: #8257e5;
          text-transform: uppercase;
          font-family: "Roboto", sans-serif;
        }
      }
    }
  }
}
</style>
