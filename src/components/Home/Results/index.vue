<template>
  <section class="container">
    <div class="container__results">
      <div class="container__results__title">
        <h3>Geramos resultado através do ensino de programação</h3>
      </div>
      <div class="container__results__depoiments">
        <div class="container__results__depoiments__left">
          <div>
            <p>
              “Fiz muitas conexões que me levaram a hoje me redescobrir dentro
              da tecnologia e atuar com algumas stacks que além de estar em alta
              no mercado fazem o meu dia ficar mais feliz. Sou eternamente grato
              a Rocketseat assim como sou um eterno aluno do inicio ao fim!”
            </p>
            <div class="container__results__depoiments__left__dates">
              <div class="container__results__depoiments__left__dates__img">
                <img src="@/assets/homem1.jpg" alt="Foto de Henrique Weiand" />
              </div>
              <div>
                <h3>Henrique Weiand</h3>
                <strong>Remote TechLead/Developer</strong>
              </div>
            </div>
          </div>
          <div class="container__results__depoiments__left__border"></div>

          <div>
            <p>
              “O apoio da comunidade, e a estrutura do curso foram fundamentais
              para o meu crescimento e entender como aquelas linhas de código
              faziam sentido completo! No backend, frontend e mobile, é
              indescritível poder criar seu produto! Obrigada Rocketseat, U
              Rock”
            </p>
            <div class="container__results__depoiments__left__dates">
              <div class="container__results__depoiments__left__dates__img">
                <img src="@/assets/mulher.jpg" alt="" />
              </div>
              <div>
                <h3>Paloma Andrade de Oliveira</h3>
                <strong>Engenheira de Software | Sauce Labs</strong>
              </div>
            </div>
          </div>
        </div>

        <div class="container__results__depoiments__right">
          <div>
            <p>
              “Hoje faço trabalhos para para clientes até fora do Brasil, e isso
              em 11 meses que comecei a aprender com a Rocketseat. Tenho orgulho
              de dizer que recebo no mínimo 3 contatos para entrevistas pelo
              LinkedIn por semana, e sou um profissional procurado.”
            </p>
            <div class="container__results__depoiments__right__dates">
              <div class="container__results__depoiments__right__dates__img">
                <img src="@/assets/homem2.jpg" alt="" />
              </div>
              <div>
                <h3>Anderson Alves</h3>
                <strong>Fundador e Negócios na Yoopih</strong>
              </div>
            </div>
          </div>

          <div class="container__results__depoiments__right__border"></div>

          <div>
            <p>
              “Aprendi muito e de maneira bem rápida, consegui um novo emprego
              em uma empresa incrível e trabalho com o que eu amo nas
              tecnologias que eu mais gosto no momento. Só tenho a agradecer a
              toda a equipe por tornar isso possível!”
            </p>
            <div class="container__results__depoiments__right__dates">
              <div class="container__results__depoiments__right__dates__img">
                <img src="@/assets/morena.jpg" alt="" />
              </div>
              <div>
                <h3>Melissa Fernandes Novais</h3>
                <strong>Desenvolvedora Front-end</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container {
  background: --darker-gradient-right;
  border-bottom: 1px solid rgba(255, 255, 255, 0.123);
  &__results {
    display: flex;
    width: 80%;
    max-width: 1120px;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 auto;
    &__title {
      width: 550px;
      margin-top: 15%;

      h3 {
        font-size: 44px;
        line-height: 54px;
        color: #e1e1e6;
      }
    }
    &__depoiments {
      display: flex;
      margin-bottom: 15%;
      &__left {
        margin-top: 90px;
        margin-right: 90px;
        p {
          width: 520px;
          color: #e1e1e6;
          line-height: 145%;
        }
        &__dates {
          display: flex;
          margin-top: 20px;
          align-items: center;
          &__img {
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.383);
            border-radius: 50%;
            margin-right: 20px;
            width: 60px;
            height: 60px;
            img {
              width: 50px;
              height: 50px;
              border-radius: 50%;
            }
          }

          h3 {
            color: #e1e1e6;
          }
          strong {
            color: #b8b8bb;
            font-weight: normal;
          }
        }
        &__border {
          border-bottom: 1px solid rgba(255, 255, 255, 0.116);
          margin: 35px 0;
        }
      }

      &__right {
        margin-bottom: 50px;
        p {
          width: 520px;
          color: #e1e1e6;
          line-height: 145%;
        }
        &__dates {
          display: flex;
          margin-top: 20px;
          align-items: center;
          &__img {
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.383);
            border-radius: 50%;
            margin-right: 20px;
            width: 60px;
            height: 60px;

            img {
              width: 50px;
              height: 50px;
              border-radius: 50%;
            }
          }

          h3 {
            color: #e1e1e6;
          }
          strong {
            color: #b8b8bb;
            font-weight: normal;
          }
        }
        &__border {
          border-bottom: 1px solid rgba(255, 255, 255, 0.116);
          margin: 35px 0;
        }
      }
    }
  }
}
</style>
