<template>
  <section class="container-programs">
    <div class="container-programs__content">
      <div class="container-programs__content__text">
        <div class="container-programs__content__text__h2">
          <h2>
            Programas dedicados e não-dependentes
          </h2>
        </div>
        <div class="container-programs__content__text__span">
          <span>
            Escolha o Ignite que está mais alinhado com seus objetivos e acelere
            sua evolução através de um conteúdo profundo e focado.
          </span>
        </div>
      </div>
      <div class="container-programs__content__bottom">
        <div>
          <button>Ignite ReactJS</button>
          <button>Ignite Node.js</button>
          <button>Ignite Elixir</button>
          <button>Ignite React Native</button>
          <button>Ignite Flutter</button>
        </div>
        <div class="container-programs__content__bottom__diego">
          <div class="container-programs__content__bottom__diego__skills">
            <strong
              >Se o seu objetivo está alinhado com o front-end, e você deseja
              construir interfaces modernas e reativas na web utilizando uma
              biblioteca modular e escalável, esse Ignite é para você.</strong
            >
            <h3>Diego Fernandes</h3>
            <span>Educador</span>
            <p>
              Responsável pela área de tecnologia da Rocketseat - onde
              utilizamos principalmente Node.js e ReactJS para atender milhares
              de devs na nossa plataforma - é o educador que vai te guiar no
              Ignite ReactJS.
            </p>
            <button>GITHUB</button>
            <button>INSTAGRAM</button>
          </div>
          <div><img src="" alt="" /></div>
        </div>

        <div class="container-programs__content__bottom__daniele">
          <div class="container-programs__content__bottom__daniele__skills">
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
        </div>

        <div class="container-programs__content__bottom__rafael">
          <div class="container-programs__content__bottom__rafael__skills">
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
        </div>

        <div class="container-programs__content__bottom__rodrigo">
          <div class="container-programs__content__bottom__rodrigo__skills">
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
        </div>

        <div class="container-programs__content__bottom__gabriel">
          <div class="container-programs__content__bottom__gabriel__skills">
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
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container-programs {
  background: var(--darker-gradient-left);

  &__content {
    display: flex;
    width: 80%;
    max-width: 1120px;
    justify-content: center;
    margin: 0 auto;
    flex-direction: column;
    &__text {
      display: flex;
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
    &__bottom {
      display: flex;
      &__diego {
        display: flex;
        padding: unset;
        border-radius: 5px;
        width: 736px;
        flex-direction: row;
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
}
</style>
