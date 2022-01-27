<template>
  <section class="important">
    <div class="important__container">
      <div class="importante__container__content">
        <div class="important__container__content__svg">
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M28 49V49C16.401 49 7 39.599 7 28V28C7 16.401 16.401 7 28 7V7C39.599 7 49 16.401 49 28V28C49 39.599 39.599 49 28 49Z"
              stroke="#FD951F"
              stroke-width="2.7"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M28.0003 39.6667V28H25.667"
              stroke="#E1E1E6"
              stroke-width="2.7"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M27.4143 18.6663C27.0923 18.6663 26.831 18.9277 26.8333 19.2497C26.8333 19.5717 27.0947 19.833 27.4167 19.833C27.7387 19.833 28 19.5717 28 19.2497C28 18.9277 27.7387 18.6663 27.4143 18.6663"
              stroke="#E1E1E6"
              stroke-width="2.7"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
        <div class="important__container__content__text">
          <h2>Não pule essa etapa</h2>
          <p>
            <strong>Para avançar você precisa de uma base sólida.</strong>
            O Discover é um programa gratuito para você dominar os fundamentos
            do desenvolvimento web e se preparar para o próximo nível.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.important {
  background: linear-gradient(90deg, #2a1f15, #121214 59.44%);
  &__container {
    display: flex;
    width: 80%;
    max-width: 1120px;
    justify-content: center;
    margin: 0 auto;
    flex-direction: column;
    padding: 80px 0;
    &__svg {
      display: flex;
      width: 96px;
      height: 200px;
      background: var(--orange-darkness);
      align-items: center;
      padding: 0 20px;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    &__text {
      display: flex;
      flex-direction: column;
      padding: 32px 40px;
      width: 584px;
      height: 200px;
      h2 {
        font-size: 32px;
        color: #e1e1e6;
      }
      p {
        font-size: 16px;
        color: #a8a8b3;
      }
      strong {
        font-size: 16px;
        color: #e1e1e6;
      }
    }
  }
}
</style>
