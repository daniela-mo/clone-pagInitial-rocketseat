<template>
  <div class="home-listen">
    <div class="home-listen__content">
      <div class="home-listen__content__items">
        <div class="home-listen__content__items__img">
          <img src="@/assets/feather_book-open.svg" />
        </div>
        <div class="home-listen__content__items__text">
          <span> Minions ipsum potatoooo gelatooo daa ti aamoo!</span>
          <p>
            Minions ipsum la bodaaa wiiiii gelatooo uuuhhh potatoooo poulet
            tikka masala. Tank yuuu! tank yuuu!
          </p>
        </div>
      </div>
      <div class="home-listen__content__items">
        <div class="home-listen__content__items__img">
          <img src="@/assets/feather_clock.svg" />
        </div>
        <div class="home-listen__content__items__text">
          <span> Minions ipsum potatoooo gelatooo daa ti aamoo!</span>
          <p>
            Minions ipsum la bodaaa wiiiii gelatooo uuuhhh potatoooo poulet
            tikka masala. Tank yuuu! tank yuuu!
          </p>
        </div>
      </div>
      <div class="home-listen__content__items">
        <div class="home-listen__content__items__img">
          <img src="@/assets/feather_award.svg" />
        </div>
        <div class="home-listen__content__items__text">
          <span> Minions ipsum potatoooo gelatooo daa ti aamoo!</span>
          <p>
            Minions ipsum la bodaaa wiiiii gelatooo uuuhhh potatoooo poulet
            tikka masala. Tank yuuu! tank yuuu!
          </p>
        </div>
      </div>
      <div class="home-listen__content__items">
        <div class="home-listen__content__items__img">
          <img src="@/assets/feather_message-square.svg" />
        </div>
        <div class="home-listen__content__items__text">
          <span> Minions ipsum potatoooo gelatooo daa ti aamoo!</span>
          <p>
            Minions ipsum la bodaaa wiiiii gelatooo uuuhhh potatoooo poulet
            tikka masala. Tank yuuu! tank yuuu!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.home-listen {
  display: flex;
  max-width: 1170px;
  margin: 0 auto;
  &__content {
    display: flex;
    flex-wrap: wrap;

    &__items {
      display: flex;
      justify-content: space-between;
      width: 400px;
      margin: 0 104px 40px 0;
      flex-direction: row;
      align-content: flex-start;
      &__img {
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--color-background);
        border-radius: 50%;
        width: 48px;
        height: 48px;
        img {
          width: 24px;
          height: 24px;
        }
      }
      &__text {
        width: 320px;
        span {
          font-family: Inter;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          line-height: 150%;
          color: #fff;
        }
        p {
          font-family: Inter;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 150%;
          color: var(--color-light-silver);
        }
      }
    }
  }
}
</style>
