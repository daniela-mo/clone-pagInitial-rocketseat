<template>
  <section class="container">
    <div class="container__events">
      <div class="container__events__text">
        <h3>
          Eventos feitos pela Rocketseat
        </h3>
        <p>
          Participe de eventos alinhados com seu momento na programação e evolua
          junto com a comunidade. Fique por dentro dos principais eventos da
          Rocketseat e outros inéditos.
        </p>
      </div>
      <div class="container__events__content">
        <div class="container__events__content__discover">
          <strong>Aprenda programação do zero, e de graça.</strong>
          <img src="@/assets/discover.png" alt="" />
          <h3>Maratona Discover</h3>
          <p>
            Impulso extra para começar sua jornada, construir os alicerces na
            prática e avançar na direção certa rumo aos seus objetivos.
          </p>
        </div>
        <div class="container__events__content__nlw">
          <strong>Avance para o próximo nível.</strong>
          <img src="@/assets/nlw.png" alt="" />
          <h3>Next Level Week</h3>
          <p>
            Um evento para toda a comunidade evoluir junto, na prática. São dias
            intensos com hacks de carreira e muita mão na massa.
          </p>
        </div>
        <div class="container__events__content__dowhile">
          <strong>Never Stop Learning</strong>
          <img src="@/assets/dowhile.png" alt="" />
          <h3>Do While</h3>
          <p>
            Reunimos todo ecossistema com um único objetivo: o aprendizado
            contínuo. Evento plural de comunidades, tecnologias e empresas.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.container {
  &__events {
    display: flex;
    max-width: 1170px;
    margin: 0 auto;
    justify-content: center;
    flex-direction: column;
    &__text {
      display: flex;
      margin-top: 10%;
      h3 {
        width: 400px;
        color: #e1e1e6;
        font-size: 48px;
      }
      p {
        margin-top: 2%;
        text-align: center;
        width: 650px;
        color: #a8a8b3;
      }
    }
    &__content {
      display: flex;
    }
  }
}
</style>
