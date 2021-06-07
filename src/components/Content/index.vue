<template>
  <section class="container">
    <div class="container__content">
      <div class="container__content__title">
        Conteúdo para nunca parar de aprender
      </div>
      <div class="container__content__redes">
        <div class="container__content__redes__icons">
          <img src="@/assets/yt.png" alt="" />
          <strong>Canal Rocketseat</strong>
          <p>
            Assista quadros especiais, encontros ao vivo e conversa com
            convidados
          </p>
          <span>ACESSAR CANAL</span>
        </div>

        <div class="container__content__redes__icons">
          <img src="@/assets/mf.png" alt="" />
          <strong>Podcasts</strong>
          <p>
            Três Devs conversam sobre diversos assuntos do universo da
            programação
          </p>
          <span>OUVIR AGORA</span>
        </div>

        <div class="container__content__redes__icons">
          <img src="@/assets/insta.png" alt="" />
          <strong>Instagram</strong>
          <p>
            Atualizações do foguete e drops de conhecimento
          </p>
          <span>SEGUIR A ROCKETSEAT</span>
        </div>

        <div class="container__content__redes__icons">
          <img src="@/assets/doc.png" alt="" />
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
  background: #121214;
  border-bottom: 1px solid rgba(255, 255, 255, 0.123);
  &__content {
    display: flex;
    max-width: 1170px;
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
    }
    &__redes {
      display: flex;
      flex-direction: column;
      &__icons {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgba(255, 255, 255, 0.123);
        align-items: center;
        img {
        }
        strong {
          font-size: 24px;
          color: #e1e1e6;
          font-family: "Roboto", sans-serif;
        }
        p {
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
