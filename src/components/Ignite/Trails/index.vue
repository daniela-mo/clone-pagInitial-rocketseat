<template>
  <section class="programs">
    <div class="programs__content">
      <div class="programs__content__text">
        <div class="programs__content__text__h2">
          <h2>
            Programas dedicados e não-dependentes
          </h2>
        </div>
        <div class="programs__content__text__span">
          <span>
            Escolha o Ignite que está mais alinhado com seus objetivos e acelere
            sua evolução através de um conteúdo profundo e focado.
          </span>
        </div>
      </div>
      <div class="programs__content__educator">
        <div class="programs__content__educator__trails">
          <button class="programs__content__educator__trails__react">
            Ignite ReactJS
          </button>
          <button class="programs__content__educator__trails__node">
            Ignite Node.js
          </button>
          <button class="programs__content__educator__trails__elixir">
            Ignite Elixir
          </button>
          <button class="programs__content__educator__trails__rnative">
            Ignite React Native
          </button>
          <button class="programs__content__educator__trails__flutter">
            Ignite Flutter
          </button>
        </div>

        <div class="programs__content__educator__diego">
          <div class="programs__content__educator__diego__skills">
            <p class="programs__content__educator__diego__skills__one">
              <strong>Se o seu objetivo está alinhado com o front-end,</strong>
              e você deseja construir interfaces modernas e reativas na web
              utilizando uma biblioteca modular e escalável, esse Ignite é para
              você.
            </p>
            <h3>Diego Fernandes</h3>
            <span>Educador</span>
            <p class="programs__content__educator__diego__skills__two">
              Responsável pela área de tecnologia da Rocketseat - onde
              utilizamos principalmente Node.js e ReactJS para atender milhares
              de devs na nossa plataforma - é o educador que vai te guiar no
              Ignite ReactJS.
            </p>

            <div class="programs__content__educator__diego__skills__links">
              <div
                class="programs__content__educator__diego__skills__links__rede"
              >
                <a href="https://github.com/diego3g" />

                <div
                  class="programs__content__educator__diego__skills__links__rede__imgRede"
                >
                  <img alt="Github" src="@/assets/min-git.png" />
                </div>
                <strong>GITHUB</strong>
              </div>
              <div
                class="programs__content__educator__diego__skills__links__rede"
              >
                <a href="https://github.com/diego3g" />
                <div
                  class="programs__content__educator__diego__skills__links__rede__imgRede"
                >
                  <img alt="Instagram" src="@/assets/min-insta.png" />
                </div>
                <strong>INSTAGRAM</strong>
              </div>
            </div>
          </div>
          <div class="programs__content__educator__diego__img">
            <img src="@/assets/diego.jpg" alt="" />
          </div>
        </div>

        <!-- <div class="programs__content__educator__daniele">
          <div class="programs__content__educator__daniele__skills">
            <strong
              >Se o seu objetivo está alinhado com o back-end, e você deseja
              construir arquiteturas escaláveis e simples para a web utilizando
              uma linguagem flexível e popular, essa trilha é para você.</strong
            >
            <h3>Daniele Evangelista</h3>
            <span>Educadora</span>
            <p>
              Formada em Sistemas de Informação, há 11 anos atua no mercado como
              programadora. Foi responsável pelo time de educação aqui na
              Rocketseat, e é a educadora que vai te guiar no Ignite Node.js.
            </p>
            <button>GITHUB</button>
            <button>INSTAGRAM</button>
          </div>
          <div><img src="" alt="" /></div>
        </div> -->

        <!-- <div class="programs__content__educator__rafael">
          <div class="programs__content__educator__rafael__skills">
            <strong
              >Se o seu objetivo está alinhado com o back-end, e você deseja
              construir aplicações distribuídas, escaláveis e tolerantes a
              falhas utilizando programação funcional, essa trilha é para
              você.</strong
            >
            <h3>Rafael Camarda</h3>
            <span>Educador</span>
            <p>
              Formado em Engenharia de Computação pela UFOP, iniciou sua jornada
              de ensino ainda na universidade. Há 6 anos no mercado como
              programador, é o educador que vai te guiar no Ignite Elixir.
            </p>
            <button>GITHUB</button>
            <button>INSTAGRAM</button>
          </div>
          <div><img src="" alt="" /></div>
        </div> -->

        <!-- <div class="programs__content__educator__rodrigo">
          <div class="programs__content__bottom__rodrigo__skills">
            <strong
              >Se o seu objetivo está alinhado com desenvolvimento mobile, e
              você deseja construir aplicações modernas tanto para iOS quanto
              para Android de forma nativa, esse Ignite é para você.</strong
            >
            <h3>Rodrigo Gonçalves</h3>
            <span>Educador</span>
            <p>
              Coordenador e professor da Graduação em Sistemas de Informação,
              Analista de Soluções Tecnológicas e Desenvolvedor Full Stack
              Mobile e Web, é o educador que vai te guiar no Ignite React
              Native.
            </p>
            <button>GITHUB</button>
            <button>INSTAGRAM</button>
          </div>
          <div><img src="" alt="" /></div>
        </div> -->

        <!-- <div class="programs__content__educator__gabriel">
          <div class="programs__content__bottom__gabriel__skills">
            <strong
              >Se o seu objetivo está alinhado com desenvolvimento mobile de
              aplicações compiladas de forma nativa para celular, web e desktop
              a partir de um único código-base, esse Ignite é para você.</strong
            >
            <h3>Gabriel Sávio</h3>
            <span>Educador</span>
            <p>
              Dev leader em Flutter, Co-Founder da Flutterando, e Bacharel de
              Engenharia de Computação. Atua no mercado de desenvolvimento
              mobile desde 2018 e é o educador que vai te guiar no Ignite
              Flutter.
            </p>
            <button>GITHUB</button>
            <button>INSTAGRAM</button>
          </div>
          <div><img src="" alt="" /></div>
        </div> -->
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.programs {
  background: var(--darker-gradient-left);
  border-bottom: 1px solid rgba(255, 255, 255, 0.123);
  &__content {
    display: flex;
    width: 80%;
    max-width: 1120px;
    justify-content: center;
    margin: 0 auto;
    flex-direction: column;
    &__text {
      display: flex;
      padding: 160px 0;
      &__h2 {
        h2 {
          font-size: 48px;
          color: #e1e1e6;
          line-height: 54px;
        }
      }
      &__span {
        span {
          color: #e1e1e6;
          font-size: 16px;
        }
      }
    }
    &__educator {
      display: flex;
      &__trails {
        display: flex;
        flex-direction: column;
        &__react {
          background: linear-gradient(90deg, #182328, rgba(18, 18, 20, 0));
          width: 320px;
          height: 93px;
          align-items: flex-start;
          flex-direction: column;
          padding: 16px 0 16px 56px;
          justify-content: center;
          border-radius: 5px;
          outline: 0;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        &__node {
          background: linear-gradient(90deg, #21381b, rgba(18, 18, 20, 0));

          width: 320px;
          height: 93px;
          align-items: flex-start;
          flex-direction: column;
          padding: 16px 0 16px 56px;
          justify-content: center;
          border-radius: 5px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        &__elixir {
          background: linear-gradient(90deg, #2e2340, rgba(18, 18, 20, 0));
          width: 320px;
          height: 93px;
          align-items: flex-start;
          flex-direction: column;
          padding: 16px 0 16px 56px;
          justify-content: center;
          border-radius: 5px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        &__rnative {
          background: linear-gradient(90deg, #153779, rgba(18, 18, 20, 0));
          width: 320px;
          height: 93px;
          align-items: flex-start;
          flex-direction: column;
          padding: 16px 0 16px 56px;
          justify-content: center;
          border-radius: 5px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        &__flutter {
          background: linear-gradient(90deg, #074b87, rgba(18, 18, 20, 0));
          width: 320px;
          height: 93px;
          align-items: flex-start;
          flex-direction: column;
          padding: 16px 0 16px 56px;
          justify-content: center;
          border-radius: 5px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
      }

      &__diego {
        display: flex;
        background: var(--react-gradient);
        padding: unset;
        border-radius: 5px;
        width: 736px;
        flex-direction: row;
        &__skills {
          width: 480px;
          height: 580px;
          padding: 40px;
          &__one {
            margin-bottom: 64px;
            color: #e1e1e6;
            font-size: 18px;
            line-height: 28px;
            strong {
              color: #e1e1e6;
            }
          }
          h3 {
            font-size: 24px;
            color: #e1e1e6;
            line-height: 30px;
            margin: 24px 0 8px;
          }
          span {
            font-size: 16px;
            color: #2ac7e3;
            font-size: 16px;
            line-height: 26px;
          }
          &__two {
            font-size: 16px;
            color: #a8a8b3;
            line-height: 26px;
            margin: 16px 0 36px;
          }
          &__links {
            width: 320px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            &__rede {
              display: flex;
              background: #202024;
              align-items: center;
              border-radius: 5px;
              width: 152px;
              height: 52px;
              &__imgRede {
                display: flex;
                align-items: center;
                justify-content: center;
                background: #29292e;
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
                width: 48px;
                height: 52px;
                img {
                  width: 20px;
                  height: 20px;
                }
              }
              strong {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 12px;
                font-weight: 700;
                margin-left: 30px;
                color: #e1e1e6;
              }
            }
            &__rede {
              display: flex;
              background: #202024;
              align-items: center;
              border-radius: 5px;
              width: 152px;
              height: 52px;
              &__imgRede {
                display: flex;
                align-items: center;
                justify-content: center;
                background: #29292e;
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
                width: 48px;
                height: 52px;
                img {
                  width: 20px;
                  height: 20px;
                }
              }
              strong {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 12px;
                font-weight: 700;
                margin-left: 30px;
                color: #e1e1e6;
              }
            }
          }
        }

        &__img {
          img {
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
          }
        }
      }
    }
    &__daniele {
      display: flex;
      padding: unset;
      border-radius: 5px;
      flex-direction: row;
      width: 736px;
      &__skills {
        width: 480px;
        height: 580px;
        strong {
          width: 400px;
          height: 56px;
          color: #e1e1e6;
          font-size: 18px;
        }
      }
    }
    &__rafael {
      display: flex;
      padding: unset;
      border-radius: 5px;
      flex-direction: row;
      width: 736px;
      &__skills {
        width: 480px;
        height: 580px;
        padding: 40px;
        strong {
          width: 400px;
          height: 56px;
          color: #e1e1e6;
          font-size: 18px;
        }
      }
    }
    &__rodrigo {
      display: flex;
      padding: unset;
      border-radius: 5px;
      flex-direction: row;
      width: 736px;
      &__skills {
        width: 480px;
        height: 580px;
        padding: 40px;
        strong {
          width: 400px;
          height: 56px;
          color: #e1e1e6;
          font-size: 18px;
        }
      }
    }
    &__gabriel {
      display: flex;
      padding: unset;
      border-radius: 5px;
      flex-direction: row;
      width: 736px;
      &__skills {
        width: 480px;
        height: 580px;
        padding: 40px;
        strong {
          width: 400px;
          height: 56px;
          color: #e1e1e6;
          font-size: 18px;
        }
      }
    }
  }
}
</style>
