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
          <div class="container__events__content__discover__strong">
            <strong>Aprenda programação do zero, e de graça.</strong>
          </div>
          <img src="@/assets/discover.png" alt="" />
          <h3>Maratona Discover</h3>
          <p>
            Impulso extra para começar sua jornada, construir os alicerces na
            prática e avançar na direção certa rumo aos seus objetivos.
          </p>
        </div>
        <div class="container__events__content__nlw">
          <div class="container__events__content__nlw__strong">
            <strong>Avance para o próximo nível.</strong>
          </div>
          <img src="@/assets/nlw.png" alt="" />
          <h3>Next Level Week</h3>
          <p>
            Um evento para toda a comunidade evoluir junto, na prática. São dias
            intensos com hacks de carreira e muita mão na massa.
          </p>
        </div>
        <div class="container__events__content__dowhile">
          <div class="container__events__content__dowhile__strong">
            <span>Never Stop Learning</span>
          </div>
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
      justify-content: space-between;
      h3 {
        width: 500px;
        color: #e1e1e6;
        font-size: 48px;
      }
      p {
        margin: 2% 0% 2% 10%;
        width: 730px;
        color: #a8a8b3;
      }
    }
    &__content {
      display: flex;
      margin-top: 5%;
      padding: 5% 0 10% 0;
      &__discover {
        width: 352px;
        height: 400px;
        margin: 0 5% 2% 0;
        &__strong {
          width: 200px;
          font-size: 20px;
          color: #8257e5;
        }
        p {
          color: #a8a8b3;
        }
      }
      &__nlw {
        width: 352px;
        height: 400px;
        margin: 0 5% 2% 0;
        &__strong {
          width: 200px;
          font-size: 20px;
          color: #04d361;
        }
        p {
          color: #a8a8b3;
        }
      }
      &__dowhile {
        width: 352px;
        height: 400px;
        margin: 0 5% 2% 0;
        &__strong {
          width: 150px;
          font-size: 20px;
          color: #ff248a;
        }
        p {
          color: #a8a8b3;
        }
      }
    }
  }
}
</style>
