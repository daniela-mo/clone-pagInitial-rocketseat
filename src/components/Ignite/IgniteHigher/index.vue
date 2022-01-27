<template>
  <section class="programing">
    <div class="programing__learn">
      <div class="programing__learn__content">
        <div class="programing__learn__content__img">
          <img src="@/assets/video-ignite_higher.png" alt="" />
        </div>
        <div class="programing__learn__content__text">
          <h2>Programação vai muito além do código</h2>
          <h3>
            Nosso objetivo no Ignite é formar profissionais de alto impacto, com
            habilidades que vão além do código.
          </h3>
          <p>
            Por isso, ao entrar no Ignite você terá incluso a trilha Ignite
            Higher, com conteúdos voltados para o desenvolvimento de habilidades
            comportamentais (soft skills). No Higher você terá conteúdos
            teóricos semanais e desafios práticos para evoluir sua comunicação,
            organização, criatividade, foco e produtividade.
          </p>
        </div>
      </div>
      <div class="programing__learn__higher">
        <div class="programing__learn__higher__right">
          <div class="programing__learn__higher__right__figure">
            <svg
              width="54"
              height="64"
              viewBox="0 0 54 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M42.0742 0C35.4983 0 30.1484 5.3457 30.1484 11.9165V20.083H23.8516V11.9165C23.8516 5.3457 18.5017 0 11.9258 0C5.34986 0 0 5.3457 0 11.9165V37.0205C0 40.4595 2.53175 43.3174 5.83071 43.833C5.31712 44.7974 5.02441 45.8965 5.02441 47.0625C5.02441 55.0693 10.1466 62.8384 10.3645 63.165C10.7124 63.6865 11.2983 64 11.9258 64C12.5532 64 13.1391 63.6865 13.4871 63.165C13.705 62.8384 18.8271 55.0693 18.8271 47.0625C18.8271 45.8965 18.5349 44.7974 18.0213 43.833C21.3203 43.3174 23.852 40.4595 23.852 37.0205V33.875H30.1484V37.0205C30.1484 40.4595 32.6802 43.3174 35.9791 43.833C35.4656 44.7974 35.1733 45.8965 35.1733 47.0625C35.1733 55.0693 40.295 62.8384 40.5129 63.165C40.8609 63.6865 41.4468 64 42.0742 64C42.7017 64 43.2876 63.6865 43.6355 63.165C43.8534 62.8384 48.9756 55.0693 48.9756 47.0625C48.9756 45.8965 48.6834 44.7974 48.1698 43.833C51.4682 43.3174 54 40.4595 54 37.0205V11.9165C54 5.3457 48.6501 0 42.0742 0ZM33.9014 11.9165C33.9014 7.41357 37.5678 3.75 42.0742 3.75C46.5807 3.75 50.2471 7.41357 50.2471 11.9165V30.125H33.9014V11.9165ZM11.9258 3.75C16.4322 3.75 20.0986 7.41357 20.0986 11.9165V30.125H3.75292V11.9165C3.75292 7.41357 7.41934 3.75 11.9258 3.75ZM11.9238 58.3291C10.5531 55.6284 8.77733 51.3105 8.77733 47.0625C8.77733 45.3276 10.1896 43.9165 11.9258 43.9165C13.662 43.9165 15.0742 45.3276 15.0742 47.0625C15.0742 51.2964 13.2955 55.6226 11.9238 58.3291ZM16.9507 40.1665H6.90087C5.16515 40.1665 3.75292 38.7554 3.75292 37.0205V33.875H20.0986V37.0205C20.0986 38.7554 18.6869 40.1665 16.9507 40.1665ZM23.8516 23.833H30.1484V30.125H23.8516V23.833ZM42.0723 58.3291C40.7016 55.6284 38.9258 51.3105 38.9258 47.0625C38.9258 45.3276 40.338 43.9165 42.0742 43.9165C43.8104 43.9165 45.2227 45.3276 45.2227 47.0625C45.2227 51.2964 43.4439 55.6226 42.0723 58.3291ZM47.0991 40.1665H37.0493C35.3136 40.1665 33.9014 38.7554 33.9014 37.0205V33.875H50.2471V37.0205C50.2471 38.7554 48.8353 40.1665 47.0991 40.1665Z"
                fill="#04D361"
              ></path>
            </svg>
          </div>
          <h3>
            Ignite Higher
          </h3>
        </div>
        <p>
          <strong>Aprenda a aprender:</strong>
          conteúdo prático de soft skills que vão te ajudar a evoluir como
          profissional.
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.programing {
  border-bottom: 1px solid rgba(255, 255, 255, 0.123);
  &__learn {
    display: flex;
    width: 80%;
    max-width: 1120px;
    padding: 160px 0;
    flex-direction: column;
    margin: 0 auto;
    &__content {
      display: flex;
      justify-content: space-between;
      &__img {
        img {
          width: 510px;
          height: 390px;
        }
      }
      &__text {
        width: 500px;
        height: 388px;
        margin-top: 12px;
        h2 {
          font-size: 48px;
          color: #e1e1e6;
          line-height: 54px;
          font-weight: 700;
        }
        h3 {
          margin-top: 24px;
          font-size: 24px;
          color: #e1e1e6;
          line-height: 34px;
          font-weight: 500;
        }
        p {
          margin-top: 24px;
          color: #a8a8b3;
          font-size: 16px;
          line-height: 26px;
        }
      }
    }
    &__higher {
      width: 1120px;
      height: 120px;
      background: var(--blue-gradient-right);
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 5px;
      margin-top: 64px;
      padding-right: 77px;
      &__right {
        width: 370px;
        display: flex;
        align-items: center;
        &__figure {
          background: var(--green-darker);
          display: flex;
          width: 120px;
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
          height: 120px;
          align-items: center;
          justify-content: center;
        }
        h3 {
          font-size: 32px;
          color: #e1e1e6;
          margin-left: 62px;
          font-weight: 700;
        }
      }
      p {
        width: 403px;
        font-size: 16px;
        line-height: 26px;
        color: #a8a8b3;
      }
      strong {
        color: #e1e1e6;
      }
    }
  }
}
</style>
