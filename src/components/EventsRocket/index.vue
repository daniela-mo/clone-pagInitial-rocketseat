<template>
  <section class="container">
    <div class="container__events">
      <div class="container__events__text">
        <div class="container__events__text__title">
          <h3>
            Eventos feitos pela Rocketseat
          </h3>
        </div>
        <div>
          <div class="container__events__text__border"></div>
          <p>
            Participe de eventos alinhados com seu momento na programação e
            evolua junto com a comunidade. Fique por dentro dos principais
            eventos da Rocketseat e outros inéditos.
          </p>
        </div>
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

      <div class="container__events__contact">
        <div class="container__events__contnt__title">
          <h3>Receba informações sobre nossos eventos em primeira mão</h3>
        </div>
        <div class="container__events__content__bottom">
          <div class="container__content__bottom__input">
            <input type="text" />
          </div>
          <div class="container__events__content__bottom__information">
            <img src="@/assets/icone.png" alt="" />
            <p>Suas informações estão seguras</p>
          </div>
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
    border-bottom: 1px solid rgba(255, 255, 255, 0.123);
    &__text {
      display: flex;
      margin-top: 10%;
      justify-content: space-between;
      &__title {
        width: 400px;
        h3 {
          color: #e1e1e6;
          font-size: 48px;
        }
      }
      &__border {
        display: flex;
        align-items: flex-end;
        margin-right: 50px;
        width: 50px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.123);
      }
      p {
        margin-right: 50px;
        margin-top: 40px;
        width: 625px;
        color: #a8a8b3;
      }
    }
    &__content {
      display: flex;
      margin: 4% 0;
      &__discover {
        width: 352px;
        height: 400px;
        margin: 0 5% 2% 0;
        &__strong {
          width: 200px;
          margin: 10% 0;
          font-size: 20px;
          color: #8257e5;
        }
        p {
          color: #a8a8b3;
        }
        h3 {
          margin: 5% 0;
          font-size: 32px;
          color: #e1e1e6;
        }
      }
      &__nlw {
        width: 352px;
        height: 400px;
        margin: 0 5% 2% 0;
        &__strong {
          margin: 10% 0;
          width: 200px;
          font-size: 20px;
          color: #04d361;
        }
        p {
          color: #a8a8b3;
        }
        h3 {
          margin: 5% 0;
          font-size: 32px;
          color: #e1e1e6;
        }
      }
      &__dowhile {
        width: 352px;
        height: 400px;
        margin: 0 5% 2% 0;
        &__strong {
          margin: 10% 0;
          width: 150px;
          font-size: 20px;
          color: #ff248a;
        }
        p {
          color: #a8a8b3;
        }
        h3 {
          margin: 5% 0;
          font-size: 32px;
          color: #e1e1e6;
        }
      }
    }
    &_contact {
      margin: 5% 0;
      &__title {
        h3 {
          font-size: 32px;
          color: #e1e1e6;
        }
      }
    }
  }
}
</style>
