<template>
  <section class="container">
    <div class="container__content">
      <div class="container__content__left">
        <div class="container__content__left__text">
          <h3>
            <strong>Evolua na direção certa,</strong> com foco no que importa
            para você.
          </h3>
          <svg
            width="539"
            height="400"
            viewBox="0 0 539 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              opacity="0.25"
              cx="339"
              cy="200"
              r="200"
              transform="rotate(-180 339 200)"
              fill="url(#straight)"
            ></circle>
            <circle
              opacity="0.5"
              cx="339"
              cy="200"
              r="133.333"
              transform="rotate(-180 339 200)"
              fill="url(#straight0)"
            ></circle>
            <circle
              cx="339"
              cy="200"
              r="66.6667"
              transform="rotate(-180 339 200)"
              fill="url(#straight2)"
            ></circle>
            <circle
              cx="339"
              cy="200"
              r="11.75"
              transform="rotate(-180 339 200)"
              stroke="#0E4C2B"
              stroke-width="1.5"
            ></circle>
            <circle
              cx="339"
              cy="200"
              r="4.16667"
              transform="rotate(-180 339 200)"
              fill="#04D361"
            ></circle>
            <path
              d="M282 200L272 194.227L272 205.774L282 200ZM-8.74228e-08 201L273 201L273 199L8.74228e-08 199L-8.74228e-08 201Z"
              fill="url(#straight3)"
            ></path>
            <defs>
              <linearGradient
                id="straight"
                x1="139"
                y1="-1.52588e-05"
                x2="539"
                y2="400"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#11251C"></stop>
                <stop offset="1" stop-color="#11251C" stop-opacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="straight0"
                x1="205.666"
                y1="66.6665"
                x2="472.333"
                y2="333.333"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#11251C"></stop>
                <stop offset="1" stop-color="#11251C" stop-opacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="straight2"
                x1="272.334"
                y1="133.333"
                x2="405.667"
                y2="266.667"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#11251C"></stop>
                <stop offset="1" stop-color="#11251C" stop-opacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="straight3"
                x1="282"
                y1="200"
                x2="0"
                y2="200"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#06B656"></stop>
                <stop offset="1" stop-color="#41414D" stop-opacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div class="container__content__right">
        <div class="container__content__right__title">
          <h2>O Ignite</h2>
          <h2>é pra mim?</h2>
        </div>
        <span>
          O Ignite é um programa para quem já domina os fundamentos da
          programação.
        </span>
        <p>
          Nós vamos a fundo em uma tecnologia, através de um currículo desenhado
          para ser muito prático, aplicando uma metodologia que vai te preparar
          para os desafios do mundo real.
        </p>
        <p>
          Além disso, o programa também conta com uma trilha para você
          desenvolver habilidades comportamentais, para te ajudar a se destacar
          no mercado.
        </p>
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
    width: 80%;
    max-width: 1120px;
    justify-content: center;
    margin: 0 auto;
    padding: 160px 0 80px 0;
    &__left {
      width: 539px;
      height: 470px;
      display: flex;

      &__text {
        width: 350px;
        height: 100px;

        svg {
          margin: -70px 0 30px -9px;
        }
        h3 {
          font-size: 32px;
          line-height: 42px;
          color: #e1e1e6;
          font-weight: normal;
        }
        strong {
          font-size: 32px;
          line-height: 42px;
          color: var(--green);
          font-weight: bold;
        }
      }
    }
    &__right {
      display: flex;
      width: 560px;
      align-items: flex-start;
      flex-direction: column;
      &__title {
        width: 250px;
        margin-bottom: 24px;
        h2 {
          font-size: 50px;
          color: #e1e1e6;
        }
      }
      span {
        margin-top: 24px;
        font-size: 18px;
        line-height: 28px;
        color: #e1e1e6;
      }
      p {
        margin-top: 24px;
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
        color: #a8a8b3;
      }
    }
  }
}
</style>
